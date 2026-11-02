'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  HeartPlus,
  LockKeyhole,
  Mail,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import Image from 'next/image'
import loginImage from '@/assets/login_left.png'

type TUserDataLoginProps = {
  email: string
  password: string
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Email and password login
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const userData = Object.fromEntries(
        formData.entries()
      ) as TUserDataLoginProps

      const { data, error } = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
      })

      if (error) {
        toast.error(error.message)
        return
      }

      toast.success(`Welcome back, ${data.user.name}!`)
      router.push('/upcoming-events')
    } catch {
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  // Google login
  const signInWithGoogle = async () => {
    try {
      const { error } = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/upcoming-events?login=success',
      })

      if (error) {
        toast.error(error.message)
      }
    } catch {
      toast.error('Something went wrong!')
    }
  }

  return (
    <main className='min-h-screen bg-background'>
      <div className='grid min-h-screen w-full overflow-hidden bg-card lg:grid-cols-2'>
        {/* Left Side - Image */}
        <div className='relative hidden min-h-[650px] overflow-hidden bg-deep2 lg:block'>
          <Image
            src={loginImage}
            alt='SocialBridge community illustration'
            fill
            priority
            className='object-cover'
            sizes='(max-width: 1024px) 0px, 50vw'
          />

          {/* Image Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-deep2/90 via-deep2/30 to-transparent' />

          {/* Image Content */}
          <div className='absolute inset-0 flex flex-col  justify-center p-10 text-start text-white'>
            <div className='mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green-hover to-brand-green shadow-lg shadow-brand-green/25'>
              <HeartPlus className='size-6 text-white' />
            </div>

            <h2 className='max-w-md text-3xl leading-tight font-bold xl:text-4xl'>
              Together, We Can Make a{' '}
              <span className='text-brand-green-hover'>Difference.</span>
            </h2>

            <p className='mt-4 max-w-md text-sm leading-7 text-white/75'>
              Connect with your community, discover meaningful events, and
              become part of something bigger. Every small action creates a
              positive impact.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className='flex items-center justify-center p-6 sm:p-10 lg:p-12'>
          <div className='w-full max-w-md'>
            {/* Heading */}
            <div className='mb-8 text-center'>
              <div className='mx-auto mb-5 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-hover to-brand-green shadow-lg shadow-brand-green/25'>
                <HeartPlus className='size-5 text-white' strokeWidth={2.5} />
              </div>

              <h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>
                Welcome Back!
              </h1>

              <p className='mt-2 text-sm text-muted-foreground'>
                Sign in to continue making a difference.
              </p>
            </div>

            {/* Login Form */}
            <form className='space-y-5' onSubmit={onSubmit}>
              {/* Email */}
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>

                <div className='relative'>
                  <Mail className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />

                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
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
                    placeholder='Enter your password'
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
              </div>

              {/* Login Button */}
              <Button
                type='submit'
                disabled={loading}
                className='h-11 w-full bg-gradient-to-r from-primary to-primary-hover font-semibold text-primary-foreground transition-all duration-300 hover:from-primary-hover hover:to-primary hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-70'
              >
                {loading ? (
                  <>
                    <Spinner className='size-4 animate-spin' />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login <ArrowRight className='size-4' />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className='relative py-5'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>

              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-card px-3 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              type='button'
              variant='outline'
              onClick={signInWithGoogle}
              className='h-11 w-full cursor-pointer gap-3 font-medium shadow transition-colors hover:bg-muted'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 48'
                className='size-5'
                aria-hidden='true'
              >
                <path
                  fill='#FFC107'
                  d='M43.6 20.5H42V20H24v8h11.3A12 12 0 1 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5Z'
                />
                <path
                  fill='#FF3D00'
                  d='m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A20 20 0 0 0 6.3 14.7Z'
                />
                <path
                  fill='#4CAF50'
                  d='M24 44a20 20 0 0 0 13.7-5.4l-6.3-5.3A12 12 0 0 1 12.9 29l-6.6 5.1A20 20 0 0 0 24 44Z'
                />
                <path
                  fill='#1976D2'
                  d='M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-3.9 5.3l6.3 5.3A20 20 0 0 0 44 24c0-1.2-.1-2.4-.4-3.5Z'
                />
              </svg>
              Continue with Google
            </Button>

            {/* Register Link */}
            <p className='mt-6 text-center text-sm text-muted-foreground'>
              Don&apos;t have an account?{' '}
              <Link
                href='/register'
                className='font-semibold text-primary transition-colors hover:text-primary-hover hover:underline'
              >
                Register here
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
      </div>
    </main>
  )
}

export default LoginForm
