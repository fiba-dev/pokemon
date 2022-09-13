const initialState = {
	volumen: 0.3,
};

export default function showVolumenReduce(state = initialState, action) {
	switch (action.type) {
		case "volumenGeneral":
			return {
				...state,
				volumen: action.payload / 100,
			};

		default:
			return { ...state };
	}
}
