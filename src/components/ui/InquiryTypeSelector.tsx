import type { InquiryType } from '@/types/contact'

const OPTIONS: ReadonlyArray<{ value: InquiryType; label: string }> = [
  { value: 'dj', label: 'Book a DJ' },
  { value: 'production', label: 'Production & Rentals' },
  { value: 'general', label: 'General Inquiry' },
]

interface InquiryTypeSelectorProps {
  value: InquiryType
  onChange: (type: InquiryType) => void
}

export function InquiryTypeSelector({ value, onChange }: InquiryTypeSelectorProps) {
  return (
    <fieldset>
      <legend className="sr-only">What are you planning?</legend>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {OPTIONS.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name="inquiryType"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only peer"
            />
            <span className="flex items-center justify-center px-4 py-3 text-sm font-medium bg-background border border-border rounded-lg text-muted transition-all hover:border-accent/50 peer-checked:bg-accent peer-checked:text-background peer-checked:border-accent peer-checked:font-semibold peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
