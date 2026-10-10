import { useState, useEffect } from 'react'
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Package,
  Phone,
  Sparkles,
  Sprout,
  Waves,
} from 'lucide-react'
import greenhouseHero from './assets/Green2.png'
import greenhouseDetail from './assets/Green1.jpg'
import cropHouse from './assets/Green3.jpeg'
import logo from './assets/CropixoInnovation.png'
import { products } from './data/products.js'
import ProductsPage from './pages/productsPage.jsx'
import ProductDetailPage from './pages/productDetailPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const sectionClass = 'mx-auto w-[min(1180px,calc(100%-40px))] py-20'
const eyebrowClass = 'mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]'
const h2Class = 'mb-5 text-4xl font-bold leading-none tracking-normal text-[#15251c] md:text-6xl'
const bodyClass = 'text-base leading-8 text-[#65736b] md:text-lg'
const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-full bg-[#123f2a] px-6 py-4 font-bold text-white shadow-[0_12px_28px_rgba(18,63,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b3320]'

function Navigation({ isVisible }) {
  return (
    <nav 
      className={`fixed left-1/2 top-3 z-20 flex min-h-14 w-[calc(100%-20px)] -translate-x-1/2 items-center justify-between gap-3 rounded-[28px] border border-white/60 bg-white/85 px-3 py-2 shadow-[0_20px_55px_rgba(16,54,35,0.12)] backdrop-blur-xl transition-all duration-300 md:top-5 md:min-h-16 md:w-[min(1180px,calc(100%-32px))] md:rounded-full md:px-4 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Link className="group flex items-center transition hover:opacity-90" to="/" aria-label="Cropixo home">
        <img 
          src={logo} 
          alt="Cropixo Innovation Logo" 
          className="h-9 w-auto object-contain scale-300 origin-left transition duration-300 "
        />
      </Link>

      <div className="hidden items-center gap-2 text-sm font-semibold text-[#40524a] lg:flex">
        <Link className="flex items-center gap-1.5 rounded-full px-3.5 py-2 transition hover:bg-[#1f6f4315] hover:text-[#123f2a]" to="/products">
          <Package size={15} />
          <span>Products</span>
        </Link>
        <Link className="flex items-center gap-1.5 rounded-full px-3.5 py-2 transition hover:bg-[#1f6f4315] hover:text-[#123f2a]" to="/about">
          <Sparkles size={15} />
          <span>About</span>
        </Link>
        <Link className="flex items-center gap-1.5 rounded-full px-3.5 py-2 transition hover:bg-[#1f6f4315] hover:text-[#123f2a]" to="/contact">
          <Mail size={15} />
          <span>Contact</span>
        </Link>
      </div>

      <Link className="inline-flex items-center gap-1.5 rounded-full bg-[#123f2a] px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 md:text-sm" to="/contact">
        Dealer Inquiry <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </nav>
  )
}

function SiteFooter() {
  return (
    <footer className="mt-10 bg-[#123f2a] px-5 py-12 text-white">
      <div className="mx-auto grid w-[min(1180px,100%)] gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5 font-extrabold">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/12">
              <Leaf size={20} aria-hidden="true" />
            </span>
            <span>
              Import, Packed & Marketed by:
              <span className="block text-xl uppercase tracking-wide">Cropixo Innovation</span>
            </span>
          </div>
          <p className="max-w-md leading-7 text-white/75">
            Advanced fertilizer systems for cleaner, stronger harvests across greenhouse and field production.
          </p>
        </div>
        <div>
          <div className="grid gap-2 text-white/75">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-bold text-white">Contact</h2>
          <div className="grid gap-3 text-white/75">
            <p className="flex items-start gap-2 leading-7">
              <MapPin className="mt-1 shrink-0" size={18} aria-hidden="true" />
              Gat No.166/1, Godown No.4, Shinde Mala, Uruli Devachi, Ta. Haveli, Dist. Pune (MH) - 412308
            </p>
            <a className="flex items-center gap-2 transition hover:text-white" href="mailto:cropixo08@gmail.com">
              <Mail size={16} aria-hidden="true" /> cropixo08@gmail.com
            </a>
            <a className="flex items-center gap-2 transition hover:text-white" href="tel:+919011200034">
              <Phone size={16} aria-hidden="true" /> +91 90112 00034
            </a>
            <p className="flex items-center gap-2">
              <BadgeCheck size={16} aria-hidden="true" /> License No.: LCFWD2026070863
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <section className="relative grid min-h-[92svh] items-end px-5 pb-10 pt-28 text-white md:px-[clamp(20px,5vw,80px)] md:pb-14 md:pt-36">
        <img className="absolute inset-0 h-full w-full object-cover" src={greenhouseHero} alt="Sunlit modern greenhouse with healthy crops" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,30,20,0.78),rgba(9,30,20,0.34)_52%,rgba(9,30,20,0.08)),linear-gradient(0deg,rgba(9,30,20,0.5),transparent_50%)]" />
        <div className="relative z-[1] max-w-[850px]">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#d9f4e4]">Netherlands-inspired crop nutrition</p>
          <h1 className="mb-6 max-w-[820px] text-[clamp(2.8rem,14vw,7rem)] font-bold leading-[0.94] tracking-normal">
            Advanced fertilizer systems for cleaner, stronger harvests.
          </h1>
          <p className="max-w-[620px] text-base leading-8 text-white/85 md:text-xl">
            Premium crop nutrition engineered for growers who demand precision, sustainability, and consistent field performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link className={buttonClass} to="/products">
              Explore products <ArrowRight size={18} />
            </Link>
            <Link className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/15 px-5 text-white backdrop-blur-md transition hover:-translate-y-0.5" to="/about">
              About Cropixo
            </Link>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        <div>
          <p className={eyebrowClass}>Product portfolio</p>
          <h2 className={h2Class}>Nutrition categories for every growing system.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <Link 
              className="rounded-3xl border border-[#1f6f4324] bg-white/80 p-5 shadow-[0_24px_70px_rgba(22,48,35,0.12)] transition hover:-translate-y-1" 
              key={product.slug} 
              to={`/products/${product.slug}`}
            >
              <Package className="mb-4 text-[#1f6f43]" size={24} />
              <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
              <p className="leading-7 text-[#65736b]">{product.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className={`${sectionClass} grid gap-10 pt-32 lg:grid-cols-2 lg:items-center`}>
        <div>
          <p className={eyebrowClass}>About us</p>
          <h1 className="mb-6 text-5xl font-bold leading-none text-[#15251c] md:text-7xl">
            Scientific fertility, designed with Dutch clarity.
          </h1>
          <p className={bodyClass}>
            Cropixo Nutrition develops high-grade fertilizers for protected cultivation, open fields, and distributors serving quality-focused growers.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['24 crop protocols', '18 export markets', '0.3% batch variance'].map((metric) => (
              <span className="rounded-2xl border border-[#1f6f4324] bg-white p-4 text-[#65736b]" key={metric}>
                {metric}
              </span>
            ))}
          </div>
        </div>
        <img className="h-[460px] w-full rounded-[32px] object-cover shadow-[0_24px_70px_rgba(22,48,35,0.12)]" src={greenhouseDetail} alt="Rows of leafy crops in a controlled greenhouse" />
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-5 pb-20 md:grid-cols-2">
        <article className="rounded-3xl border border-[#1f6f4324] bg-white/85 p-8 shadow-[0_24px_70px_rgba(22,48,35,0.12)]">
          <p className={eyebrowClass}>Mission</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-[#15251c] md:text-4xl">
            Help growers produce healthier crops with smarter nutrition.
          </h2>
          <p className={bodyClass}>
            Our Mission is to empower farmers with innovative, science-backed, and sustainable fertilizer solutions that maximize crop productivity while preserving soil health and protecting the environment. We are committed to delivering premium-quality plant nutrition through continuous research, advanced technology, and responsible agricultural practices, helping build a more resilient and sustainable future for global farming.
          </p>
        </article>

        <article className="rounded-3xl border border-[#1f6f4324] bg-[#123f2a] p-8 text-white shadow-[0_24px_70px_rgba(22,48,35,0.12)]">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#d9f4e4]">Vision</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
            Build a cleaner, more precise future for agriculture.
          </h2>
          <p className="text-base leading-8 text-white/80 md:text-lg">
            Our Vision is to become a globally trusted leader in sustainable plant nutrition, recognized for pioneering agricultural innovation inspired by Dutch excellence in horticulture and precision farming. We envision a future where every farm benefits from smarter, eco-friendly fertilizer solutions that enhance yields, restore natural ecosystems, and contribute to global food security for generations to come.
          </p>
        </article>
      </section>
    </>
  )
}

function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.append("access_key", "db45bc64-ded6-4c38-b722-9765c497d342");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        alert("Inquiry sent successfully!");
        e.target.reset();
      } else {
        alert("Error sending inquiry: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please check your network and try again.");
    }
  };

  return (
    <section className={`${sectionClass} grid items-stretch gap-10 pt-32 lg:grid-cols-[0.9fr_1.1fr]`}>
      <div className="rounded-[32px] bg-[#123f2a] p-[clamp(28px,5vw,56px)] text-white">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em]">Contact</p>
        <h1 className="mb-5 text-5xl font-bold leading-none md:text-7xl">Start a crop nutrition inquiry.</h1>
        <p className="flex items-center gap-2.5 text-white/80"><MapPin size={18} /> Innovation hub: Westland, Netherlands</p>
        <p className="flex items-center gap-2.5 text-white/80"><Mail size={18} /> cropixo08@gmail.com</p>
        <p className="flex items-center gap-2.5 text-white/80"><Phone size={18} /> +91 90112 00034</p>
        <p className="flex items-center gap-2.5 text-white/80"><Globe2 size={18} /> cropixo.example</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-[#1f6f4324] bg-white/80 p-[clamp(24px,4vw,42px)] shadow-[0_24px_70px_rgba(22,48,35,0.12)]" aria-label="Inquiry form">
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Name
          <input className="rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" type="text" name="name" required />
        </label>
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Email
          <input className="rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" type="email" name="email" required />
        </label>
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Interest
          <select className="rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" name="interest" defaultValue="product">
            <option value="product">Product inquiry</option>
            <option value="dealer">Dealer partnership</option>
            <option value="research">Research collaboration</option>
          </select>
        </label>
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Message
          <textarea className="resize-y rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" name="message" rows="5" required />
        </label>
        <button className={buttonClass} type="submit">Send inquiry <ArrowRight size={18} /></button>
      </form>
    </section>
  )
}

function ResearchStrip() {
  return (
    <section className={`${sectionClass} grid items-center gap-10 lg:grid-cols-2`}>
      <img className="h-[360px] w-full rounded-[32px] object-cover md:h-[520px]" src={cropHouse} alt="Healthy leafy crops inside a bright glasshouse" />
      <div>
        <p className={eyebrowClass}>Research and innovation</p>
        <h2 className={h2Class}>Laboratory validation meets precision agriculture.</h2>
        <p className={bodyClass}>Every formulation is tested for purity, solubility, compatibility, and crop response.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#dcefe5] px-4 font-bold text-[#123f2a]"><FlaskConical size={18} /> Lab testing</span>
          <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#dcefe5] px-4 font-bold text-[#123f2a]"><Sprout size={18} /> Field trials</span>
          <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#dcefe5] px-4 font-bold text-[#123f2a]"><Waves size={18} /> Smart fertigation</span>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY <= 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <main className="overflow-hidden bg-[#f8faf6] text-[#15251c] [background-image:linear-gradient(180deg,rgba(217,236,244,0.46),transparent_520px)]">
      <ScrollToTop />
      <Navigation isVisible={isVisible} />
      <Routes>
        <Route path="/" element={<><Home /><ResearchStrip /><SiteFooter /></>} />
        <Route path="/products" element={<><ProductsPage /><SiteFooter /></>} />
        <Route path="/products/:slug" element={<><ProductDetailPage /><SiteFooter /></>} />
        <Route path="/about" element={<><AboutPage /><SiteFooter /></>} />
        <Route path="/contact" element={<><ContactPage /><SiteFooter /></>} />
      </Routes>
    </main>
  )
}

export default App