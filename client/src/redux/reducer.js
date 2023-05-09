import {
  GET_GAMES,
  GET_GAME_DETAIL,
  GET_GENRES,
  GET_PLATFORMS,
  FILTER_GAMES_BY_GENRE,
  FILTER_GAMES_BY_PLATFORM,
  FILTER_GAMES_API_DB,
  ORDER_GAMES_ASCEN_DESCEN,
  ORDER_GAMES_RATING,
  SEND_FORM_DATA_REQUEST,
  SEND_FORM_DATA_SUCCESS,
  SEND_FORM_DATA_FAILURE,
} from "./actions";
let regexUUID =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

const initialState = {
  games: [],
  gamesBackup: [],
  gameDetail: {},
  genres: [],
  platforms: [],
  sendingFormData: false,
  formDataResponse: null,
  formDataError: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //**************  GET  ************** */

    case GET_GAMES:
      return { ...state, games: action.payload, gamesBackup: action.payload };

    case GET_GAME_DETAIL:
      return { ...state, gameDetail: action.payload };

    case GET_GENRES:
      return { ...state, genres: action.payload };

    case GET_PLATFORMS:
      return { ...state, platforms: action.payload };

    //***************  FILTERS  ************** */

    case FILTER_GAMES_BY_GENRE:
      if (!action.payload) return { ...state };
      if (action.payload === "-") return { ...state, games: state.gamesBackup };
      const gamesFilteredGenre = state.games.filter((game) =>
        game.genres.includes(action.payload)
      );
      return { ...state, games: gamesFilteredGenre };

    case FILTER_GAMES_BY_PLATFORM:
      if (!action.payload) return { ...state };
      if (action.payload === "-") return { ...state, games: state.gamesBackup };
      let gamesFilteredPlatform = state.games.filter((game) =>
        game.platforms.includes(action.payload)
      );
      return { ...state, games: gamesFilteredPlatform };

    case FILTER_GAMES_API_DB:
      let gamesApiDb;
      if (!action.payload) return { ...state };
      if (action.payload === "-") return { ...state, games: state.gamesBackup };
      if (action.payload === "db") {
        gamesApiDb = state.games.filter((game) => regexUUID.test(game.id));
      }
      if (action.payload === "api") {
        gamesApiDb = state.games.filter(
          (game) => regexUUID.test(game.id) === false
        );
      }
      return { ...state, games: gamesApiDb };

    //***************  ORDERS  ************** */

    case ORDER_GAMES_ASCEN_DESCEN:

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;