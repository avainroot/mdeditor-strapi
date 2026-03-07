import { MDEditor } from "@rootflow/mdeditor"
import { Field } from "@strapi/design-system"

import type { MessageDescriptor } from 'react-intl'

interface IntlObject extends MessageDescriptor {
  defaultMessage: string
}

interface CustomFieldAttribute {
  type: string
  customField: string
  [key: string]: unknown
}

interface MdEditorInputProps {
  attribute: CustomFieldAttribute
  name: string
  value: string
  onChange: (event: { target: { name: string; value: string; type: string } }) => void
  intlLabel: IntlObject
  description?: IntlObject
  placeholder?: IntlObject
  hint?: string
  error?: IntlObject
  contentTypeUID?: string
  type?: string
  required?: boolean
  disabled?: boolean
}

const MdEditorInput = ({ attribute, name, value, onChange, disabled, required, error, hint, intlLabel }: MdEditorInputProps) => {
  return (
    <Field.Root name={name} required={required} error={error} hint={hint}>
      <Field.Label>{intlLabel?.defaultMessage ?? name}</Field.Label>
      <MDEditor
        value={value ?? ""}
        onChange={(val: string) =>
          onChange({ target: { name, type: attribute.type, value: val } })
        }
        disabled={disabled}
      />
      <Field.Hint />
      <Field.Error />
    </Field.Root>
  )
}

export { MdEditorInput }
