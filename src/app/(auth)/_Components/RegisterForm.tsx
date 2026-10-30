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
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import logo from '@/assets/event_logo.png'
import Image from 'next/image'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className='flex min-h-[calc(100vh-80px)] items-center justify-center bg-background px-4 py-12'>
      <div className='w-full max-w-md'>
        <div className='rounded-2xl border bg-card p-6 shadow-lg shadow-black/5 sm:p-8'>
          {/* Heading */}
          <div className='mb-8 text-center'>
            <div className='mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Image src={logo} alt='logo' />
            </div>

            <h1 className='text-2xl font-bold tracking-tight sm:text-3xl'>
              Create an Account
            </h1>

            <p className='mt-2 text-sm text-muted-foreground'>
              Join our community and start making a difference.
            </p>
          </div>

          {/* Register Form */}
          <form className='space-y-5'>
            {/* Full Name */}
            <div className='space-y-2'>
              <Label htmlFor='name'>Full Name</Label>

              <div className='relative'>
                <UserRound className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />

                <Input
                  id='name'
                  type='text'
                  placeholder='Enter your full name'
                  className='h-11 pl-10 bg-[#F8FAFC] shadow'
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
                  type='email'
                  placeholder='Enter your email'
                  className='h-11 pl-10 bg-[#F8FAFC] shadow'
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
                  type='url'
                  placeholder='https://example.com/photo.jpg'
                  className='h-11 pl-10 bg-[#F8FAFC] shadow'
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Create a password'
                  className='h-11 px-10 bg-[#F8FAFC] shadow'
                  required
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className='absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground'
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
              className='h-11 w-full bg-gradient-to-r from-[#087F5B] to-[#20B981] font-semibold text-white transition-all duration-300 hover:from-[#066B4D] hover:to-[#10B981]'
            >
              Create Account
            </Button>
          </form>

          {/* Login Link */}
          <p className='mt-6 text-center text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-semibold text-[#066B4D] transition-colors hover:underline'
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
