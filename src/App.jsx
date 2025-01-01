import { useState, useEffect } from "react";
import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var.",
  },

  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages.",
  },
};

function App() {
  const isLocale = localStorage.getItem('lang')
  const defaultLocale = isLocale ? isLocale : navigator.language; 
  const [lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  console.log(defaultLocale);

  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{ count: 5 }} />
        </p>

        <br />
        <br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <br />
        <br />
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
