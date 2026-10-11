import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cropResults } from '../data/cropResults.js'

const sectionClass = 'mx-auto w-[min(1180px,calc(100%-40px))]'
const crops = ['All crops', ...new Set(cropResults.map((result) => result.crop))]

export function ResultsPreview() {
  return (
    <section className={`${sectionClass} py-12 md:py-16`}>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">From the field</p>
          <h2 className="text-4xl font-bold leading-none text-[#15251c] md:text-5xl">Grower crop gallery.</h2>
        </div>
        <Link className="inline-flex items-center gap-2 font-bold text-[#123f2a]" to="/results">See all field photos <ArrowRight size={17} /></Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[cropResults[0], cropResults[1], cropResults[4]].map((result) => (
          <Link className="group relative h-64 overflow-hidden rounded-3xl bg-[#eaf1e9]" key={result.image} to="/results">
            <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src={result.image} alt={result.alt} loading="lazy" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-12 text-lg font-bold text-white">{result.crop} · {result.stage}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ResultsPage() {
  const [selectedCrop, setSelectedCrop] = useState('All crops')
  const [zoomedResult, setZoomedResult] = useState(null)
  const visibleResults = useMemo(
    () => selectedCrop === 'All crops' ? cropResults : cropResults.filter((result) => result.crop === selectedCrop),
    [selectedCrop],
  )

  useEffect(() => {
    if (!zoomedResult) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setZoomedResult(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [zoomedResult])

  return (
    <section className={`${sectionClass} pb-20 pt-32`}>
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]">Cropixo in the field</p>
        <h1 className="mb-5 text-5xl font-bold leading-none text-[#15251c] md:text-7xl">Grower results across crops.</h1>
        <p className="text-base leading-8 text-[#65736b] md:text-lg">Real crop and harvest photos shared from fields using Cropixo products, across different crops and growth stages.</p>
      </header>

      <div className="mb-8 flex flex-wrap gap-3" aria-label="Filter photos by crop">
        {crops.map((crop) => (
          <button
            aria-pressed={selectedCrop === crop}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${selectedCrop === crop ? 'border-[#123f2a] bg-[#123f2a] text-white' : 'border-[#1f6f4324] bg-white text-[#40524a] hover:border-[#1f6f43]'}`}
            key={crop}
            onClick={() => setSelectedCrop(crop)}
            type="button"
          >
            {crop}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleResults.map((result) => (
          <figure className="group overflow-hidden rounded-3xl border border-[#1f6f4324] bg-white p-3 shadow-[0_18px_50px_rgba(22,48,35,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(22,48,35,0.16)]" key={result.image}>
            <button className="block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#f3f7ee] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f6f43]" onClick={() => setZoomedResult(result)} type="button" aria-label={`Zoom in on ${result.crop} ${result.stage.toLowerCase()} photo`}>
              <img className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src={result.image} alt={result.alt} loading="lazy" />
            </button>
            <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <span className="font-bold text-[#15251c]">{result.crop}</span>
              <span className="rounded-full bg-[#eaf4ed] px-3 py-1 text-xs font-bold text-[#1f6f43]">{result.stage}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {zoomedResult && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#07140d]/90 px-3 pb-24 pt-20 backdrop-blur-sm animate-[image-lightbox-fade_180ms_ease-out_both] sm:px-5 md:p-8"
          onClick={() => setZoomedResult(null)}
          role="presentation"
        >
          <button className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:rotate-90 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-5 sm:top-5 sm:h-12 sm:w-12" onClick={() => setZoomedResult(null)} type="button" aria-label="Close enlarged photo">
            <X size={24} />
          </button>
          <img
            className="max-h-[calc(100svh-12rem)] max-w-full rounded-2xl object-contain shadow-2xl animate-[image-lightbox-zoom_250ms_ease-out_both] sm:max-h-[85svh] md:max-h-[88svh]"
            src={zoomedResult.image}
            alt={zoomedResult.alt}
            onClick={(event) => event.stopPropagation()}
          />
          <p className="fixed bottom-4 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 truncate rounded-full bg-black/60 px-4 py-2 text-center text-xs font-semibold text-white sm:bottom-5 sm:text-sm">
            {zoomedResult.crop} · {zoomedResult.stage}
          </p>
        </div>
      )}
    </section>
  )
}

export default ResultsPage
