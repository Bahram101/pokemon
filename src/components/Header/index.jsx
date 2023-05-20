import React, { useContext } from 'react';
import { Input } from 'antd';
import logo from '../../assets/logo.png';
import './header.scss';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../layouts/MainLayout';
import { useSelector } from 'react-redux';

const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { favorites } = useSelector((state) => state.favoriteReducer);
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Link to='/'>
            <img width='150' src={logo} alt='pokemon' />
          </Link>
        </div>
        <div className='header__right'>
          <div className='header__search'>
            <div className='searchBlock'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 searchIcon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>

              <Input
                placeholder='Поиск...'
                className='searchInput'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  class='w-2 h-2 closeIcon'
                  onClick={() => setSearchValue('')}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </div>
          </div>
          <div className='header__favorite'>
            <Link to='/favorite'>
              <div className="favoriteBlock">
                {
                  favorites.length>0 ? <span className='favoriteCount'>{favorites.length}</span> : ''
                }
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 favoriteIcon'
                >
                 
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
