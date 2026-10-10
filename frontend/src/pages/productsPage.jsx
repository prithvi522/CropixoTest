import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import { products } from '../data/products.js'

function ProductsPage() {
  const allProductsLabel = 'All Products'
  const [selectedFamily, setSelectedFamily] = useState(allProductsLabel)
  const [searchTerm, setSearchTerm] = useState('')

  const productFamilies = useMemo(
    () => [...new Set(products.map((product) => product.family || product.category))],
    [],
  )

  const visibleProducts = products.filter((product) => {
    const family = product.family || product.category
    const matchesFamily = selectedFamily === allProductsLabel || family === selectedFamily
    const query = searchTerm.trim().toLowerCase()
    const matchesSearch =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      family.toLowerCase().includes(query) ||
      product.note.toLowerCase().includes(query)

    return matchesFamily && matchesSearch
  })

  return (
    <section className="mx-auto w-[min(1180px,calc(100%-40px))] pb-20 pt-32">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">Products</p>
        <h1 className="mb-5 text-5xl font-bold leading-none text-[#15251c] md:text-7xl">Fertilizers and plant nutrition products.</h1>
        <p className="text-base leading-8 text-[#65736b] md:text-lg">Explore Cropixo products across base nutrition, flowering, micronutrients, root development, and fertigation systems.</p>
      </div>

      <div className="mb-6 flex max-w-2xl items-center gap-3 rounded-full border border-[#1f6f4324] bg-white px-5 py-3 text-[#65736b] shadow-sm focus-within:border-[#1f6f43] focus-within:ring-2 focus-within:ring-[#1f6f4324]">
        <Search size={18} aria-hidden="true" />
        <input
          className="w-full bg-transparent text-sm text-[#15251c] outline-none placeholder:text-[#65736b]"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search products by name, category, or family"
          aria-label="Search products"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {[allProductsLabel, ...productFamilies].map((family) => (
          <button
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              selectedFamily === family
                ? 'border-[#123f2a] bg-[#123f2a] text-white'
                : 'border-[#1f6f4324] bg-white text-[#40524a] hover:border-[#1f6f43] hover:text-[#123f2a]'
            }`}
            key={family}
            onClick={() => setSelectedFamily(family)}
            type="button"
          >
            {family}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <Link className="group rounded-3xl border border-[#1f6f4324] bg-white/85 p-5 shadow-[0_24px_70px_rgba(22,48,35,0.12)] transition hover:-translate-y-1.5 hover:border-[#1f6f4352]" key={product.slug} to={`/products/${product.slug}`}>
            <div className="mb-4 overflow-hidden rounded-2xl bg-[#f3f7ee]">
              <img className="h-64 w-full object-contain p-5 transition duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">{product.category}</p>
            <h2 className="mt-3 text-2xl font-bold text-[#15251c]">{product.name}</h2>
            <p className="mt-3 leading-7 text-[#65736b]">{product.note}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#123f2a]">View product details <ArrowRight size={16} /></span>
          </Link>
        ))}
      </div>

      {visibleProducts.length === 0 && (
        <div className="mt-8 rounded-3xl border border-[#1f6f4324] bg-white p-8 text-center text-[#65736b] shadow-[0_18px_50px_rgba(22,48,35,0.08)]">
          No products match your search and family filter.
        </div>
      )}
    </section>
  )
}

export default ProductsPage
