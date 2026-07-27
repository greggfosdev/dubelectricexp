'use client'

import { useEffect, useState } from 'react'
import type { ContactPayload, InquiryType } from '@/types/contact'
import { consumePendingIntent, subscribeBookingIntent } from '@/lib/bookingIntent'
import { InquiryTypeSelector } from './InquiryTypeSelector'
import { CheckboxGroup, SelectField, TextAreaField, TextField } from './FormFields'

const DJ_EVENT_TYPES = [
  'Wedding',
  'Corporate',
  'Birthday & Private',
  'Club & Nightlife',
  'Festival',
  'Caribbean & Cultural',
  'School & Community',
  'Other',
] as const

const PRODUCTION_EVENT_TYPES = [
  'Wedding',
  'Corporate',
  'Birthday & Private',
  'Club & Nightlife',
  'Festival',
  'Concert & Stage Show',
  'Caribbean & Cultural',
  'School & Community',
  'Other',
] as const

const GUEST_COUNTS = ['Under 50', '50-100', '100-250', '250-500', '500+'] as const
const ATTENDANCE_RANGES = ['Under 100', '100-300', '300-1,000', '1,000+'] as const
const INDOOR_OUTDOOR = ['Indoor', 'Outdoor', 'Both', 'Not sure'] as const
const VENUE_POWER = ['Yes', 'No', 'Not sure'] as const
const ADD_ONS = ['Sound system', 'Lighting', 'LED wall', 'Not sure yet'] as const
const PRODUCTION_NEEDS = [
  'Sound system',
  'LED video wall',
  'Lighting',
  'Stage & trussing',
  'Wireless mics',
  'DJ booth',
  'Power & generator',
  'Full production',
  'Not sure',
] as const
const TOPICS = ['Press & Media', 'Collaboration & Guest DJ', 'Merch', 'Events & Tickets', 'Other'] as const

const DJ_BUDGETS = [
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-plus', label: '$5,000+' },
] as const

const PRODUCTION_BUDGETS = [
  { value: 'under-1000', label: 'Under $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-plus', label: '$10,000+' },
] as const

const toOptions = (values: readonly string[]) =>
  values.map((value) => ({ value, label: value }))

// Fields whose option sets differ between types get their own keys so a value
// picked under one type can never silently submit under the other.
interface BookingFormState {
  name: string
  email: string
  phone: string
  message: string
  company: string // honeypot
  cityVenue: string
  indoorOutdoor: string
  djEventDate: string
  djEventType: string
  guestCount: string
  musicVibe: string
  addOns: string[]
  djBudget: string
  productionEventDates: string
  productionEventType: string
  attendance: string
  needs: string[]
  venuePower: string
  setupNotes: string
  productionBudget: string
  topic: string
}

const INITIAL_STATE: BookingFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  company: '',
  cityVenue: '',
  indoorOutdoor: '',
  djEventDate: '',
  djEventType: '',
  guestCount: '',
  musicVibe: '',
  addOns: [],
  djBudget: '',
  productionEventDates: '',
  productionEventType: '',
  attendance: '',
  needs: [],
  venuePower: '',
  setupNotes: '',
  productionBudget: '',
  topic: '',
}

