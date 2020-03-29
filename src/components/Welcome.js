import React from 'react';
import Charcacter from '../assets/default.json'

export default class Welcome extends React.Component {

    createNewCharacter = () => {
		this.props.setInfo(Charcacter);
    }

    getFile = () => {
        let input = document.getElementById("inputFile");
        input.click();
        input.addEventListener("change", (e) => {
            var file = e.target.files[0];
			var reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => {
                let obj = JSON.parse(reader.result);
                console.log(obj);
                this.props.setInfo(obj);
			};
        })
    }

    render() {
        return(
            <div style={{flex: 1}}>
                <div style={styles.intro} className="littleText">Ce site te permettra de créer et d'éditer votre fiche de personnage de jeu de role.</div><br/>
                <div style={styles.intro}className="littleText">Prenez par à l'aventure !!!</div>
                <div style={styles.buttonArea}>
                    <button style={styles.button} className="littleText" onClick={()=>{this.createNewCharacter()}}>Créer</button>
                    <button style={styles.button} className="littleText" onClick={()=>{this.getFile()}}>Ouvrir</button>
                </div>
                <input name="myfile" type="file" id="inputFile" accept=".json" style={styles.input}/>
            </div>
        )
    }
}

const styles = {
    input: {
        display: "none",
    },
    intro: {
        fontSize: 35,
        textAlign: "center",
    },
    button: {
        fontSize: 30,
        width: 100,
        height: 60,
        margin: 30,
        borderRadius: 20,
        color: "white",
        backgroundColor: "#804d00",
        borderColor: "black",
    },
    buttonArea: {
        textAlign: "center",
        marginTop: 100,
    },
}