'use client'

import Link from 'next/link'
import Image from 'next/image'
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
import { Spinner } from '@/components/ui/spinner'

import { validateEmail } from './validateEmail'
import { validatePassword } from './ValidatePassword'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import signUpImage from '@/assets/signup.png'

// User data type
type TUserDataProps = {
  name: string
  email: string
  password: string
  image: string
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  // Submit handler
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
    <main className='min-h-screen w-full bg-background'>
      <div className='grid min-h-screen w-full overflow-hidden bg-card lg:grid-cols-12'>
        <div className='relative hidden min-h-screen overflow-hidden bg-[#0B1020] lg:col-span-5 lg:block'>
          <Image
            src={signUpImage}
            alt='SocialBridge community illustration'
            fill
            priority
            sizes='33vw'
            className='object-cover'
          />

          {/* Image Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/30 to-transparent' />

          {/* Image Content */}
          <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white'>
            <div className='mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#86EFAC] to-[#16A34A] shadow-lg shadow-green-900/30'>
              <HeartPlus className='size-6 text-white' />
            </div>

            <h2 className='text-3xl leading-tight font-bold xl:text-4xl'>
              Join Our <span className='text-[#86EFAC]'>Community.</span>
            </h2>

            <p className='mt-4 max-w-sm text-sm leading-7 text-white/75'>
              Create your account and connect with people who are passionate
              about making a positive impact in their communities.
            </p>
          </div>
        </div>
        {/* Left Side - Register Form (8 Columns) */}
        <div className='flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:col-span-7 lg:px-16'>
          <div className='w-full max-w-xl'>
            {/* Heading */}
            <div className='mb-8 text-center'>
              <div className='mx-auto mb-5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#86EFAC] to-[#16A34A] shadow-[0_0_18px_rgba(22,163,74,0.25)]'>
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
                    className='h-11 bg-background pl-10 shadow focus-visible:ring-primary'
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
                    className='h-11 bg-background pl-10 shadow focus-visible:ring-primary'
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
                    className='h-11 bg-background pl-10 shadow focus-visible:ring-primary'
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
                    className='h-11 bg-background px-10 shadow focus-visible:ring-primary'
                    required
                  />

                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    className='absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary'
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
                className='h-11 w-full bg-gradient-to-r from-[#16A34A] to-[#047857] font-semibold text-white transition-all duration-300 hover:from-[#15803D] hover:to-[#065F46] hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-70'
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
                className='font-semibold text-primary transition-colors hover:text-[#047857] hover:underline'
              >
                Login here
              </Link>
            </p>

            {/* Home Link */}
            <Link
              href='/'
              className='mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground transition-colors hover:text-primary hover:underline'
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>

        {/* Right Side - Image (4 Columns) */}
      </div>
    </main>
  )
}

export default RegisterForm
