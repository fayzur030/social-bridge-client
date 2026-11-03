export const validateLogin = (email: string, password: string) => {
  if (!email.trim()) {
    return 'Email is required'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address'
  }

  if (!password.trim()) {
    return 'Password is required'
  }

  return null
}
