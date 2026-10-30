import { toast } from 'sonner'

export const validatePassword = (value: string) => {
  if (value.length < 6) {
    toast.error('Password must be at least 6 characters long.')
    return false
  }

  if (!/[A-Z]/.test(value)) {
    toast.error('Password must contain at least one uppercase letter (A-Z).')
    return false
  }

  if (!/[a-z]/.test(value)) {
    toast.error('Password must contain at least one lowercase letter (a-z).')
    return false
  }

  return true
}
