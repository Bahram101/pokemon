import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonList } from "./redux/slices/pokemonSlice";
import { Skeleton } from "./components/PokemonCard/Skeleton";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const { items, status } = useSelector(
    (state) => state.pokemonReducer.pokemonList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList({ page: page, limit: limit }));
  }, [limit, page]);

  const pokemons = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .map((item, index) => <Card {...item} key={index} />);

  const skeleton = [...new Array(15)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="wrapper">
      <div className="container">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <div className="container">
            <div className="content__items">
              {status === "loading" ? skeleton : pokemons}
            </div>
          </div>
        </div>
        <div className="paginate">
          <div className="container">
            <Pagination
              onChangeLimit={(value) => setLimit(value)}
              onChange={(value) => setPage(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
