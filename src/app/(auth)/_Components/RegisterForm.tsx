'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  Camera,
  ArrowLeft,
  HeartPlus,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import logo from '@/assets/event_logo.png'
import Image from 'next/image'
import { validateEmail } from './validateEmail'
import { validatePassword } from './ValidatePassword'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components/ui/spinner'

//Todo: user data type

type TUserDataProps = {
  name: string
  email: string
  password: string
  image: string
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  //Todo: email and password validation state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  //Todo: submit handler
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(email)) return
    if (!validatePassword(password)) return

    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const userData = Object.fromEntries(formData.entries()) as TUserDataProps

      const { error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.image,
      })

      if (error) {
        toast.error(error.message)
        return
      }

      toast.success('Account created successfully!')
      router.push('/login')
    } catch {
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='flex min-h-[calc(100vh-80px)] items-center justify-center bg-background px-4 py-12'>
      <div className='w-full max-w-md'>
        <div className='rounded-2xl border bg-card p-6 shadow-lg shadow-black/5 sm:p-8'>
          {/* Heading */}
          <div className='mb-8 text-center'>
            {/* <div className='mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED]'>
              <Image src={logo} alt='logo' />
            </div> */}
            <div className='flex mx-auto mb-5 size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] shadow-[0_0_18px_rgba(124,58,237,0.25)]'>
              <HeartPlus className='size-5 text-white' strokeWidth={2.5} />
            </div>

            <h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>
              Create an Account
            </h1>

            <p className='mt-2 text-sm text-muted-foreground'>
              Join our community and start making a difference.
            </p>
          </div>

          {/* Register Form */}
          <form className='space-y-5' onSubmit={onSubmit}>
            {/* Full Name */}
            <div className='space-y-2'>
              <Label htmlFor='name'>Full Name</Label>

              <div className='relative'>
                <UserRound className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />

                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your full name'
                  className='h-11 pl-10 bg-[#F8FAFC] shadow focus-visible:ring-[#7C3AED]'
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className='space-y-2'>
              <Label htmlFor='email'>Email Address</Label>

              <div className='relative'>
                <Mail className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />

                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='h-11 pl-10 bg-[#F8FAFC] shadow focus-visible:ring-[#7C3AED]'
                  required
                />
              </div>
            </div>

            {/* Profile Photo URL */}
            <div className='space-y-2'>
              <Label htmlFor='photoURL'>Profile Photo URL</Label>

              <div className='relative'>
                <Camera className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />

                <Input
                  id='photoURL'
                  name='image'
                  type='url'
                  placeholder='https://example.com/photo.jpg'
                  className='h-11 pl-10 bg-[#F8FAFC] shadow focus-visible:ring-[#7C3AED]'
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>

              <div className='relative'>
                <LockKeyhole className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />

                <Input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Create a password'
                  className='h-11 px-10 bg-[#F8FAFC] shadow focus-visible:ring-[#7C3AED]'
                  required
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className='absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-[#7C3AED]'
                >
                  {showPassword ? (
                    <EyeOff className='size-4' />
                  ) : (
                    <Eye className='size-4' />
                  )}
                </button>
              </div>

              <p className='text-xs text-muted-foreground'>
                Must contain uppercase, lowercase and at least 6 characters.
              </p>
            </div>

            {/* Register Button */}
            <Button
              type='submit'
              disabled={loading}
              className='h-11 w-full bg-linear-to-r from-[#7C3AED] to-[#4C1D95] font-semibold text-white transition-all duration-300 hover:from-[#6D28D9] hover:to-[#3B0764] disabled:cursor-not-allowed disabled:opacity-70'
            >
              {loading ? (
                <>
                  <Spinner className='size-4 animate-spin' />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          {/* Login Link */}
          <p className='mt-6 text-center text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-semibold text-[#7C3AED] transition-colors hover:text-[#4C1D95] hover:underline'
            >
              Login here
            </Link>
          </p>
        </div>

        {/* Footer Text */}
        <Link
          href={'/'}
          className='mt-6 text-center text-xs text-muted-foreground hover:underline cursor-pointer flex items-center justify-center gap-2'
        >
          <ArrowLeft size={14} /> Home
        </Link>
      </div>
    </main>
  )
}

export default RegisterForm
