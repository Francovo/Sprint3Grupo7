import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../reducers/moviesReducer";
import Card from "../Cards";

const MenosValoradas = ({ search }) => {
  const [filtro, setFiltro] = useState([]);

  const dispatch = useDispatch();

  const Buscador = async (search) => {
    const pUrl = "https://api.themoviedb.org/3/search/movie?query=";
    const input = search;
    const apiKey = "&api_key=a049d6086798142f1ce78897272be805";
    const LinkB2 = "&language=es";
    let moviesBUrl = pUrl + input + apiKey + LinkB2;

    const resp = await fetch(moviesBUrl);
    const data = await resp.json();
    setFiltro(data.results);
  };

  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (search.length > 0) {
      Buscador(search);
    } else {
      dispatch(addPage(page));
    }
  }, [dispatch, page, search]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={true}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<h4>Loading...</h4>}
    >
      <div className="Container-Home">
        {search.length > 0
          ? filtro.map((movie) => <Card key={movie.id} movie={movie} />)
          : movies
              .filter((valor) => valor.vote_average < 7.0)
              .sort()
              .map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </InfiniteScroll>
  );
};

export default MenosValoradas;
