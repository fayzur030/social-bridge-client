export const getCategoryById = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/categories/${slug}`
  )
  if (!res.ok) {
    throw new Error('Fetch to failed category')
  }
  const data = await res.json()
  return data.data
}
