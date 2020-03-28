import React from 'react';
import background from '../assets/images/top.jpg';
import marquePage from '../assets/images/marque_page.png';
import revMarquePage from '../assets/images/rev_marque_page.png';
import * as FileSaver from 'save-as-js';

export default class Header extends React.Component {

    handleSave = () => {
		var text = JSON.stringify(this.props.infos);
		var blob = new Blob([text], {type: "application/octet-stream"});
		var name = this.props.infos.CharacterSettings.lastName + this.props.infos.CharacterSettings.firstName;

		if (this.props.infos.CharacterSettings.lastName === "" && this.props.infos.CharacterSettings.firstName === "")
			name = "MaFichePersonnage";
		FileSaver.saveAs(blob, name + ".json" );
    }

    render() {
        let name;

        if (this.props.infos != null) {
            if (this.props.infos.CharacterSettings.firstName !== "" || this.props.infos.CharacterSettings.lastName !== "")
                name = <div style={styles.title}>{this.props.infos.CharacterSettings.firstName} {this.props.infos.CharacterSettings.lastName}</div>
            else
                name = <div style={styles.title}>Mon Personnage</div>
            return (
                <div style={styles.empty} className="backgroundHeader">
                    <button style={styles.buttonMenu} onClick={() => {this.props.setBurger(true)}}>
                        <div style={styles.divMenu}>
                            <div style={styles.verticalText}>Menu</div>
                        </div>
                    </button>
                    {name}
                    <button style={styles.buttonMenu} onClick={() => {this.handleSave()}}>
                        <div style={styles.divSave}>
                            <div style={styles.revVerticalText}>Save</div>
                        </div>
                    </button>
                </div>
            )
        } else {
            return (
                <div style={styles.empty} className="backgroundHeader">
                    <div style={styles.title}>Bienvenue sur Ma Fiche Personnage !</div>
                </div>
            )
        }
    }
}

const styles = {
    title: {
        marginTop: 150,
        textAlign: "center",
        flex: 1,
        fontSize: 50,
        fontFamily: "UnifrakturMaguntia", 
    },
    empty: {
        minHeight: 300,
        display: "flex",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
    },
    img: {
        height: 200,
        width: 50,
        left: 0,
    },
    buttonMenu: {
        padding: 0,
        backgroundColor: "transparent",
        border: "none",
    },
    divMenu: {
        backgroundImage: `url(${marquePage})`,
        backgroundRepeat: "no-repeat",
        height: 200,
        width: 40,
    },
    divSave: {
        backgroundImage: `url(${revMarquePage})`,
        backgroundRepeat: "no-repeat",
        height: 200,
        width: 40,
        right: 0,
    },
    verticalText: {
        verticalAlign: "middle",
        height: "90%",
        writingMode: "vertical-rl",
        fontSize: 30,
        fontFamily: "UnifrakturMaguntia",
        flex: 1,
    },
    revVerticalText: {
        verticalAlign: "middle",
        height: "90%",
        writingMode: "vertical-rl",
        fontSize: 30,
        fontFamily: "UnifrakturMaguntia",
        transform: "rotateZ(180deg)",
        marginLeft: 6,
    },
}