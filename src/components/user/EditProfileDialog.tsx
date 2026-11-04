'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { Pencil } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner'

type UserUpdate = {
  name: string
  image: string | null
}

export function EditProfile({ name, image }: UserUpdate) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [nameValue, setNameValue] = useState(name)
  const [imageValue, setImageValue] = useState(image ?? '')
  const [isSaving, setIsSaving] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const updatedName = nameValue.trim()
    const updatedImage = imageValue.trim()

    if (!updatedName) {
      toast.error('Name is required')
      return
    }

    setIsSaving(true)
    try {
      const { error } = await authClient.updateUser({
        name: updatedName,
        image: updatedImage || null,
      })

      if (error) {
        toast.error(error.message || 'Failed to update profile')
        return
      }

      toast.success('Profile updated successfully!')
      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error('Profile update error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        type='button'
        variant='outline'
        className='w-fit mx-auto md:mx-0 cursor-pointer bg-transparent px-7 py-5 text-foreground sm:w-fit'
        onClick={() => setOpen(true)}
      >
        <Pencil className='size-4' />
        Edit Profile
      </Button>

      <DialogContent className='sm:max-w-xl'>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className='my-5'>
            <Field>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                required
                className='h-12 rounded-xl border-input bg-background px-4 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </Field>

            <Field>
              <Label htmlFor='image'>Profile Photo URL</Label>
              <Input
                id='image'
                name='image'
                value={imageValue}
                onChange={(e) => setImageValue(e.target.value)}
                type='url'
                placeholder='https://example.com/photo.jpg'
                className='h-12 rounded-xl border-input bg-background px-4 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose
              render={
                <Button
                  variant='outline'
                  type='button'
                  disabled={isSaving}
                  className={`py-5`}
                >
                  Cancel
                </Button>
              }
            />

            <Button type='submit' disabled={isSaving} className={`py-5`}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
