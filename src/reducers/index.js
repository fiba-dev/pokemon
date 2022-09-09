import { combineReducers } from "redux";
import showCardReduce from "./showCards";

const reducer = combineReducers({
	showCardsPokemons: showCardReduce,
});

export default reducer;
