import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
<section className="contact-section contact-form-section">
          <h2 className="contact-form-section__heading">Skorzystaj z formularza kontaktowego</h2>
      <form className="contact-form">
        <div className="contact-form__row">
          <input type="text" name="name" placeholder="Twoje imię i nazwisko*" required />
          <input type="email" name="email" placeholder="Twój adres e-mail*" required />
          <input type="tel" name="phone" placeholder="Twój numer telefonu (opcjonalnie)" />
        </div>
        <div className="contact-form__row">
          <textarea name="message" placeholder="Wpisz swoją wiadomość..." required rows={5}></textarea>
        </div>
        <div className="contact-form__row contact-form__row--consent">
          <label>
            <input type="checkbox" required /> Wyrażam zgodę na przetwarzanie moich danych osobowych przez Maqa Sp. z o.o. w celu udzielenia odpowiedzi na zapytanie. Zapoznałem/am się z <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">polityką prywatności</a>.
          </label>
        </div>
        <div className="contact-form__row">
          <button type="submit">Wyślij wiadomość</button>
        </div>
        <div className="contact-form__info">
          <small>
            Administratorem danych osobowych jest Maqa Sp. z o.o., ul. Zbożowa 12, 01-234 Warszawa, NIP: 123-456-78-90.<br />
            Dane przetwarzane są wyłącznie w celu odpowiedzi na Twoje zapytanie. Więcej informacji znajdziesz w <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">polityce prywatności</a>.
          </small>
        </div>
      </form>
    </section>
  );
}
