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
      <SelectTrigger className='w-[180px] rounded-lg text-text_secondary'>
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
