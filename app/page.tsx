import Header from '../components/Header'
import SearchSection from '../components/SearchSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SearchSection />
      <Footer />
    </main>
  )
}