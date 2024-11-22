import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

//Languages
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEng from "./locale/translationsEng";
import translationsUz from "./locale/translationsUz";
import translationsRu from "./locale/translationsRu";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEng },
    uz: { translation: translationsUz },
    ru: { translation: translationsRu },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <>
      <div className="bg-bgPrimary min-h-screen flex flex-col">
        <Navbar changeLang={changeLang} />
        <div className="flex-grow">
          <Outlet />
        </div>
        <ToastContainer autoClose={3000} />
        <Footer />
      </div>
    </>
  );
}

export default App;
