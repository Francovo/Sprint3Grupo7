import { createSlice } from "@reduxjs/toolkit";

export const getData = async (page) => {
  const pUrl = "https://api.themoviedb.org/3";
  let changes = "/discover/movie?query=&page=" + page;
  const apiKey = "&api_key=a049d6086798142f1ce78897272be805";
  const language = "&language=es";
  let moviesUrl = pUrl + changes + apiKey + language;
  // const [movies, setMovies] = useState([]);

  const resp = await fetch(moviesUrl);
  const data = await resp.json();
  return data.results;
};


export const addPage = (page) => async (dispatch) => {
  const data = await getData(page);
  dispatch(addMovies(data));
};

/////////////////////////////////////////////////////////////////

const initialState = { movies: [] };

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // setMovies(state, action) {
    //   state.movies = action.payload;
    // },
    addMovies(state, action) {
      state.movies = state.movies.concat(action.payload);
    },
  },
});

export const { setMovies, addMovies } = movieSlice.actions;
export default movieSlice.reducer;
