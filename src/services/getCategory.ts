import { ICategory } from '@/types/category.type'

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)

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
