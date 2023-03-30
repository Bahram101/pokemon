import React, { useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonList } from "./redux/slices/pokemonSlice";
import { Skeleton } from "./components/PokemonCard/Skeleton";

function App() {
  const { items, status } = useSelector(
    (state) => state.pokemonReducer.pokemonList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  const pokemons = items.map((item) => (
    <Card 
    {...item}
      // id={item.id}
      // name={item.name}
      // imgUrl={item.sprites.front_default}
      // stats={item.stats}
      // weight={item.weight}
      // types={item.types}
    />
  ));

  const skeleton = [...new Array(15)].map((_, index) => (
    <Skeleton key={index} />
  ));

  console.log(items);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">Categories</div>

            <div className="content__items">
              {status === "loading" ? skeleton : pokemons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
