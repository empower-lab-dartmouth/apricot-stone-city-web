export type AutocompletePickerItemType = 'component' | 'portal' | 'workspace';

export type AutocompletePickerItem = {
    item: string,
    label: string,
    group: string,
    type: AutocompletePickerItemType,
}

export type AutocompletePickerProps = {
    label: string,
    type: 'single'
    value: AutocompletePickerItem | null,
    onChange: (value: AutocompletePickerItem | null) => void,
    options: readonly AutocompletePickerItem[],
} |
{
  label: string,
  type: 'checkbox'
  value: AutocompletePickerItem[] | undefined,
  onChange: (value: AutocompletePickerItem[] | undefined) => void,
  options: readonly AutocompletePickerItem[],
}
