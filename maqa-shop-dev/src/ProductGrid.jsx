import React from "react";
import "./ProductGrid.css";
import maka from "./assets/maka.png";

const products = [
  { id: 1, name: "Mąka ciemna razowa 1kg", image: maka, price: "8,99 zł", rating: 5, link: "/sklep/maka-ciemna-razowa" },
  { id: 2, name: "Mąka jasna razowa 1kg", image: maka, price: "9,99 zł", rating: 4, link: "/sklep/maka-jasna-razowa" },
  { id: 3, name: "Mąka i kasza gryczana 1kg", image: maka, price: "12,99 zł", rating: 5, link: "/sklep/maka-gryczana" },
  { id: 4, name: "Otręby 500g", image: maka, price: "5,99 zł", rating: 4, link: "/sklep/otreby" },
  { id: 5, name: "Czyszczone ziarna 1kg", image: maka, price: "10,99 zł", rating: 5, link: "/sklep/ziarna" },
  { id: 6, name: "Trufle premium 200g", image: maka, price: "29,99 zł", rating: 5, link: "/sklep/trufle" },
];

function ProductGrid() {
  return (
    <section className="product-section">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <a href="/">Strona główna</a> &gt; <span>Sklep Maqa</span>
      </nav>

      {/* Nagłówek i sortowanie */}
      <div className="product-section__header">
        <h1>Sklep Maqa</h1>
        <div className="product-sort">
          <label>
            Sortuj:
            <select defaultValue="default">
              <option value="default">Domyślnie</option>
              <option value="price-asc">Cena rosnąco</option>
              <option value="price-desc">Cena malejąco</option>
              <option value="name-asc">Nazwa A-Z</option>
            </select>
          </label>
        </div>
      </div>

      {/* Siatka produktów */}
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <a href={product.link}>
              <img src={product.image} alt={product.name} className="product-card__image" />
              <div className="product-card__info">
                <h2 className="product-card__name">{product.name}</h2>
                <div className="product-card__price">{product.price}</div>
                <button className="product-card__cta">Dodaj do koszyka</button>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Paginacja */}
      <div className="pagination">
        <button className="pagination__btn active">1</button>
        <button className="pagination__btn">2</button>
        <button className="pagination__btn">3</button>
      </div>

      {/* Opis SEO na dole */}
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
