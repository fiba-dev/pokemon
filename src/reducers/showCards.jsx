const initialState = { pokemons: [], game: [], resultsGame: [], winner: false };

export default function showCardReduce(state = initialState, action) {
	switch (action.type) {
		case "showCards":
			if (state.game.length === 2) break;
			return {
				...state,
				pokemons: state.pokemons.map((i, index) => {
					if (i.is_default === false) return i;
					if (index === action.id) {
						i.is_default = !i.is_default;
						console.log("SOY i y state", i, state);
						state.game.push({ pokemon: i, index: index });
					}
					return i;
				}),
			};

		case "addPokemons": {
			return {
				game: [],
				resultsGame: [],
				winner: false,
				pokemons: action.payload,
			};
		}

		case "compareCards": {
			return state.game.length === 2
				? state.game[0].pokemon.id === state.game[1].pokemon.id
					? {
							...state,
							resultsGame: [...state.resultsGame, state.game[0].pokemon],
							game: [],
					  }
					: {
							...state,
							pokemons: state.pokemons.map((i, index) =>
								index === state.game[0].index || index === state.game[1].index
									? { ...i, is_default: !i.is_default }
									: i
							),
							game: [],
					  }
				: state;
		}
		case "win": {
			if (state.resultsGame.length === state.pokemons.length / 2) {
				return { ...state, winner: true };
			}
			return state;
		}
		default:
			return state;
	}
}
