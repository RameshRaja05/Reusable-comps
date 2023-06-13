export type optionObj = { label: string, value: string }

export type DropdownProps = {
  options: optionObj[];
  onChange: (option: optionObj) => void;
  value: optionObj | null;
}