import { MDEditor } from "@rootflow/mdeditor"

interface Attribute {
  type: string
}

interface MdEditorInputProps {
  attribute: Attribute
  name: string
  value: string
  onChange: (event: { target: { name: string; type: string; value: string } }) => void
  disabled?: boolean
}

const MdEditorInput = ({ attribute, name, value, onChange, disabled }: MdEditorInputProps) => {
  return (
    <MDEditor
      value={value ?? ""}
      onChange={(val: string) =>
        onChange({ target: { name, type: attribute.type, value: val } })
      }
      disabled={disabled}
    />
  )
}

export { MdEditorInput }
