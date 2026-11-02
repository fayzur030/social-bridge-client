import React from 'react'
import CreateEventForms from './_Components/CreateEventForms'
import { getCategories } from '@/services/getCategory'

const Create_Event = async () => {
  const category = await getCategories()

  return (
    <div>
      <CreateEventForms category={category} />
    </div>
  )
}

export default Create_Event
