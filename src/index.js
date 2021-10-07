import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { MovieContextProvider } from "./context/MovieContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ComedyPage from "./page/ComedyPage"
import AnimationPage from "./page/AnimationPage"
import ThrillerPage from "./page/ThrillerPage"
import DramePage from "./page/DramePage"
import AventurePage from "./page/AventurePage"
import ActionPage from "./page/ActionPage"
import SciFiPage from "./page/SciFiPage"
import HorrorPage from "./page/HorrorPage"

ReactDOM.render(
	<React.StrictMode>
		<MovieContextProvider>
			<Router>
				<Switch>
					<Route path="/categorie/Comedy" component={ComedyPage} />
					<Route path="/categorie/Animation" component={AnimationPage} />
					<Route path="/categorie/Thriller" component={ThrillerPage} />
					<Route path="/categorie/Drame" component={DramePage} />
					<Route path="/categorie/Aventure" component={AventurePage} />
					<Route path="/categorie/Horror" component={HorrorPage} />
					<Route path="/categorie/Action" component={ActionPage} />
					<Route path="/categorie/Sci-Fi" component={SciFiPage} />
					<Route exact path="/" component={App} />
					<App />
				</Switch>
			</Router>
		</MovieContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
