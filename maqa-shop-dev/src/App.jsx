import Header from './main_components/Header.jsx';
import ProductGrid from './main_components/ProductGrid.jsx';
import BenefitsBar from './main_components/BenefitsBar.jsx';
import Footer from './main_components/Footer.jsx';
import './App.css';

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
