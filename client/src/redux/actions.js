const URL = "http://localhost:3001";
// ! GET
export const GET_GAMES = "GET_GAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
// ! FILTERS
export const FILTER_GAMES_BY_GENRE = "FILTER_GAMES_BY_GENRE";
export const FILTER_GAMES_BY_PLATFORM = "FILTER_GAMES_BY_PLATFORM";
export const FILTER_GAMES_API_DB = "FILTER_GAMES_API_DB";
// ! ORDERS
export const ORDER_GAMES_ALPHABETIC = "ORDER_GAMES_ALPHABETIC";
export const ORDER_GAMES_RATING = "ORDER_GAMES_RATING";
// ! FORM
export const SEND_FORM_DATA_REQUEST = "SEND_FORM_DATA_REQUEST";
export const SEND_FORM_DATA_SUCCESS = "SEND_FORM_DATA_SUCCESS";
export const SEND_FORM_DATA_FAILURE = "SEND_FORM_DATA_FAILURE";

// ! ///////////////// GET ////////////////

//* GET usando async/await

export const getGames = () => {
  return async function (dispatch) {
    const response = await fetch(`${URL}/videogames`);
    const data = await response.json();
    dispatch({ type: GET_GAMES, payload: data });
  };
};

//* GET usando promesas

export const getGameDetail = (id) => {
  return function (dispatch) {
    fetch(`${URL}/videogames/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GAME_DETAIL, payload: data }));
  };
};

export const getGamesByName = (name) => {
  return function (dispatch) {
    fetch(`${URL}/videogames?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GAMES_BY_NAME, payload: data }));
  };
};
export const getGenres = () => {
  return function (dispatch) {
    fetch(`${URL}/genres`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GENRES, payload: data }));
  };
};

export const getPlatforms = () => {
  return async function (dispatch) {
    const response = await fetch(`${URL}/platforms`);
    const data = await response.json();
    dispatch({ type: GET_PLATFORMS, payload: data });
  };
};

// ! ///////////////// FILTERS ////////////////

export const filterGamesByGenre = (genre) => {
  return {
    type: FILTER_GAMES_BY_GENRE,
    payload: genre,
  };
};

export const filterGamesByPlatform = (platform) => {
  return {
    type: FILTER_GAMES_BY_PLATFORM,
    payload: platform,
  };
};

export const filterGamesApiDb = (where) => {
  return {
    type: FILTER_GAMES_API_DB,
    payload: where,
  };
};

// ! ///////////////// ORDERS ////////////////

export const orderGamesAlphabetic = (typeOfOrder) => {
  return {
    type: ORDER_GAMES_ALPHABETIC,
    payload: typeOfOrder,
  };
};

export const orderGamesRating = (typeOfOrder) => {
  return {
    type: ORDER_GAMES_RATING,
    payload: typeOfOrder,
  };
};

// ! ///////////////// FORM ////////////////

export const sendFormData = (formData) => {
  return (dispatch) => {
    dispatch({ type: "SEND_FORM_DATA_REQUEST" });

    return axios
      .post(`${URL}/videogames`, formData)
      .then((response) =>
        dispatch({ type: "SEND_FORM_DATA_SUCCESS", payload: response.data })
      )
      .catch((error) =>
        dispatch({ type: "SEND_FORM_DATA_FAILURE", payload: error })
      );
  };
};
