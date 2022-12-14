import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { Level1 } from "../pages/level1";
import { Level2 } from "../pages/level2";
import { Level3 } from "../pages/level3";
import { Level4 } from "../pages/level4";
import { Level5 } from "../pages/level5";
import { Level6 } from "../pages/level6";
import { Level7 } from "../pages/level7";
import { Level8 } from "../pages/level8";
import { Level9 } from "../pages/level9";
import { Level10 } from "../pages/level10";
export function App() {
	return (
		<Routes>
			{/* If the current URL is /about, this route is rendered
                while the rest are ignored */}

			{/* Note how these two routes are ordered. The more specific
                path="/contact/:id" comes before path="/contact" so that
                route will render when viewing an individual contact */}

			{/* If none of the previous routes render anything,
                this route acts as a fallback.
    
                Important: A route with path="/" will *always* match
                the URL because all URLs begin with a /. So that's
                 why we put this one last of all */}

			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/level1" element={<Level1 />} />
				<Route path="/level2" element={<Level2 />} />
				<Route path="/level3" element={<Level3 />} />
				<Route path="/level4" element={<Level4 />} />
				<Route path="/level5" element={<Level5 />} />
				<Route path="/level6" element={<Level6 />} />
				<Route path="/level7" element={<Level7 />} />
				<Route path="/level8" element={<Level8 />} />
				<Route path="/level9" element={<Level9 />} />
				<Route path="/level10" element={<Level10 />} />
			</Route>
		</Routes>
	);
}
