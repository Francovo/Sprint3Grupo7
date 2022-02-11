import React, { useEffect, useState } from "react";
import Card from "./Cards";
import "./Cards.scss";
import Carrusel from "./Carrusel";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { addPage} from "../reducers/moviesReducer";

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movies);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(addPage(page));
  }, [dispatch, page]);

  return (
    <div>
      <Carrusel />

      <label className="Label-Home">Todas las Peliculas</label>

      <InfiniteScroll
        dataLength={movies.length}
        hasMore={true}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<h4>Loading...</h4>}
      >
        <div className="Container-Home">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
