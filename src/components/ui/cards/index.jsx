import React from "react";

import "./index.css";

function PokeCards(props) {
	let showFace = props.mostrar;
	let cardBack = props.tipo;
	let tipo = "";
	let mostrar = "";

	if (showFace === true) {
		mostrar = "card";
	} else {
		mostrar = "mostrar";
	}

	tipo = "card_back";

	if (cardBack === "fire") tipo = "fire";

	if (cardBack === "grass") tipo = "grass";

	if (cardBack === "poison") tipo = "poison";

	if (cardBack === "water") tipo = "water";
	if (cardBack === "bug") tipo = "bug";
	if (cardBack === "electric") tipo = "electric";
	if (cardBack === "ground") tipo = "ground";
	if (cardBack === "rock") tipo = "rock";
	if (cardBack === "fighting") tipo = "fighting";
	if (cardBack === "psychic") tipo = "psychic";
	if (cardBack === "ghost") tipo = "ghost";

	return (
		<div
			onClick={() => {
				props.onClick();
			}}
			className={mostrar}
		>
			<div className={"card_back face " + tipo}>
				<img
					className="card_back_img "
					src={props.front}
					alt={"FrontCard"}
				></img>
			</div>

			<div className="card_front face">
				<img
					className="card_front_img "
					src="https://res.cloudinary.com/fiba06-dev/image/upload/v1662638529/pokecards/pokemon_back_card_ckyegm.png"
					alt="BackCard"
				/>
			</div>
		</div>
	);
}

export { PokeCards };
