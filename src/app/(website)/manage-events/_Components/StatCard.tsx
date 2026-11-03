import { Card } from '@/components/ui/card'
import { IEvents } from '@/types/event.types'
import { CalendarDays, CheckCircle2, Clock } from 'lucide-react'

interface IStatsCardProps {
  sortedManageEvents: IEvents[]
}

const StatCard = ({ sortedManageEvents }: IStatsCardProps) => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <Card className='relative overflow-hidden border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-muted-foreground'>
                Total Events
              </p>
              <h3 className='mt-1 text-3xl font-bold text-foreground'>
                {sortedManageEvents.length}
              </h3>
              <p className='mt-1 text-xs text-muted-foreground'>
                Events you have created
              </p>
            </div>

            <div className='flex size-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400'>
              <CalendarDays className='size-6' />
            </div>
          </div>
        </Card>

        <Card className='relative overflow-hidden border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-muted-foreground'>
                Upcoming Events
              </p>
              <h3 className='mt-1 text-3xl font-bold text-foreground'>
                {
                  sortedManageEvents.filter(
                    (event) => new Date(event.eventDate) >= new Date()
                  ).length
                }
              </h3>
              <p className='mt-1 text-xs text-muted-foreground'>
                Events waiting to happen
              </p>
            </div>

            <div className='flex size-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400'>
              <Clock className='size-6' />
            </div>
          </div>
        </Card>

        <Card className='relative overflow-hidden border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-muted-foreground'>
                Past Events
              </p>
              <h3 className='mt-1 text-3xl font-bold text-foreground'>
                {
                  sortedManageEvents.filter(
                    (event) => new Date(event.eventDate) < new Date()
                  ).length
                }
              </h3>
              <p className='mt-1 text-xs text-muted-foreground'>
                Events you have completed
              </p>
            </div>

            <div className='flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400'>
              <CheckCircle2 className='size-6' />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default StatCard
