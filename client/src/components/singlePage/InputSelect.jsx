import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const InputSelect = () => {
  return (
    <Select>
      <SelectTrigger className={('rounded-xl text-text_secondary w-full mr-3')}>
        <SelectValue placeholder='Sort by popularity' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by popularity</SelectLabel>
          <SelectItem value='apple'>Apple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
