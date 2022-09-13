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
	for (let index = 10; index <= 20; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 10; index <= 20; index++) {
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
	for (let index = 21; index <= 34; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 21; index <= 34; index++) {
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
	for (let index = 35; index <= 49; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 35; index <= 49; index++) {
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
	for (let index = 50; index <= 65; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 50; index <= 165; index++) {
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
	for (let index = 66; index <= 82; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 66; index <= 82; index++) {
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
	for (let index = 83; index <= 99; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 83; index <= 99; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl8() {
	let lista = [];
	for (let index = 100; index <= 121; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 100; index <= 121; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl9() {
	let lista = [];
	for (let index = 122; index <= 143; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 122; index <= 143; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
export async function obtenerListaLvl10() {
	let lista = [];
	for (let index = 144; index <= 151; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 144; index <= 151; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 244; index <= 251; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 244; index <= 251; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 381; index <= 384; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}
	for (let index = 381; index <= 384; index++) {
		lista.push(
			await getOnePokemon(index).then((res) => {
				return res;
			})
		);
	}

	shuffleArray(lista);
	return lista;
}
