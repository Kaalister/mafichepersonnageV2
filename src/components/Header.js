import React from 'react';
import * as FileSaver from 'save-as-js';

export default class Header extends React.Component {

    handleSave = () => {
        if (null === this.props.infos) return;

		let text = JSON.stringify(this.props.infos);
        let blob = new Blob([text], {type: "application/octet-stream"});
        let firstName = this.props.infos.CharacterSettings.firstName;
        let lastName = this.props.infos.CharacterSettings.lastName;
		let name = lastName + firstName;

        if (lastName === "" && firstName === "")
            name = "MaFichePersonnage";
		FileSaver.saveAs(blob, name + ".json" );
    }

    render() {
        let name = <div className="bigText big-title">Mon Personnage</div>;

        if (null === this.props.infos) {
            return (
                <div className="header">
                    <div className="bigText big-title">Bienvenue sur Ma Fiche Personnage !</div>
                </div>
            );
        }

        let firstName = this.props.infos.CharacterSettings.firstName;
        let lastName = this.props.infos.CharacterSettings.lastName;

        if (firstName !== "" || lastName !== "")
            name = (
                <div className="bigText big-title">
                    {firstName} {lastName}
                </div>
            )

        return (
            <div className="header">
                <button 
                 className="header-button"
                 onClick={() => { this.props.setBurger(true) }}
                >
                    <div className="menu-btn">
                        <div className="bigText header-button-text vertical-left">
                            Menu
                        </div>
                    </div>
                </button>
                {name}
                <button
                 className="header-button"
                 onClick={() => { this.handleSave() }}
                 disabled={this.props.Burger}
                >
                    <div className="save-btn">
                        <div className="bigText header-button-text vertical-right">
                            Save
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}