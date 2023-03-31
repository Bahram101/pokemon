import React from "react";
import { Input } from "antd";
import logo from "../../assets/logo.png";
import "./header.scss";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="150" src={logo} alt="pokemon" />
        </div>
        <div className="header__search">
          <div className="searchBlock">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 searchIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <Input
            placeholder="Поиск..."
              className="searchInput"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-2 h-2 closeIcon"
                onClick={()=>setSearchValue('')}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
