import React from 'react';

export default class CharacterSettings extends React.Component {

    state = {
        infos: this.props.infos,
        caracName:"",
        caracVal:"",
        compName:"",
        compDesc:"",
        statName:"",
        statVal:"",
    }

    handleFirstName = (name) => {
        let newinfos = {...this.state.infos};

        newinfos.CharacterSettings.firstName = name.target.value;
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleLastName = (name) => {
        let newinfos = {...this.state.infos};

        newinfos.CharacterSettings.lastName = name.target.value;
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleWork = (name) => {
        let newinfos = {...this.state.infos};

        newinfos.CharacterSettings.work = name.target.value;
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleBio = (name) => {
        let newinfos = {...this.state.infos};

        newinfos.CharacterSettings.bio = name.target.value
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleCaracName = (name) => {
        let old = this.state.caracName.slice();

        old = name.target.value;
        this.setState({ caracName: old });
    }

    handleCaracVal = (name) => {
        let old = this.state.caracDesc;

        old = name.target.value;
        this.setState({ caracVal: old });
    }

    handleCompName = (name) => {
        let old = this.state.compName.slice();
        
        old = name.target.value;
        this.setState({ compName: old });
    }

    handleCompDesc = (name) => {
        let old = this.state.compDesc.slice();
        
        old = name.target.value;
        this.setState({ compDesc: old });
    }

    handleStatName = (name) => {
        let old = this.state.statName.slice();

        old = name.target.value;
        this.setState({ statName: old });
    }

    handleStatVal = (name) => {
        let old = this.state.caracDesc;
       
        old = name.target.value;
        this.setState({ statVal: old });
    }

    handleAddCarac = () => {
        let newinfos = {...this.state.infos};

        if (this.state.caracName === "" || this.state.caracVal === "")
            return;
        newinfos.CharacterSettings.characteristic.push({
            name: this.state.caracName,
            val: parseInt(this.state.caracVal)
        });
        newinfos.Character.characteristic.push({
            name: this.state.caracName,
            val: 0
        });
        this.setState({
            infos: newinfos,
            caracName: "",
            caracVal: ""
        }, this.props.setInfo(newinfos));
    }

    handleAddComp = () => {
        let newinfos = {...this.state.infos};

        if (this.state.compName === "" || this.state.compDesc === "") 
            return;
        newinfos.CharacterSettings.skill.push({
            name: this.state.compName, 
            desc: this.state.compDesc
        });
        this.setState({
            infos: newinfos, 
            compDesc: "", 
            compName: ""
        }, this.props.setInfo(newinfos));
    }

    handleAddStat = () => {
        let newinfos = {...this.state.infos};

        if (this.state.statName === "" || this.state.statName === "") return;
        
        newinfos.CharacterSettings.statistic.push({
            name: this.state.statName,
            val: parseInt(this.state.statVal)
        });
        newinfos.Character.statistic.push({
            name: this.state.statName,
            val: 0
        });
        this.setState({
            infos: newinfos, 
            statName: "", 
            statVal: ""
        }, this.props.setInfo(newinfos));
    }

    removeFromTab = (index, tab) => {
        let newinfos = {...this.state.infos};

        if (tab === "carac") {
            newinfos.CharacterSettings.characteristic.splice(index, 1);
            newinfos.Character.characteristic.splice(index, 1);
        }
        if (tab === "comp")
            newinfos.CharacterSettings.skill.splice(index, 1);
        if (tab === "stat") {
            newinfos.CharacterSettings.statistic.splice(index, 1);
            newinfos.Character.statistic.splice(index, 1);
        }

        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleTab = (tab, event, index, name) => {
        let newinfos = {...this.state.infos};

        if (tab === "carac")
            newinfos.CharacterSettings.characteristic[index] = {
                name: name,
                val: parseInt(event)
            };
        if (tab === "stat")
            newinfos.CharacterSettings.statistic[index] = {
                name: name,
                val: parseInt(event)
            };

        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleImg = () => {
        let input = document.getElementById("inputImg");
        let newinfos = {...this.state.infos};

        input.click();
        input.addEventListener("change", (e) => {
            var file = e.target.files[0];
            var reader = new FileReader();
            
            reader.readAsDataURL(file);
            
			reader.onload = () => {
                newinfos.CharacterSettings.avatar = reader.result;
                this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
			};
        })
    }

    render() {
        let image = require("../assets/images/avatar.jpg");
        let caracState = this.state.infos.CharacterSettings.characteristic;
        let competencesState = this.state.infos.CharacterSettings.skill;
        let statsState = this.state.infos.CharacterSettings.statistic;
        let caracteristiques, competences, stats;

        if (this.state.infos.CharacterSettings.avatar !== "")
            image = this.state.infos.CharacterSettings.avatar;
        
        caracteristiques = caracState.map((obj, index) => {
            return (
                <div className="row" key={obj.name + "_" + index}>
                    <div className="littleText tab-case">
                    {"- " + obj.name + " : "}  
                        <input type="number"
                         className="littleText tab-input-nb"
                         value={obj.val}
                         onChange={(e) => {
                            this.handleTab("carac", e.target.value, index, obj.name)
                         }}
                        /> 
                    </div>
                    <button
                     className="little-circle-button del-button"
                     onClick={()=> {this.removeFromTab(index, "carac")}}
                    >
                        -
                    </button>
                </div>
            );
        });

        competences = competencesState.map((obj, index) => {
            return (
                <div className="row" key={obj.name + "_" + index}>
                    <div className="littleText tab-case">
                        {"- " + obj.name + " : "} 
                        <div className="littleText tab-desc">
                            {obj.desc} 
                        </div>
                    </div>
                    <button
                     className="little-circle-button del-button"
                     onClick={()=> {this.removeFromTab(index, "comp")}}
                    >
                        -
                    </button>
                </div>
            );
        });

        stats = statsState.map((obj, index) => {
            return (
                <div className="row" key={obj.name + "_" + index}>
                    <div className="littleText tab-case">
                        {"- " + obj.name + " : "} 
                        <input
                         type="number"
                         className="littleText tab-input-nb"
                         value={obj.val} onChange={(e) => {
                            this.handleTab("stat", e.target.value, index, obj.name)
                         }}
                        /> 
                    </div>
                    <button
                     className="little-circle-button del-button"
                     onClick={()=> {this.removeFromTab(index, "stat")}}
                    >
                        -
                    </button>
                </div>
            );
        });

        return(
            <div className="container wrapped row">
                <div className="bigText section-title">
                    Options Personnage :
                </div>

                <div className="flex-1 row character-charac">
                    <input
                     type="file"
                     id="inputImg"
                     className="hidden"
                     alt=""
                     accept=".jpg,.png"
                    />
                    <button
                     className="clickable invisible-button"
                     onClick={() => { this.handleImg() }}
                    >
                        <img
                         src={image}
                         alt=""
                         className="character-charac-picture"
                        />
                    </button>

                    <div className="character-desc-div">
                        <input
                         type="text"
                         placeholder="Prénom"
                         onChange={(data) => {
                            this.handleFirstName(data)
                         }}
                         className="littleText input-text"
                         value={this.state.infos.CharacterSettings.firstName}
                        />
                        <input
                         type="text"
                         placeholder="Nom"
                         onChange={(data) => {
                            this.handleLastName(data)
                         }}
                         className="littleText input-text"
                         value={this.state.infos.CharacterSettings.lastName}
                        />
                        <br/>
                        <input
                         type="text"
                         placeholder="Métier / Race" 
                         onChange={(data) => {
                            this.handleWork(data)
                         }}
                         className="littleText input-text"
                         value={this.state.infos.CharacterSettings.work}
                        />

                        <div>
                            <div className="bigText underpart-title">
                                Caractéristiques :
                            </div>
                            <input
                             type="text"
                             placeholder="Nom"
                             onChange={(data) => {
                                this.handleCaracName(data)
                             }}
                             className="littleText input-text"
                             value={this.state.caracName}
                            />
                            :
                            <input
                             type="number"
                             placeholder="Valeur" 
                             onChange={(data) => {
                                this.handleCaracVal(data)
                             }}
                             className="littleText input-number"
                             value={this.state.caracVal}
                            />
                            <button
                             className="little-circle-button add-button"
                             onClick={() => {this.handleAddCarac()}}
                            >
                                +
                            </button>
                            <div>
                                {caracteristiques}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex-1 character-skills-div">
                    <div className="bigText underpart-title">Compétences :</div>
                    <input
                     type="text"
                     placeholder="Nom"
                     onChange={(data) => {
                        this.handleCompName(data)
                     }}
                     className="littleText input-text"
                     value={this.state.compName}
                    />
                    :
                    <input
                     type="text"
                     placeholder="Description"
                     onChange={(data) => {
                        this.handleCompDesc(data)
                     }}
                     className="littleText input-text"
                     value={this.state.compDesc}
                    />
                    <button
                     className="little-circle-button add-button"
                     onClick={() => { this.handleAddComp() }}
                    >
                        +
                    </button>
                    <div>
                        {competences}
                    </div>
                </div>

                <div className="full-width">
                    <div className="bigText underpart-title">Biographie :</div>
                    <textarea
                     className="littleText input-textarea"
                     onChange={(data) => { this.handleBio(data) }}
                     value={this.state.infos.CharacterSettings.bio}
                    />
                </div>
                <div className="full-width" style={{ marginBottom: 100 }}>
                    <div className="bigText underpart-title">
                        Statistiques :
                    </div>
                    <input
                     type="text"
                     placeholder="Nom"
                     onChange={(data) => { this.handleStatName(data) }}
                     className="littleText input-text"
                     value={this.state.statName}
                    />
                    :
                    <input
                     type="number"
                     placeholder="Valeur"
                     onChange={(data) => { this.handleStatVal(data) }}
                     className="littleText input-number"
                     value={this.state.statVal}
                    />
                    <button
                     className="little-circle-button add-button"
                     onClick={() => { this.handleAddStat() }}
                    >
                        +
                    </button>
                    <div>
                        {stats}
                    </div>
                </div>
            </div>
        )
    }
}