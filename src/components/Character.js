import React from 'react';

export default class Character extends React.Component {

    state = {
        infos: this.props.infos,
    }

    handleNotes = (note) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        newinfos.Character.note = note.target.value;
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleTab = (tab, event, index, name) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (tab === "carac" && event - this.state.infos.CharacterSettings.characteristic[index].val <= 0) {
            newinfos.Character.characteristic[index] = {name: name, val: event - this.state.infos.CharacterSettings.characteristic[index].val};
        }
        if (tab === "stat") {
            newinfos.Character.statistic[index] = {name: name, val: event - this.state.infos.CharacterSettings.statistic[index].val};
        }

        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    render() {
        let image, caracteristiques, competences, stats;

        if (this.state.infos.CharacterSettings.avatar !== "")
            image = this.state.infos.CharacterSettings.avatar;
        else 
            image = require("../assets/images/avatar.jpg");
        
        caracteristiques = this.state.infos.Character.characteristic.map((obj, index) => {
            return (
                    <div style={styles.tabContainer} key={obj.name + "_" + index}>
                        <div style={styles.tabCase} className="littleText">
                            - {obj.name} :
                            <input type="number" style={styles.tabInput} className="littleText" value={obj.val + this.state.infos.CharacterSettings.characteristic[index].val} onChange={(e) => {this.handleTab("carac", e.target.value, index, obj.name)}}/> 
                        </div>
                    </div>
                );
        });

        competences = this.state.infos.CharacterSettings.skill.map((obj, index) => {
            return (
                    <div style={styles.tabContainer} key={obj.name + "_" + index}>
                        <div style={styles.tabCase} className="littleText">
                            - {obj.name} : 
                            <div style={styles.tabDesc}>
                                {obj.desc} 
                            </div>
                        </div>
                    </div>
                );
        });

        stats = this.state.infos.Character.statistic.map((obj, index) => {
            return (
                <div style={styles.tabContainer} key={obj.name + "_" + index}>
                <div style={styles.tabCase} className="littleText">
                    - {obj.name} :
                    <input type="number" style={styles.tabInput} className="littleText" value={obj.val + this.state.infos.CharacterSettings.statistic[index].val} onChange={(e) => {this.handleTab("stat", e.target.value, index, obj.name)}}/> 
                </div>
            </div>
                );
        });

        return(
            <div style={styles.container}>
                <div style={styles.section} className="bigText">Personnage :</div>
                <div style={styles.avatar}>
                    <img
                        src={image}
                        alt=""
                        style={styles.img}
                    />
                    <div style={styles.avatarDesc}>
                        <div style={{display: "flex"}}>
                            <div style={styles.text} className="littleText">{this.state.infos.CharacterSettings.firstName}</div>
                            <div style={styles.text} className="littleText">{this.state.infos.CharacterSettings.lastName}</div>
                        </div>
                        <div style={styles.text} className="littleText">{this.state.infos.CharacterSettings.work}</div>
                        <div>
                            <div style={styles.title} className="bigText">Caractéristiques :</div>
                            {caracteristiques}
                        </div>
                    </div>
                </div>
                <div style={styles.skills}>
                    <div style={styles.title} className="bigText">Compétences :</div>
                    {competences}
                </div>
                <div style={{width: "100%"}}>
                    <div style={styles.title} className="bigText">Biographie :</div>
                    <div style={styles.longText} className="littleText">{this.state.infos.CharacterSettings.bio}</div>
                </div>
                <div style={{width: "100%"}}>
                    <div style={styles.title} className="bigText">Statistiques :</div>
                    {stats}
                </div>
                <div style={{width: "100%", marginBottom: 100}}>
                    <div style={styles.title} className="bigText">Notes :</div>
                    <textarea style={styles.longText} className="littleText" value={this.state.infos.Character.note} onChange={(e) => {this.handleNotes(e)}}></textarea>
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
    text: {
        width: 180,
        fontSize: 35,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
    },
    longText: {
        width: "100%",
        fontSize: 35,
        marginTop: 10,
        backgroundColor: "transparent",
        border: "none",
    },
    tabContainer: {
        display: "flex",
        flexDirecion: "row",
    },
    tabCase: {
        display: "flex",
        marginTop: 10,
        fontSize: 35,
    },
    tabInput: {
        fontSize: 35,
        backgroundColor: "transparent",
        border: "none",
        maxWidth: 100,
        marginLeft:5,
    },
    tabDesc: {
        fontSize: 35,
        marginLeft: 5,
        wrapText: "wrap",
        maxWidth: 400,
    }
}