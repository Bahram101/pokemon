import React, { useContext, useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonList } from '../redux/slices/pokemonSlice';
import { Skeleton } from '../components/PokemonCard/Skeleton';
import Pagination from '../components/Pagination';
import '../app.scss';
import { SearchContext } from '../layouts/MainLayout';

export const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { searchValue } = useContext(SearchContext);

  const { items, status } = useSelector(
    (state) => state.pokemonReducer.pokemonList
  );

  const { favorites } = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    dispatch(getPokemonList({ page: page, limit: limit }));
  }, [limit, page]);

  const pokemons = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .map((item, index) => (
      <PokemonCard
        props={{ ...item, favorite: favorites.includes(item.id) }}
        key={index}
      />
    ));

  const skeleton = [...new Array(15)].map((_, index) => (
    <Skeleton key={index} />
  ));

  console.log(favorites);
  return (
    <>
      <div className='content'>
        <div className='container'>
          <div className='content__items'>
            {status === 'loading' ? skeleton : pokemons}
          </div>
        </div>
      </div>
      <div className='paginate'>
        <div className='container'>
          <Pagination
            onChangeLimit={(value) => setLimit(value)}
            onChange={(value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
};
