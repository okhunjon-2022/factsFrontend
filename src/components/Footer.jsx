import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          {/* Left Section: Company Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">{t("companyName")}</h2>
            <p className="text-gray-400">{t("companyDesc")}</p>
            <p className="text-gray-400 mt-2">© 2024 {t("footerPol")}</p>
          </div>

          {/* Center Section: Quick Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">{t("links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:underline text-gray-300">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:underline text-gray-300"
                >
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">{t("follow")}</h3>
            <div className="flex space-x-4">
              <span
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </span>
              <span
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </span>
              <span
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </span>
              <span
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