export function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('dj')
  const [formData, setFormData] = useState<BookingFormState>(INITIAL_STATE)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const unsubscribe = subscribeBookingIntent((type) => {
      setInquiryType(type)
      setSubmitStatus('idle')
    })
    const pending = consumePendingIntent()
    if (pending) setInquiryType(pending)
    return unsubscribe
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleCheckbox = (field: 'addOns' | 'needs', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }))
  }

  const handleTypeChange = (type: InquiryType) => {
    setInquiryType(type)
    setSubmitStatus('idle')
  }

  const buildPayload = (): ContactPayload => {
    const shared = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
    }

    switch (inquiryType) {
      case 'dj':
        return {
          ...shared,
          inquiryType: 'dj',
          eventDate: formData.djEventDate,
          eventType: formData.djEventType,
          cityVenue: formData.cityVenue,
          guestCount: formData.guestCount,
          indoorOutdoor: formData.indoorOutdoor,
          musicVibe: formData.musicVibe,
          addOns: formData.addOns,
          budgetRange: formData.djBudget,
          message: formData.message,
        }
      case 'production':
        return {
          ...shared,
          inquiryType: 'production',
          eventDate: formData.productionEventDates,
          eventType: formData.productionEventType,
          cityVenue: formData.cityVenue,
          attendance: formData.attendance,
          needs: formData.needs,
          indoorOutdoor: formData.indoorOutdoor,
          venuePower: formData.venuePower,
          setupNotes: formData.setupNotes,
          budgetRange: formData.productionBudget,
          message: formData.message,
        }
      case 'general':
        return {
          ...shared,
          inquiryType: 'general',
          topic: formData.topic,
          message: formData.message,
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(buildPayload()),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Failed to submit form')
      }

      setSubmitStatus('success')
      setFormData(INITIAL_STATE)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <InquiryTypeSelector value={inquiryType} onChange={handleTypeChange} />

      <TextField
        id="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Your name"
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="your@email.com"
      />

      <TextField
        id="phone"
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required={inquiryType !== 'general'}
        placeholder="(555) 123-4567"
      />

      {inquiryType === 'dj' && (
        <>
          <TextField
            id="djEventDate"
            label="Event Date"
            type="date"
            value={formData.djEventDate}
            onChange={handleChange}
            required
          />
          <SelectField
            id="djEventType"
            label="Event Type"
            value={formData.djEventType}
            onChange={handleChange}
            options={toOptions(DJ_EVENT_TYPES)}
            required
            placeholder="Select event type"
          />
          <TextField
            id="cityVenue"
            label="City / Venue"
            value={formData.cityVenue}
            onChange={handleChange}
            required
            placeholder="Brooklyn, NY • The Venue Name"
          />
          <SelectField
            id="guestCount"
            label="Number of Guests"
            value={formData.guestCount}
            onChange={handleChange}
            options={toOptions(GUEST_COUNTS)}
            placeholder="Select a range"
          />
          <SelectField
            id="indoorOutdoor"
            label="Indoor or Outdoor?"
            value={formData.indoorOutdoor}
            onChange={handleChange}
            options={toOptions(INDOOR_OUTDOOR)}
          />
          <TextField
            id="musicVibe"
            label="Music Vibe"
            value={formData.musicVibe}
            onChange={handleChange}
            placeholder="Reggae, soca, hip-hop, open format…"
          />
          <CheckboxGroup
            label="Also need sound, lighting, or LED?"
            options={ADD_ONS}
            selected={formData.addOns}
            onToggle={(value) => toggleCheckbox('addOns', value)}
          />
          <SelectField
            id="djBudget"
            label="Budget Range"
            value={formData.djBudget}
            onChange={handleChange}
            options={DJ_BUDGETS}
            placeholder="Select a range"
          />
        </>
      )}

      {inquiryType === 'production' && (
        <>
          <TextField
            id="productionEventDates"
            label="Event Date(s)"
            value={formData.productionEventDates}
            onChange={handleChange}
            required
            placeholder="Aug 12-14, 2026"
          />
          <SelectField
            id="productionEventType"
            label="Event Type"
            value={formData.productionEventType}
            onChange={handleChange}
            options={toOptions(PRODUCTION_EVENT_TYPES)}
            required
            placeholder="Select event type"
          />
          <TextField
            id="cityVenue"
            label="City / Venue"
            value={formData.cityVenue}
            onChange={handleChange}
            required
            placeholder="Brooklyn, NY • The Venue Name"
          />
          <SelectField
            id="attendance"
            label="Expected Attendance"
            value={formData.attendance}
            onChange={handleChange}
            options={toOptions(ATTENDANCE_RANGES)}
            placeholder="Select a range"
          />
          <CheckboxGroup
            label="What do you need?"
            options={PRODUCTION_NEEDS}
            selected={formData.needs}
            onToggle={(value) => toggleCheckbox('needs', value)}
          />
          <SelectField
            id="indoorOutdoor"
            label="Indoor or Outdoor?"
            value={formData.indoorOutdoor}
            onChange={handleChange}
            options={toOptions(INDOOR_OUTDOOR)}
          />
          <SelectField
            id="venuePower"
            label="Does the venue have power?"
            value={formData.venuePower}
            onChange={handleChange}
            options={toOptions(VENUE_POWER)}
          />
          <TextField
            id="setupNotes"
            label="Setup / Load-in Notes"
            value={formData.setupNotes}
            onChange={handleChange}
            placeholder="Load-in window, stage size, dock access…"
          />
          <SelectField
            id="productionBudget"
            label="Budget Range"
            value={formData.productionBudget}
            onChange={handleChange}
            options={PRODUCTION_BUDGETS}
            placeholder="Select a range"
          />
        </>
      )}

      {inquiryType === 'general' && (
        <SelectField
          id="topic"
          label="Topic"
          value={formData.topic}
          onChange={handleChange}
          options={toOptions(TOPICS)}
          placeholder="What's it about?"
        />
      )}

      <TextAreaField
        id="message"
        label={inquiryType === 'general' ? 'Message' : 'Anything else?'}
        value={formData.message}
        onChange={handleChange}
        required={inquiryType === 'general'}
        placeholder={
          inquiryType === 'general'
            ? 'What can we help with?'
            : 'Timing, special moments, must-play tracks, venue quirks…'
        }
      />

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 text-base font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting
          ? 'Sending...'
          : inquiryType === 'general'
            ? 'Send Inquiry'
            : 'Send Booking Request'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-sm text-accent">
            Thanks for reaching out! We&apos;ll get back to you within 24-48 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-sm text-red-400">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}
    </form>
  )
}
