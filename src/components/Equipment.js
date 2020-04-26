import React from 'react';

import headsetImg from "../assets/images/equipment/headset.png";
import plastronImg from "../assets/images/equipment/plastron.png";
import handImg from "../assets/images/equipment/hand.png";
import pantImg from "../assets/images/equipment/pants.png";
import footImg from "../assets/images/equipment/foot.png";
import weaponImg from "../assets/images/equipment/weapon.png";

export default class Equipment extends React.Component {

    state = {
        infos: this.props.infos,
        headset: {name: "", desc: ""},
        plastron: {name: "", desc: ""},
        hand: {name: "", desc: ""},
        pants: {name: "", desc: ""},
        foot: {name: "", desc: ""},
        weapon: {name: "", desc: ""},
    }

    handleInputHeadset = (source, text) => {
        let headset = JSON.parse(JSON.stringify(this.state.headset));

        headset[source] = text;

        this.setState({headset: headset})
    }
    
    handleInputPlastron = (source, text) => {
        let plastron = JSON.parse(JSON.stringify(this.state.plastron));

        plastron[source] = text;

        this.setState({plastron: plastron})
    }

    handleInputHand = (source, text) => {
        let hand = JSON.parse(JSON.stringify(this.state.hand));

        hand[source] = text;

        this.setState({hand: hand})
    }

    handleInputPants = (source, text) => {
        let pants = JSON.parse(JSON.stringify(this.state.pants));

        pants[source] = text;

        this.setState({pants: pants})
    }

    handleInputFoot = (source, text) => {
        let foot = JSON.parse(JSON.stringify(this.state.foot));

        foot[source] = text;

        this.setState({foot: foot});
    }

    handleInputWeapon = (source, text) => {
        let weapon = JSON.parse(JSON.stringify(this.state.weapon));

        weapon[source] = text;

        this.setState({weapon: weapon});
    }

    delEquipment = (source, id) => {
        let copy = JSON.parse(JSON.stringify(this.state.infos));
        let index = -1;
        
        switch (source) {
            case "headset":
                index = copy.Equipment.head.findIndex(elem => {return id === elem.id})
                copy.Equipment.head.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "plastron":
                index = copy.Equipment.trunk.findIndex(elem => {return id === elem.id})
                copy.Equipment.trunk.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "pants":
                index = copy.Equipment.legs.findIndex(elem => {return id === elem.id})
                copy.Equipment.legs.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "hand":
                index = copy.Equipment.hands.findIndex(elem => {return id === elem.id})
                copy.Equipment.hands.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "foot":
                index = copy.Equipment.foots.findIndex(elem => {return id === elem.id})
                copy.Equipment.foots.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "weapon":
                index = copy.Equipment.weapon.findIndex(elem => {return id === elem.id})
                copy.Equipment.weapon.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            default:
                break;
        }
    }

    addEquipment = (source) => {
        let copy = JSON.parse(JSON.stringify(this.state.infos));
        
        switch (source) {
            case "headset":
                if (this.state.headset.name !== "" && this.state.headset.desc !== "") {
                    copy.Equipment.head.push({name: this.state.headset.name, desc: this.state.headset.desc, id: Date.now()});
                    this.setState({infos: copy, headset: {name: "", desc: ""}}, this.props.setInfo(copy));
                }
                break;
            case "plastron":
                if (this.state.plastron.name !== "" && this.state.plastron.desc !== "") {
                    copy.Equipment.trunk.push({name: this.state.plastron.name, desc: this.state.plastron.desc, id: Date.now()});
                    this.setState({infos: copy, plastron: {name: "", desc: ""}}, this.props.setInfo(copy));
                }
                break;
            case "pants":
                if (this.state.pants.name !== "" && this.state.pants.desc !== "") {
                    copy.Equipment.legs.push({name: this.state.pants.name, desc: this.state.pants.desc, id: Date.now()});
                    this.setState({infos: copy, pants: {name: "", desc: ""}}, this.props.setInfo(copy));
                }
                break;
            case "hand":
                if (this.state.hand.name !== "" && this.state.hand.desc !== "") {
                    copy.Equipment.hands.push({name: this.state.hand.name, desc: this.state.hand.desc, id: Date.now()});
                    this.setState({infos: copy, hand: {name: "", desc: ""}}, this.props.setInfo(copy));
                }
                break;
            case "foot":
                if (this.state.foot.name !== "" && this.state.foot.desc !== "") {
                    copy.Equipment.foots.push({name: this.state.foot.name, desc: this.state.foot.desc, id: Date.now()});
                    this.setState({infos: copy, foot: {name: "", desc: ""}}, this.props.setInfo(copy));
                }
                break;
            case "weapon":
                if (this.state.weapon.name !== "" && this.state.weapon.desc !== "") {
                    copy.Equipment.weapon.push({name: this.state.weapon.name, desc: this.state.weapon.desc, id: Date.now()});
                    this.setState({infos: copy, weapon: {name: "", desc: ""}}, this.props.setInfo(copy));
                }
                break;
            default:
                break;
        }
    }

