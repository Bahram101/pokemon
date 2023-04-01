import React, { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
export const SearchContext = createContext(null);

export const MainLayout = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='wrapper'>
      <div className='container'>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <Outlet />
        </SearchContext.Provider>
      </div>
    </div>
  );
};
