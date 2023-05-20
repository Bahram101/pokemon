import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from '../components/PokemonCard';
import { getPokemonList } from '../redux/slices/pokemonSlice';

export const Favorite = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favoriteReducer);
  const { items } = useSelector((state) => state.pokemonReducer.pokemonList);
  useEffect(() => {
    dispatch(getPokemonList({ list: favorites }));
  }, [favorites]);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__items' style={{justifyContent:'left'}}>
          {items?.map((item, index) => (
            <PokemonCard
              props={{ ...item, favorite: favorites.includes(item.id) }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