    render() {
        let headsets = this.state.infos.Equipment.head.map(elem => {
            return (
                <div key={elem.id} style={styles.case}>
                    <button style={styles.delButton} onClick={() => {this.delEquipment("headset", elem.id)}}>-</button>
                    <div className="littleText" style={styles.nameDiv}>{elem.name}</div>
                    <div className="littleText" style={styles.descDiv}>{elem.desc}</div>
                </div>
            )
        });
        let plastrons = this.state.infos.Equipment.trunk.map(elem => {
            return (
                <div key={elem.id} style={styles.case}>
                    <button style={styles.delButton} onClick={() => {this.delEquipment("plastron", elem.id)}}>-</button>
                    <div className="littleText" style={styles.nameDiv}>{elem.name}</div>
                    <div className="littleText" style={styles.descDiv}>{elem.desc}</div>
                </div>
            )
        });
        let hands = this.state.infos.Equipment.hands.map(elem => {
            return (
                <div key={elem.id} style={styles.case}>
                    <button style={styles.delButton} onClick={() => {this.delEquipment("hand", elem.id)}}>-</button>
                    <div className="littleText" style={styles.nameDiv}>{elem.name}</div>
                    <div className="littleText" style={styles.descDiv}>{elem.desc}</div>
                </div>
            )
        });
        let pants = this.state.infos.Equipment.legs.map(elem => {
            return (
                <div key={elem.id} style={styles.case}>
                    <button style={styles.delButton} onClick={() => {this.delEquipment("pants", elem.id)}}>-</button>
                    <div className="littleText" style={styles.nameDiv}>{elem.name}</div>
                    <div className="littleText" style={styles.descDiv}>{elem.desc}</div>
                </div>
            )
        });
        let foots = this.state.infos.Equipment.foots.map(elem => {
            return (
                <div key={elem.id} style={styles.case}>
                    <button style={styles.delButton} onClick={() => {this.delEquipment("foot", elem.id)}}>-</button>
                    <div className="littleText" style={styles.nameDiv}>{elem.name}</div>
                    <div className="littleText" style={styles.descDiv}>{elem.desc}</div>
                </div>
            )
        });
        let weapons = this.state.infos.Equipment.weapon.map(elem => {
            return (
                <div key={elem.id} style={styles.case}>
                    <button style={styles.delButton} onClick={() => {this.delEquipment("weapon", elem.id)}}>-</button>
                    <div className="littleText" style={styles.nameDiv}>{elem.name}</div>
                    <div className="littleText" style={styles.descDiv}>{elem.desc}</div>
                </div>
            )
        });

        return(
            <div style={styles.container}>
                <div style={styles.section} className="bigText">Équipement :</div>
                <div style={styles.containerList}>
                    <div style={styles.list}>
                        <div style={styles.case}>
                            <img
                                src={headsetImg}
                                alt=""
                                style={styles.imgCategorie}
                                />
                        </div>
                        <div style={styles.inputDiv}>
                            <button style={styles.addButton} onClick={() => {this.addEquipment("headset")}}>+</button>
                            <input style={styles.inputTitle} onChange={(e) => {this.handleInputHeadset("name", e.target.value)}} value={this.state.headset.name} className="littleText" placeholder="Name"/>
                            <textarea style={styles.inputDesc} onChange={(e) => {this.handleInputHeadset("desc", e.target.value)}} value={this.state.headset.desc} className="littleText" placeholder="Description"/>
                        </div>
                        {headsets}
                    </div>
                    <div style={styles.list}>
                        <div style={styles.case}>
                            <img
                                src={plastronImg}
                                alt=""
                                style={styles.imgCategorie}
                                />
                        </div>
                        <div style={styles.inputDiv}>
                            <button style={styles.addButton} onClick={() => {this.addEquipment("plastron")}}>+</button>
                            <input style={styles.inputTitle} onChange={(e) => {this.handleInputPlastron("name", e.target.value)}} value={this.state.plastron.name} className="littleText" placeholder="Name"/>
                            <textarea style={styles.inputDesc} onChange={(e) => {this.handleInputPlastron("desc", e.target.value)}} value={this.state.plastron.desc} className="littleText" placeholder="Description"/>
                        </div>
                        {plastrons}
                    </div>
                    <div style={styles.list}>
                        <div style={styles.case}>
                            <img
                                src={handImg}
                                alt=""
                                style={styles.imgCategorie}
                                />
                        </div>
                        <div style={styles.inputDiv}>
                            <button style={styles.addButton} onClick={() => {this.addEquipment("hand")}}>+</button>
                            <input style={styles.inputTitle} onChange={(e) => {this.handleInputHand("name", e.target.value)}} value={this.state.hand.name} className="littleText" placeholder="Name"/>
                            <textarea style={styles.inputDesc} onChange={(e) => {this.handleInputHand("desc", e.target.value)}} value={this.state.hand.desc} className="littleText" placeholder="Description"/>
                        </div>
                        {hands}
                    </div>
                    <div style={styles.list}>
                        <div style={styles.case}>
                            <img
                                src={pantImg}
                                alt=""
                                style={styles.imgCategorie}
                                />
                        </div>
                        <div style={styles.inputDiv}>
                            <button style={styles.addButton} onClick={() => {this.addEquipment("pants")}}>+</button>
                            <input style={styles.inputTitle} onChange={(e) => {this.handleInputPants("name", e.target.value)}} value={this.state.pants.name} className="littleText" placeholder="Name"/>
                            <textarea style={styles.inputDesc} onChange={(e) => {this.handleInputPants("desc", e.target.value)}} value={this.state.pants.desc} className="littleText" placeholder="Description"/>
                        </div>
                        {pants}
                    </div>
                    <div style={styles.list}>
                        <div style={styles.case}>
                            <img
                                src={footImg}
                                alt=""
                                style={styles.imgCategorie}
                                />
                        </div>
                        <div style={styles.inputDiv}>
                            <button style={styles.addButton} onClick={() => {this.addEquipment("foot")}}>+</button>
                            <input style={styles.inputTitle} onChange={(e) => {this.handleInputFoot("name", e.target.value)}} value={this.state.foot.name} className="littleText" placeholder="Name"/>
                            <textarea style={styles.inputDesc} onChange={(e) => {this.handleInputFoot("desc", e.target.value)}} value={this.state.foot.desc} className="littleText" placeholder="Description"/>
                        </div>
                        {foots}
                    </div>
                    <div style={styles.list}>
                        <div style={styles.case}>
                            <img
                                src={weaponImg}
                                alt=""
                                style={styles.imgCategorie}
                                />
                        </div>
                        <div style={styles.inputDiv}>
                            <button style={styles.addButton} onClick={() => {this.addEquipment("weapon")}}>+</button>
                            <input style={styles.inputTitle} onChange={(e) => {this.handleInputWeapon("name", e.target.value)}} value={this.state.weapon.name} className="littleText" placeholder="Name"/>
                            <textarea style={styles.inputDesc} onChange={(e) => {this.handleInputWeapon("desc", e.target.value)}} value={this.state.weapon.desc} className="littleText" placeholder="Description"/>
                        </div>
                        {weapons}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        marginLeft: 50,
        marginRight: 50,
        flex: 1,
        textAlign: "center",
    },
    section: {
        marginBottom: 30,
        textDecoration: "underline",
        fontSize: 40,
        width: "100%",
        textAlign: "center",
    },
    containerList: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    list : {
        marginBottom: 20,
        flexDirection: "row",
        display: "flex",
        maxWidth: "100%",
        flexWrap: "wrap",
    },
    case: {
        height: 200,
        width: 200,
        flexDirection: "column",
        display: "flex",
    },
    imgCategorie: {
        height: 200,
        width: 200,
        boder: "solid",
    },
    inputDiv: {
        height: 200,
        width: 200,
        flexDirection: "column",
        display: "flex",
    },
    addButton: {
        position: "absolute",
        alignSelf: "flex-end",
        height: 30,
        width: 30,
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: "#804d00",
        color: "white",
        borderRadius: 20,
        fontSize: 20,
        border: "none",
    },
    delButton: {
        boxShadow: " 0px 0px 5px #353535",
        position: "absolute",
        alignSelf: "flex-end",
        height: 30,
        width: 30,
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: "#804d00",
        color: "white",
        borderRadius: 20,
        fontSize: 20,
        border: "none",
    },
    inputTitle: {
        fontSize: 30,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        textAlign: "center",
        color: "white",
        border: "none",
    },
    inputDesc: {
        marginTop: 10,
        fontSize: 30,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        color: "white",
        border: "none",
        resize: "none",
        flex: 1,
        marginBottom: 5,
    },
    nameDiv:{
        textAlign: "center",
        fontSize: 30,
        marginLeft: 5,
        marginRight: 5,
        border: "none",
    },
    descDiv:{
        fontSize: 30,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        border: "none",
        marginBottom: 5,
        flex: 1,
    },
}