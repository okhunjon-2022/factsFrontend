import React from "react";
import { useTranslation } from "react-i18next";

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const { t } = useTranslation();

  return (
    <div className="w-full flex">
      <input
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder={t("search")}
        className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border"
      />
      <button
        onClick={handleSearch}
        className="bg-[#1E73BE] px-4 py-2 text-white"
      >
        {t("searchBtn")}
      </button>
    </div>
  );
};

export default SearchBlog;
