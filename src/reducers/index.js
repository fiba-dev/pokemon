import { combineReducers } from "redux";
import showCardReduce from "./showCards";
import showVolumenReduce from "./volumenGeneral";

const reducer = combineReducers({
	showCardsPokemons: showCardReduce,
	showVolumen: showVolumenReduce,
});

export default reducer;
