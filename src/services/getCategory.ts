import { getTokenFromServer } from '@/lib/getTokenFromServer'
import { ICategory } from '@/types/category.type'

export const getCategories = async (): Promise<ICategory[]> => {
  const jwtToken = await getTokenFromServer()
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (!res.ok) {
      throw new Error('Fetch to failed category')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
  return []
}
