import { toast } from 'sonner'

export const validateEmail = (value: string) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    toast.error('Please enter a valid email address')
    return false
  }
  return true
}
