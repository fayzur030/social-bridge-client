import {
  Calendar,
  Clock,
  Mail,
  ShieldCheck,
  UserRound,
  CheckCircle2,
} from 'lucide-react'

import { Card, CardContent, CardHeader } from '../ui/card'

interface IAccountInformationProps {
  user: {
    email: string
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
  }
}

const AccountInformation = ({ user }: IAccountInformationProps) => {
  const userJoinDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(user.createdAt))

  const lastUpdated = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(user.updatedAt))

  //todo: account information from user:
  const information = [
    {
      title: 'Email Verification',
      description: 'Your email address',
      value: user.emailVerified ? 'Verified' : 'Not Verified',
      icon: Mail,
      color: 'text-green-600 bg-green-500/10',
      badge: user.emailVerified
        ? 'bg-green-500/10 text-green-600'
        : 'bg-amber-500/10 text-amber-600',
    },
    {
      title: 'Account Type',
      description: 'Your membership role',
      value: 'Community Member',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-500/10',
    },
    {
      title: 'Member Since',
      description: 'Account creation date',
      value: userJoinDate,
      icon: Calendar,
      color: 'text-purple-600 bg-purple-500/10',
    },
    {
      title: 'Last Updated',
      description: 'Profile last modified',
      value: lastUpdated,
      icon: Clock,
      color: 'text-orange-600 bg-orange-500/10',
    },
    {
      title: 'Account Status',
      description: 'Your account availability',
      value: 'Active',
      icon: CheckCircle2,
      color: 'text-green-600 bg-green-500/10',
      badge: 'bg-green-500/10 text-green-600',
    },
  ]

  return (
    <Card className='min-w-0'>
      <CardHeader>
        <div className='flex items-center gap-2'>
          <UserRound className='size-5 text-accent-foreground' />
          <h2 className='text-lg font-bold tracking-tight text-accent-foreground sm:text-xl'>
            Account Information
          </h2>
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        {information.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={item.title}>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex min-w-0 items-center gap-3'>
                  <div className={`shrink-0 rounded-lg p-2.5 ${item.color}`}>
                    <Icon className='size-5' />
                  </div>

                  <div className='min-w-0'>
                    <p className='text-sm font-medium'>{item.title}</p>

                    <p className='text-xs text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                </div>

                <span
                  className={`shrink-0 text-right text-sm font-medium ${
                    item.badge
                      ? `rounded-full px-3 py-1 text-xs ${item.badge}`
                      : 'text-foreground'
                  }`}
                >
                  {item.value}
                </span>
              </div>

              {index !== information.length - 1 && (
                <div className='mt-5 border-t' />
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AccountInformation
