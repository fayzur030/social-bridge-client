export const validateRegister = (
  name: string,
  email: string,
  password: string,
  image: string
) => {
  if (!name.trim()) {
    return 'Name is required'
  }

  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters'
  }

  if (!email.trim()) {
    return 'Email is required'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address'
  }

  if (!password.trim()) {
    return 'Password is required'
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }

  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter'
  }

  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter'
  }

  if (!image.trim()) {
    return 'Profile image URL is required'
  }

  try {
    new URL(image)
  } catch {
    return 'Please enter a valid image URL'
  }

  return null
}
