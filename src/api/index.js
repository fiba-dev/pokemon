let apiUrl = "https://pokeapi.co/api/v2/";

export async function getOnePokemon(e) {
	let data = await fetch(apiUrl + "pokemon/" + e).then((res) => {
		let data = res.json();

		return data.then((res) => {
			return res;
		});
	});

	let stringId = e.toString();

	let imgId =
		stringId.length === 1
			? "00" + stringId
			: stringId.length === 2
			? "0" + stringId
			: stringId;

	data.sprites.front_default =
		"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + imgId + ".png";
	return data;
}
function shuffleArray(inputArray) {
	inputArray.sort(() => Math.random() - 0.5);
}
export async function obtenerLista() {
	let lista = [];
	for (let index = 1; index <= 9; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	shuffleArray(lista);
	for (let index = 1; index <= 9; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl2() {
	let lista = [];
	for (let index = 10; index < 26; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 10; index < 26; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl3() {
	let lista = [];
	for (let index = 27; index <= 51; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 27; index <= 51; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl4() {
	let lista = [];
	for (let index = 52; index <= 76; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 52; index <= 76; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl5() {
	let lista = [];
	for (let index = 77; index <= 101; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 77; index <= 101; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl6() {
	let lista = [];
	for (let index = 102; index <= 126; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 102; index <= 126; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl7() {
	let lista = [];
	for (let index = 127; index <= 151; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 127; index <= 151; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
