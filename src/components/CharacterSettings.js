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
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        newinfos.CharacterSettings.firstName = name.target.value;
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleLastName = (name) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        newinfos.CharacterSettings.lastName = name.target.value;
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleWork = (name) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        newinfos.CharacterSettings.work = name.target.value;
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleBio = (name) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        newinfos.CharacterSettings.bio = name.target.value
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleCaracName = (name) => {
        let old = this.state.caracName.slice();

        old = name.target.value;
        this.setState({caracName: old});
    }

    handleCaracVal = (name) => {
        let old = this.state.caracDesc;

        old = name.target.value;
        this.setState({caracVal: old});
    }

    handleCompName = (name) => {
        let old = this.state.compName.slice();
        
        old = name.target.value;
        this.setState({compName: old});
    }

    handleCompDesc = (name) => {
        let old = this.state.compDesc.slice();
        
        old = name.target.value;
        this.setState({compDesc: old});
    }

    handleStatName = (name) => {
        let old = this.state.statName.slice();

        old = name.target.value;
        this.setState({statName: old});
    }

    handleStatVal = (name) => {
        let old = this.state.caracDesc;
       
        old = name.target.value;
        this.setState({statVal: old});
    }

    handleAddCarac = () => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (this.state.caracName !== "" && this.state.caracVal !== "") {
            newinfos.CharacterSettings.characteristic.push({name: this.state.caracName, val: parseInt(this.state.caracVal)});
            newinfos.Character.characteristic.push({name: this.state.caracName, val: 0});
            this.setState({infos: newinfos, caracName: "", caracVal: ""}, this.props.setInfo(newinfos));
        }
    }

    handleAddComp = () => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (this.state.compName !== "" && this.state.compDesc !== "") {
            newinfos.CharacterSettings.skill.push({name: this.state.compName, desc: this.state.compDesc});
            this.setState({infos: newinfos, compDesc: "", compName: ""}, this.props.setInfo(newinfos));
        }
    }

    handleAddStat = () => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (this.state.statName !== "" && this.state.statName !== "") {
            newinfos.CharacterSettings.statistic.push({name: this.state.statName, val: parseInt(this.state.statVal)});
            newinfos.Character.statistic.push({name: this.state.statName, val: 0});
            this.setState({infos: newinfos, statName: "", statVal: ""}, this.props.setInfo(newinfos));
        }
    }

    removeFromTab = (index, tab) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (tab === "carac") {
            newinfos.CharacterSettings.characteristic.splice(index, 1);
            newinfos.Character.characteristic.splice(index, 1);
        }
        if (tab === "comp") {
            newinfos.CharacterSettings.skill.splice(index, 1);
        }
        if (tab === "stat") {
            newinfos.CharacterSettings.statistic.splice(index, 1);
            newinfos.Character.statistic.splice(index, 1);
        }

        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleTab = (tab, event, index, name) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (tab === "carac") {
            newinfos.CharacterSettings.characteristic[index] = {name: name, val: event};
        }
        if (tab === "stat") {
            newinfos.CharacterSettings.statistic[index] = {name: name, val: event};
        }

        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleImg = () => {
        let input = document.getElementById("inputImg");
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        input.click();
        input.addEventListener("change", (e) => {
            var file = e.target.files[0];
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
                newinfos.CharacterSettings.avatar = reader.result;
                this.setState({infos: newinfos}, this.props.setInfo(newinfos));
			};
        })
    }

    render() {
        let image, caracteristiques, competences, stats;

        if (this.state.infos.CharacterSettings.avatar !== "")
            image = this.state.infos.CharacterSettings.avatar;
        else 
            image = require("../assets/images/avatar.jpg");
        
        caracteristiques = this.state.infos.CharacterSettings.characteristic.map((obj, index) => {
            return (
                    <div style={styles.tabContainer} key={obj.name + "_" + index}>
                        <div style={styles.tabCase} className="littleText">
                        {"- " + obj.name + " : "}  
                            <input type="number" style={styles.tabInput} className="littleText" value={obj.val} onChange={(e) => {this.handleTab("carac", e.target.value, index, obj.name)}}/> 
                        </div>
                        <button style={styles.delBtn} onClick={()=> {this.removeFromTab(index, "carac")}}>-</button>
                    </div>
                );
        });

        competences = this.state.infos.CharacterSettings.skill.map((obj, index) => {
            return (
                    <div style={styles.tabContainer} key={obj.name + "_" + index}>
                        <div style={styles.tabCase} className="littleText">
                            {"- " + obj.name + " : "} 
                            <div style={styles.tabDesc} className="littleText">
                                {obj.desc} 
                            </div>
                        </div>
                        <button style={styles.delBtn} onClick={()=> {this.removeFromTab(index, "comp")}}>-</button>
                    </div>
                );
        });

        stats = this.state.infos.CharacterSettings.statistic.map((obj, index) => {
            return (
                <div style={styles.tabContainer} key={obj.name + "_" + index}>
                <div style={styles.tabCase} className="littleText">
                    {"- " + obj.name + " : "} 
                    <input type="number" style={styles.tabInput} className="littleText" value={obj.val} onChange={(e) => {this.handleTab("stat", e.target.value, index, obj.name)}}/> 
                </div>
                <button style={styles.delBtn} onClick={()=> {this.removeFromTab(index, "stat")}}>-</button>
            </div>
                );
        });

        return(
            <div style={styles.container}>
                <div style={styles.section} className="bigText">Options Personnage :</div>
                <div style={styles.avatar}>
                    <input type="file" id="inputImg" style={{display : "none"}} alt="" accept=".jpg,.png"/>
                    <button style={styles.invisibleBtn} className="clickable" onClick={() => {this.handleImg()}}>
                        <img
                            src={image}
                            alt=""
                            style={styles.img}
                        />
                    </button>
                    <div style={styles.avatarDesc}>
                        <input type="text" placeholder="Prénom" onChange={(data) => {(this.handleFirstName(data))}} style={styles.inputText} className="littleText" value={this.state.infos.CharacterSettings.firstName}/>
                        <input type="text" placeholder="Nom" onChange={(data) => {(this.handleLastName(data))}} style={styles.inputText} className="littleText" value={this.state.infos.CharacterSettings.lastName}/><br/>
                        <input type="text" placeholder="Métier / Race" onChange={(data) => {(this.handleWork(data))}} style={styles.inputText} className="littleText" value={this.state.infos.CharacterSettings.work}/>
                        <div>
                            <div style={styles.title} className="bigText">Caractéristiques :</div>
                            <input type="text" placeholder="Nom" onChange={(data) => {(this.handleCaracName(data))}} style={styles.inputText} className="littleText" value={this.state.caracName}></input>:
                            <input type="number" placeholder="Valeur Max" onChange={(data) => {(this.handleCaracVal(data))}} style={styles.inputNumber} className="littleText" value={this.state.caracVal}></input>
                            <button style={styles.addButton} onClick={() => {this.handleAddCarac()}}>+</button>
                            <div>
                                {caracteristiques}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.skills}>
                    <div style={styles.title} className="bigText">Compétences :</div>
                    <input type="text" placeholder="Nom" onChange={(data) => {(this.handleCompName(data))}} style={styles.inputText} className="littleText" value={this.state.compName}></input>:
                    <input type="text" placeholder="Description" onChange={(data) => {(this.handleCompDesc(data))}} style={styles.inputTextLong} className="littleText" value={this.state.compDesc}></input>
                    <button style={styles.addButton} onClick={() => {this.handleAddComp()}}>+</button>
                    <div>
                        {competences}
                    </div>
                </div>
                <div style={{width: "100%"}}>
                    <div style={styles.title} className="bigText">Biographie :</div>
                    <textarea style={styles.textarea} className="littleText" onChange={(data) => {(this.handleBio(data))}} value={this.state.infos.CharacterSettings.bio}></textarea>
                </div>
                <div style={{width: "100%", marginBottom: 100}}>
                    <div style={styles.title} className="bigText">Statistiques :</div>
                    <input type="text" placeholder="Nom" onChange={(data) => {(this.handleStatName(data))}} className="littleText" style={styles.inputText} value={this.state.statName}></input>:
                    <input type="number" placeholder="Valeur Max" onChange={(data) => {(this.handleStatVal(data))}} style={styles.inputNumber} className="littleText" value={this.state.statVal}></input>
                    <button style={styles.addButton} onClick={() => {this.handleAddStat()}}>+</button>
                    <div>
                        {stats}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    avatarDesc: {
        marginLeft: 30,
        right: 0,
    },
    container: {
        marginLeft: 50,
        marginRight: 50,
        flexWrap: "wrap",
        flex: 1,
        display: "flex",
        flexDirecion: "row",
    },
    avatar: {
        flex: 1,
        display: "flex",
        flexDirecion: "row",
        minWidth: 560,
        right: 0,
    },
    skills: {
        selfAlign: "center",
        flex: 1,
        right: 0,
        minWidth: 550,
    },
    img: {
        left: 0,
        height: 200,
        width: 180,
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        textDecoration: "underline",
        fontSize: 35,
    },
    section: {
        marginBottom: 30,
        textDecoration: "underline",
        fontSize: 40,
        width: "100%",
        textAlign: "center",
    },
    inputNumber: {
        fontSize: 35,
        maxWidth: 100,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        textAlign: "center",
        color: "white",
        border: "none",
    },
    inputText: {
        maxWidth: 180,
        fontSize: 35,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        textAlign: "center",
        color: "white",
        border: "none",
    },
    textarea: {
        width: "100%",
        fontSize: 35,
        marginTop: 10,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        color: "white",
        border: "none",
    },
    inputTextLong: {
        minWidth: 300,
        fontSize: 35,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        textAlign: "center",
        color: "white",
        border: "none",
        wrapText: "wrap",
    },
    addButton: {
        marginLeft: 10,
        fontWeight: "bold",
        backgroundColor: "#804d00",
        color: "white",
        borderRadius: 20,
        fontSize: 20,
        border: "none",
    },
    tabContainer: {
        display: "flex",
        flexDirecion: "row",
    },
    tabCase: {
        marginTop: 10,
        fontSize: 35,
        display: "flex",
    },
    tabInput: {
        fontSize: 35,
        backgroundColor: "Transparent",
        border: "none",
        maxWidth: 100,
        marginLeft:5,
    },
    delBtn: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 5,
        height: 30,
        width: 30,
        backgroundColor: "#AD2E2E",
        fontSize: 20,
        borderRadius: 20,
        borderColor: "black",
        color: "white",
        fontWeight: "bold",
    },
    invisibleBtn: {
        backgroundColor: "transparent",
        border: "none",
    },
    tabDesc: {
        fontSize: 35,
        marginLeft: 5,
        wrapText: "wrap",
        maxWidth: 400,
    }
}