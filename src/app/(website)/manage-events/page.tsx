import { auth } from '@/lib/auth'
import { IEvents } from '@/types/event.types'
import { headers } from 'next/headers'
// import ManageEventCard from './_Components/ManageEventCard'
import { getTokenFromServer } from '@/lib/getTokenFromServer'
import CommonBanner from '../upcoming-events/_Components/CommonBanner'
import ManageEventCardTable from './_Components/ManageEventCardTable'
import { getCategories } from '@/services/getCategory'

const getManageEvents = async (): Promise<IEvents[]> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const user = session?.user

  try {
    const jwtToken = await getTokenFromServer()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/manage-events/${user?.email}`,
      {
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    )
    if (!res.ok) {
      throw new Error('Fetch to Failed manage events data')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
  return []
}

const ManageEvents = async () => {
  const [manageEvents, categories] = await Promise.all([
    getManageEvents(),
    getCategories(),
  ])
  const sortedManageEvents = [...manageEvents].sort((a, b) =>
    b._id.localeCompare(a._id)
  )

  return (
    <section>
      <CommonBanner
        title='Manage My Events'
        description='Manage your created events, make updates, and keep your community connected through meaningful experiences.'
      />
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        {/* <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
          <div className='mb-8'>
            <h1 className='text-2xl font-bold text-foreground sm:text-3xl'>
              Manage My Events
            </h1>

            <p className='mt-2 max-w-xl text-sm text-muted-foreground'>
              Every great initiative starts with an idea. Manage the events you
              have created, make updates whenever needed, and continue bringing
              your community together for meaningful experiences.
            </p>
          </div>
          <Link href={'/create-event'}>
            <Button variant='default' className='px-8 py-6'>
              <Plus /> Create New Event
            </Button>
          </Link>
        </div> */}
        {/* <Separator /> */}
        <div className='mt-6 md:overflow-hidden md:rounded-xl md:border md:border-slate-200 md:bg-card md:shadow-sm md:dark:border-border'>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-left text-xs md:min-w-[640px]'>
              <thead className='hidden bg-slate-100 text-[9px] font-semibold tracking-[0.08em] text-slate-600 dark:bg-muted dark:text-muted-foreground md:table-header-group'>
                <tr>
                  <th
                    scope='col'
                    className='px-3 py-2.5 sm:px-4 text-xs lg:text-sm'
                  >
                    Event
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-2.5 sm:px-4 text-xs lg:text-sm'
                  >
                    Type
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-2.5 sm:px-4 text-xs lg:text-sm'
                  >
                    Date
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-2.5 sm:px-4 text-xs lg:text-sm'
                  >
                    Location
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-2.5 sm:px-4 text-xs lg:text-sm'
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='block text-[10px] md:table-row-group'>
                {sortedManageEvents.map((event) => (
                  <ManageEventCardTable
                    key={event._id}
                    event={event}
                    category={categories}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageEvents
