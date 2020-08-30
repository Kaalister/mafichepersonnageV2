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
                this.props.setInfo(obj, "Character");
			};
        })
    }

    render() {
        return(
            <div style={{flex: 1}}>
                <div className="littleText standard-text">
                    Ce site te permettra de créer et d'éditer votre fiche de personnage de jeu de rôle.
                </div><br/>
                <div className="littleText standard-text">
                    Prenez part à l'aventure !!!
                </div>
                <div className="welcome-btn-area">
                    <button
                     className="littleText basic-btn"
                     onClick={()=>{this.createNewCharacter()}}>
                        Créer
                    </button>
                    <button
                     className="littleText basic-btn"
                     onClick={()=>{this.getFile()}}>
                        Ouvrir
                    </button>
                </div>
                <input
                 name="myfile"
                 type="file"
                 id="inputFile"
                 accept=".json"
                 className="hidden"
                />
            </div>
        )
    }
}