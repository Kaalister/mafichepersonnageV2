import React from 'react';
import './App.css';

import background from './assets/images/mid.jpg'
import Header from './components/Header';
import Welcome from './components/Welcome';
import CharacterSettings from './components/CharacterSettings';
import Character from './components/Character';
import Inventory from './components/Inventory';
import BurgerMenu from './components/BurgerMenu/Burger';
import Settings from './components/Settings';
import Equipment from './components/Equipment';
import Tutorial from './components/Tutorial';

export default class App extends React.Component {
	state = {
		infos: null,
		page: "CharacterSettings",
		Burger: false,
	}

	setBurger = (status) => {
		this.setState({Burger: status});
	}

	setPage = (dest) => {
		this.setState({page: dest, Burger: false});
	}

	setInfo = (infos, dest = null) => {
		if (dest == null)
			this.setState({infos: infos}, this.forceUpdate());
		else
			this.setState({infos: infos, page: dest}, this.forceUpdate());
	}

	render () {
		let contents;
		let size = 0;

		if (document.getElementById("Body")) {
			size = document.getElementById("Body").offsetHeight;
		}

		if (this.state.infos == null) {
			contents =	<div style={styles.page}>
							<Welcome infos={this.infos} setInfo={this.setInfo} height={size}/>
						</div>;
		} else {
			switch (this.state.page) {
				case "Character":
					contents =	<div style={styles.page}>
    								<Character
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				default:
				case "CharacterSettings":
					contents = 	<div style={styles.page}>
									<CharacterSettings
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				case "Equipment":
					contents = 	<div style={styles.page}>
									<Equipment
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				case "Inventory":
					contents = 	<div style={styles.page}>
									<Inventory
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				case "Tutorial":
					contents = 	<div style={styles.page}>
									<Tutorial
									/>
								</div>;
					break;
				case "Settings":
					contents = 	<div style={styles.page}>
									<Settings
									/>
								</div>;
					break;
			}
		}
		return(
			<div id="Body" style={styles.body}>
				<BurgerMenu infos={this.state.infos} setInfo={this.setInfo} Burger={this.state.Burger} setBurger={this.setBurger} setPage={this.setPage} height={size}/>
				<Header infos={this.state.infos} setBurger={this.setBurger} Burger={this.state.Burger}/>
				{contents}
			</div>
		);
	}
}

const styles = {
	body: {
		flex:1,
		display: "flex",
		flexDirection: "column",
		minHeight: "100%",
	},
	page: {
		backgroundImage : `url(${background})`,
		flex: 10,
		backgroundSize: "100% 100%",
	},
}