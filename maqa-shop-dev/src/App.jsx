import Header from './header.jsx'
import ProductGrid from './ProductGrid.jsx'
import BenefitsBar  from './BenefitsBar.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Header cartCount={3} />

      <main>
        <ProductGrid />
        <BenefitsBar />
      </main>

      <Footer />
    </>
  )
}

export default App
