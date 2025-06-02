import { useState, useEffect } from "react";
import "./ProductGrid.css";
import Ciemna_razowa from "./main_components_assets/ciemna_razowa.png";
import Jasna_razowa from "./main_components_assets/jasna_razowa.png";
import Kasza_gryczana from "./main_components_assets/kasza_gryczana.png";
import Makaron from "./main_components_assets/makaron.png";
import Oliwa from "./main_components_assets/oliwa.png";
import Otreby from "./main_components_assets/otreby.png";
import Ciastka from "./main_components_assets/ciastka.png";
import Ziarna from "./main_components_assets/ziarna.png";
import Trufle from "./main_components_assets/trufle.png";

const images = {
  Ciemna_razowa,
  Jasna_razowa,
  Kasza_gryczana,
  Makaron,
  Oliwa,
  Otreby,
  Ciastka,
  Ziarna,
  Trufle,
};

const PRODUCTS_PER_PAGE = 12;

function ProductGrid({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Używaj zawsze pełnego URL do API (Vite na 5173, backend na 3001)
        const API_BASE_URL = "http://localhost:3001";
        const url = selectedCategory
          ? `${API_BASE_URL}/api/products?category=${encodeURIComponent(selectedCategory)}`
          : `${API_BASE_URL}/api/products`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Błąd sieci');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Błąd pobierania produktów:', error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sort, products.length, selectedCategory]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.cena - b.cena;
    if (sort === "price-desc") return b.cena - a.cena;
    if (sort === "name-asc") return a.nazwa.localeCompare(b.nazwa, "pl");
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <section className="product-section">
      <div className="product-section__header">
        <h1>Sklep Maqa</h1>
        <div className="product-sort">
          <label>
            Sortuj:
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Domyślnie</option>
              <option value="price-asc">Cena rosnąco</option>
              <option value="price-desc">Cena malejąco</option>
              <option value="name-asc">Nazwa A-Z</option>
            </select>
          </label>
        </div>
      </div>
      <div className="product-grid">
        {paginatedProducts.length === 0 ? (
          <div className="no-products-message">
            Brak produktów w tej kategorii.
          </div>
        ) : (
          paginatedProducts.map(product => {
            // Bezpieczne pobieranie obrazka
            const imgSrc = images[product.komponent_obrazka] || images.Ciemna_razowa;
            return (
              <div className="product-card" key={product.id}>
                <img
                  src={imgSrc}
                  alt={product.nazwa}
                  className="product-card__image"
                />
                <div className="product-card__info">
                  <h2 className="product-card__name">{product.nazwa}</h2>
                  <div className="product-card__price">{product.cena} zł</div>
                </div>
                <button className="product-card__cta">Dodaj do koszyka</button>
              </div>
            );
          })
        )}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination__arrow"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Poprzednia strona"
          >
            &lt;
          </button>
          <span className="pagination__gap" />
          {(() => {
            let start = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
            let end = Math.min(totalPages, start + 2);
            if (end - start < 2) start = Math.max(1, end - 2);
            return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(page => (
              <button
                key={page}
                className={`pagination__btn${currentPage === page ? " active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ));
          })()}
          <span className="pagination__gap" />
          <button
            className="pagination__arrow"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Następna strona"
          >
            &gt;
          </button>
        </div>
      )}
      <div className="product-section__seo">
        <h2>Najlepszy sklep z mąkami i produktami Maqa</h2>
        <p>
          Nasz sklep oferuje szeroki wybór naturalnych mąk, kasz oraz produktów premium. Dbamy o jakość i pochodzenie naszych produktów – sprawdź sam!
        </p>
      </div>
    </section>
  );
}

export default ProductGrid;
