import { User, ShoppingCart, Mail } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import logo from './main_components_assets/logo.png';
import { Link } from "react-router-dom";
import "./Header.css";


function Header({ cartCount = 0 }) {
  return (
    <>
      {/* Pasek promocji nad headerem */}
      <div className="promo-banner">
        🎉 Darmowa dostawa od 99 zł! Skorzystaj z promocji już dziś! 🎉
      </div>

      <header className="header">
        {/* Lewa sekcja: logo */}
        <div className="header__logo">
          <a href="/">
            <div className="logo-circle">
              <img src={logo} alt="logo" />
            </div>
            <span className="shop-name">Maqa</span>
          </a>
        </div>

        {/* Środek: nawigacja + wyszukiwarka */}
        <div className="header__center">
          <nav className="header__nav" aria-label="Główna nawigacja">
            {/* SKLEP */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <a
                  href="#"
                  className="nav-link"
                  aria-expanded="false"
                  aria-haspopup="menu"
                >
                  Sklep
                </a>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="dropdown-menu" sideOffset={6}>
                <ul>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/nowosci">NOWOŚCI</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/bestsellery">BESTSELLERY</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/promocje" className="promo-link">% PROMOCJE</a>
                    </DropdownMenu.Item>
                  </li>
                  <li className="dropdown-group group-maka">Mąki</li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/maka-ciemna-razowa">Mąka ciemna razowa</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/maka-jasna-razowa">Mąka jasna razowa</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/maka-gryczana">Mąka i kasza gryczana</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/otreby">Otręby</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/ziarna">Czyszczone ziarna</a>
                    </DropdownMenu.Item>
                  </li>
                  <li className="dropdown-group group-premium">Produkty premium</li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/trufle">Produkty z trufli</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/kurtes">Produkty Kurtes</a>
                    </DropdownMenu.Item>
                  </li>
                  <li className="dropdown-group group-przekaski">Przekąski i makarony</li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/ciastka-pierniki">Ciastka i Pierniki</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/sklep/makarony">Makarony domowe</a>
                    </DropdownMenu.Item>
                  </li>
                </ul>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/* DLA KLIENTA */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <a
                  href="#"
                  className="nav-link"
                  aria-expanded="false"
                  aria-haspopup="menu"
                >
                  Dla Klienta
                </a>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="dropdown-menu" sideOffset={6}>
                <ul>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/klient/gdzie-kupisz">Gdzie kupisz nasze produkty</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/klient/faq">Najczęściej zadawane pytania</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/klient/zwroty-reklamacje">Zgłoszenia, zwroty, reklamacje</a>
                    </DropdownMenu.Item>
                  </li>
                </ul>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/* WSPÓŁPRACA */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <a
                  href="#"
                  className="nav-link"
                  aria-expanded="false"
                  aria-haspopup="menu"
                >
                  Współpraca
                </a>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="dropdown-menu" sideOffset={6}>
                <ul>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/wspolpraca/b2b">B2B / sprzedaż hurtowa</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/wspolpraca/produkcja-kontraktowa">Produkcja kontraktowa</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/wspolpraca/wspolpracuj">Współpracuj z nami</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/wspolpraca/doradztwo">Doradztwo</a>
                    </DropdownMenu.Item>
                  </li>
                  <li>
                    <DropdownMenu.Item asChild>
                      <a href="/wspolpraca/media">Media o nas</a>
                    </DropdownMenu.Item>
                  </li>
                </ul>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/* BLOG */}
            <a href="/blog/" className="nav-link no-arrow">
              Blog
            </a>
          </nav>
          <div className="header__search">
            <input type="text" placeholder="Szukaj..." aria-label="Szukaj" />
            <button type="submit">Szukaj</button>
          </div>
        </div>

        {/* Prawa sekcja: akcje */}
        <div className="header__actions">
<Link to="/kontakt" aria-label="Kontakt" className="nav-link no-arrow">
  <Mail size={20} style={{ verticalAlign: "middle" }} /> Kontakt
</Link>

          <a href="/zaloguj" aria-label="Zaloguj">
            <User size={20} style={{ verticalAlign: "middle" }} /> Zaloguj
          </a>
          <a href="/koszyk" className="cart-link" aria-label="Koszyk">
            <ShoppingCart size={20} style={{ verticalAlign: "middle" }} /> Koszyk
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
