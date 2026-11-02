import { ICategory } from '@/types/category.type'

interface ICategoryProps {
  category: ICategory[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const CategoryItems = ({
  category,
  selectedCategory,
  setSelectedCategory,
}: ICategoryProps) => {
  return (
    <div className='mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-6'>
      <button
        onClick={() => setSelectedCategory('all')}
        className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
          selectedCategory === 'all'
            ? 'border-brand-green bg-brand-green text-white'
            : 'border-border bg-card text-muted-foreground hover:border-brand-green hover:text-brand-green'
        }`}
      >
        All Events
      </button>

      {category.slice(0, 7).map((item) => (
        <button
          key={item.slug}
          onClick={() => setSelectedCategory(item.name)}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
            selectedCategory === item.name
              ? 'border-brand-green bg-brand-green text-white'
              : 'border-border bg-card text-muted-foreground hover:border-brand-green hover:text-brand-green'
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryItems
