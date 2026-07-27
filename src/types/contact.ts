export type InquiryType = 'dj' | 'production' | 'general'

interface ContactPayloadBase {
  inquiryType: InquiryType
  name: string
  email: string
  phone?: string
  company?: string // honeypot
}

export interface DjBookingPayload extends ContactPayloadBase {
  inquiryType: 'dj'
  eventDate: string
  eventType: string
  cityVenue?: string
  guestCount?: string
  indoorOutdoor?: string
  musicVibe?: string
  addOns?: string[]
  budgetRange?: string
  message?: string
}

export interface ProductionBookingPayload extends ContactPayloadBase {
  inquiryType: 'production'
  // Free text rather than a date value; production bookings often span ranges ("Aug 12-14")
  eventDate: string
  eventType: string
  cityVenue?: string
  attendance?: string
  needs?: string[]
  indoorOutdoor?: string
  venuePower?: string
  setupNotes?: string
  budgetRange?: string
  message?: string
}

export interface GeneralInquiryPayload extends ContactPayloadBase {
  inquiryType: 'general'
  topic?: string
  message: string
}

export type ContactPayload =
  | DjBookingPayload
  | ProductionBookingPayload
  | GeneralInquiryPayload
