import type { ChangeEvent } from 'react'

type FieldChangeHandler = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => void

const CONTROL_CLASSES =
  'w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all'

const LABEL_CLASSES = 'block text-sm font-medium text-foreground mb-2'

function RequiredMark() {
  return <span className="text-accent">*</span>
}

interface TextFieldProps {
  id: string
  label: string
  value: string
  onChange: FieldChangeHandler
  required?: boolean
  type?: 'text' | 'email' | 'tel' | 'date'
  placeholder?: string
}

export function TextField({
  id,
  label,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASSES}>
        {label} {required && <RequiredMark />}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={CONTROL_CLASSES}
        placeholder={placeholder}
      />
    </div>
  )
}

interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  id: string
  label: string
  value: string
  onChange: FieldChangeHandler
  options: ReadonlyArray<SelectOption>
  required?: boolean
  placeholder?: string
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  required,
  placeholder = 'Select one',
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASSES}>
        {label} {required && <RequiredMark />}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={CONTROL_CLASSES}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

interface TextAreaFieldProps {
  id: string
  label: string
  value: string
  onChange: FieldChangeHandler
  required?: boolean
  placeholder?: string
  rows?: number
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  required,
  placeholder,
  rows = 6,
}: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASSES}>
        {label} {required && <RequiredMark />}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`${CONTROL_CLASSES} resize-y`}
        placeholder={placeholder}
      />
    </div>
  )
}

interface CheckboxGroupProps {
  label: string
  options: readonly string[]
  selected: string[]
  onToggle: (value: string) => void
}

export function CheckboxGroup({ label, options, selected, onToggle }: CheckboxGroupProps) {
  return (
    <fieldset>
      <legend className={LABEL_CLASSES}>{label}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg cursor-pointer transition-all hover:border-accent/50 has-[:checked]:border-accent has-[:checked]:bg-accent/10"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="h-4 w-4 accent-accent"
            />
            <span className="text-sm text-foreground">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
