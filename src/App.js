import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';
import './assets/css/MPF.css';
import './assets/css/MPF-responsive.css';

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

		if (this.state.infos == null) {
			contents =	<div id="current-page" className="current-page-container">
							<Welcome
							 infos={this.infos}
							 setInfo={this.setInfo}
							/>
						</div>;
		} else {
			switch (this.state.page) {
				case "Character":
					contents =	<div id="current-page" className="current-page-container">
    								<Character
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				default:
				case "CharacterSettings":
					contents = 	<div id="current-page" className="current-page-container">
									<CharacterSettings
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				case "Equipment":
					contents = 	<div id="current-page" className="current-page-container">
									<Equipment
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				case "Inventory":
					contents = 	<div id="current-page" className="current-page-container">
									<Inventory
										infos={this.state.infos}
										setInfo={this.setInfo}
									/>
								</div>;
					break;
				case "Tutorial":
					contents = 	<div id="current-page" className="current-page-container">
									<Tutorial
									/>
								</div>;
					break;
				case "Settings":
					contents = 	<div id="current-page" className="current-page-container">
									<Settings
									/>
								</div>;
					break;
			}
		}


		return(
			<Scrollbars className="custom-bar" autoHide>
				<div id="Body">
					<BurgerMenu
					 infos={this.state.infos}
					 setInfo={this.setInfo}
					 Burger={this.state.Burger}
					 setBurger={this.setBurger}
					 setPage={this.setPage}
					/>
					<Header
					 infos={this.state.infos}
					 setBurger={this.setBurger}
					 Burger={this.state.Burger}
					/>
					{contents}
				</div>
			</Scrollbars>
		);
	}
}