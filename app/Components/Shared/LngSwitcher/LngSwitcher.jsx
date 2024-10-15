import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const LngSwitcher = ({isRoot, isSticky}) => {
  const [currentLang, setCurrentLang] = useState("en"); // Default to English
  const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown

  // Language and flag data
  const languages = {
    en: {
      label: "En",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    zh: {
      label: "中文",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", // Correct link for China's flag
    },
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setDropdownOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="relative inline-block text-left">
      {/* Current language button */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
        <Image
        width={100}
        height={100}
          src={languages[currentLang].flag}
          alt={`${languages[currentLang].label} Flag`}
          className="h-7 w-7 rounded-full object-cover"
        />
        <button className={`flex items-center gap-2 ${isSticky ? " text-[#010749]" : `text-[#010749] ${isRoot && "md:text-white"}`}`}>
          <span className={``}>{languages[currentLang].label}</span>
          <span><IoIosArrowDown /></span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 top-[42px] mt-2 w-32 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200 origin-top">
          <div className="py-1">
            {Object.keys(languages).map((lang) => (
              <div
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
              >
                <Image
                height={100}
                width={100}
                  src={languages[lang].flag}
                  alt={`${languages[lang].label} Flag`}
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span>{languages[lang].label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LngSwitcher;
