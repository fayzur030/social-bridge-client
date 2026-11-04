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
    <div className='flex w-full min-w-0 flex-nowrap gap-2 overflow-x-auto py-3 scrollbar-none sm:gap-3'>
      <button
        onClick={() => setSelectedCategory('all')}
        className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
          selectedCategory === 'all'
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border bg-card text-muted-foreground hover:border-brand-green hover:text-brand-green'
        }`}
      >
        All Events
      </button>

      {category.slice(0, 7).map((item) => (
        <button
          key={item.slug}
          onClick={() => setSelectedCategory(item.name)}
          className={`shrink-0 whitespace-nowrap rounded-full cursor-pointer border px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
            selectedCategory === item.name
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-brand-green'
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryItems
