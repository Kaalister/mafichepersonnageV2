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
        headset: { name: "", desc: "" },
        plastron: { name: "", desc: "" },
        hand: { name: "", desc: "" },
        pants: { name: "", desc: "" },
        foot: { name: "", desc: "" },
        weapon: { name: "", desc: "" },
    }

    handleInputHeadset = (source, text) => {
        let headset = {...this.state.headset};

        headset[source] = text;

        this.setState({headset: headset})
    }
    
    handleInputPlastron = (source, text) => {
        let plastron = {...this.state.plastron};

        plastron[source] = text;

        this.setState({plastron: plastron})
    }

    handleInputHand = (source, text) => {
        let hand = {...this.state.hand};

        hand[source] = text;

        this.setState({hand: hand})
    }

    handleInputPants = (source, text) => {
        let pants = {...this.state.pants};

        pants[source] = text;

        this.setState({pants: pants})
    }

    handleInputFoot = (source, text) => {
        let foot = {...this.state.foot};

        foot[source] = text;

        this.setState({foot: foot});
    }

    handleInputWeapon = (source, text) => {
        let weapon = {...this.state.weapon};

        weapon[source] = text;

        this.setState({weapon: weapon});
    }

    delEquipment = (source, id) => {
        let copy = {...this.state.infos};
        let index = -1;
        
        switch (source) {
            case "headset":
                index = copy.Equipment.head.findIndex(elem => {return id === elem.id})
                if ( -1 === index) return;
                copy.Equipment.head.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "plastron":
                index = copy.Equipment.trunk.findIndex(elem => {return id === elem.id})
                if ( -1 === index) return;
                copy.Equipment.trunk.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "pants":
                index = copy.Equipment.legs.findIndex(elem => {return id === elem.id})
                if ( -1 === index) return;
                copy.Equipment.legs.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "hand":
                index = copy.Equipment.hands.findIndex(elem => {return id === elem.id})
                if ( -1 === index) return;
                copy.Equipment.hands.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "foot":
                index = copy.Equipment.foots.findIndex(elem => {return id === elem.id})
                if ( -1 === index) return;
                copy.Equipment.foots.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            case "weapon":
                index = copy.Equipment.weapon.findIndex(elem => {return id === elem.id})
                if ( -1 === index) return;
                copy.Equipment.weapon.splice(index, 1);
                this.setState({infos: copy}, this.props.setInfo(copy));
                break;
            default:
                break;
        }
    }

    addEquipment = (source) => {
        let copy = {...this.state.infos};
        
        switch (source) {
            case "headset":
                if (this.state.headset.name === "" ||
                    this.state.headset.desc === "")
                    return;
                copy.Equipment.head.push({
                    name: this.state.headset.name,
                    desc: this.state.headset.desc,
                    id: Date.now()
                });
                this.setState({
                    infos: copy,
                    headset: { name: "", desc: "" }
                }, this.props.setInfo(copy));
                break;
            case "plastron":
                if (this.state.plastron.name === "" ||
                    this.state.plastron.desc === "")
                    return;
                copy.Equipment.trunk.push({
                    name: this.state.plastron.name,
                    desc: this.state.plastron.desc,
                    id: Date.now()
                });
                this.setState({
                    infos: copy,
                    plastron: {name: "", desc: ""}
                }, this.props.setInfo(copy));
                break;
            case "pants":
                if (this.state.pants.name === "" ||
                    this.state.pants.desc === "")
                    return;
                copy.Equipment.legs.push({
                    name: this.state.pants.name,
                    desc: this.state.pants.desc,
                    id: Date.now()
                });
                this.setState({
                    infos: copy, 
                    pants: {name: "", desc: ""}
                }, this.props.setInfo(copy));
                break;
            case "hand":
                if (this.state.hand.name === "" || this.state.hand.desc === "")
                    return;
                copy.Equipment.hands.push({
                    name: this.state.hand.name,
                    desc: this.state.hand.desc,
                    id: Date.now()
                });
                this.setState({
                    infos: copy,
                    hand: { name: "", desc: "" }
                }, this.props.setInfo(copy));
                break;
            case "foot":
                if (this.state.foot.name === "" || this.state.foot.desc == "")
                    return;
                copy.Equipment.foots.push({
                    name: this.state.foot.name,
                    desc: this.state.foot.desc,
                    id: Date.now()
                });
                this.setState({
                    infos: copy,
                    foot: { name: "", desc: "" }
                }, this.props.setInfo(copy));
                break;
            case "weapon":
                if (this.state.weapon.name === "" ||
                    this.state.weapon.desc === "")
                    return;
                copy.Equipment.weapon.push({
                    name: this.state.weapon.name,
                    desc: this.state.weapon.desc,
                    id: Date.now()
                });
                this.setState({
                    infos: copy,
                    weapon: { name: "", desc: "" }
                }, this.props.setInfo(copy));
                break;
            default:
                break;
        }
    }

    render() {
        let headsets = this.state.infos.Equipment.head.map(elem => {
            return (
                <div key={elem.id} className="equipment-item-cel">
                    <div className="row">
                        <div className="littleText equipment-name">
                            {elem.name}
                        </div>
                        <button
                         className="little-circle-button del-button"
                         onClick={() => {
                            this.delEquipment("headset", elem.id)
                        }}>
                            -
                        </button>
                    </div>
                    <div className="littleText equipment-desc">{elem.desc}</div>
                </div>
            )
        });
        let plastrons = this.state.infos.Equipment.trunk.map(elem => {
            return (
                <div key={elem.id} className="equipment-item-cel">
                    <div className="row">
                        <div className="littleText equipment-name">
                            {elem.name}
                        </div>
                        <button
                         className="little-circle-button del-button"
                         onClick={() => {
                            this.delEquipment("plastron", elem.id)
                        }}>
                            -
                        </button>
                    </div>
                    <div className="littleText equipment-desc">{elem.desc}</div>
                </div>
            )
        });
        let hands = this.state.infos.Equipment.hands.map(elem => {
            return (
                <div key={elem.id} className="equipment-item-cel">
                    <div className="row">
                        <div className="littleText equipment-name">
                            {elem.name}
                        </div>
                        <button
                         className="little-circle-button del-button"
                         onClick={() => {
                            this.delEquipment("hand", elem.id)
                        }}>
                            -
                        </button>
                    </div>
                    <div className="littleText equipment-desc">{elem.desc}</div>
                </div>
            )
        });
        let pants = this.state.infos.Equipment.legs.map(elem => {
            return (
                <div key={elem.id} className="equipment-item-cel">
                    <div className="row">
                        <div className="littleText equipment-name">
                            {elem.name}
                        </div>
                        <button
                         className="little-circle-button del-button"
                         onClick={() => {
                            this.delEquipment("pants", elem.id)
                        }}>
                            -
                        </button>
                    </div>
                    <div className="littleText equipment-desc">{elem.desc}</div>
                </div>
            )
        });
        let foots = this.state.infos.Equipment.foots.map(elem => {
            return (
                <div key={elem.id} className="equipment-item-cel">
                    <div className="row">
                        <div className="littleText equipment-name">
                            {elem.name}
                        </div>
                        <button
                         className="little-circle-button del-button"
                         onClick={() => {
                            this.delEquipment("foot", elem.id)
                        }}>
                            -
                        </button>
                    </div>
                    <div className="littleText equipment-desc">{elem.desc}</div>
                </div>
            )
        });
        let weapons = this.state.infos.Equipment.weapon.map(elem => {
            return (
                <div key={elem.id} className="equipment-item-cel">
                    <div className="row">
                        <div className="littleText equipment-name">
                            {elem.name}
                        </div>
                        <button
                         className="little-circle-button del-button"
                         onClick={() => {this.delEquipment("weapon", elem.id)}}
                        >
                            -
                        </button>
                    </div>
                    <div className="littleText equipment-desc">{elem.desc}</div>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="bigText section-title">Équipement :</div>
                <div className="column">

                    {/* head */}
                    <div className="equipment-container-list">
                        <div className="equipment-img-container">
                            <img
                                src={headsetImg}
                                alt=""
                                className="equipment-img"
                                />
                        </div>
                        <div className="equipment-input-container">
                            <div className="row">
                                <input
                                 className="littleText equipment-input-name"
                                 onChange={(e) => {
                                    this.handleInputHeadset("name", e.target.value)
                                 }}
                                 value={this.state.headset.name}
                                 placeholder="Name"
                                />
                                <button
                                 className="little-circle-button add-button"
                                 onClick={() => {this.addEquipment("headset")}}>
                                    +
                                </button>
                            </div>
                            <textarea
                             className="littleText equipment-input-desc"
                             onChange={(e) => {
                                this.handleInputHeadset("desc", e.target.value)
                             }}
                             value={this.state.headset.desc}
                             placeholder="Description"
                            />
                        </div>
                        {headsets}
                    </div>

                    {/* plastron */}
                    <div className="equipment-container-list">
                        <div className="equipment-img-container">
                            <img
                             src={plastronImg}
                             alt=""
                             className="equipment-img"
                            />
                        </div>
                        <div className="equipment-input-container">
                            <div className="row">
                                <input
                                 className="littleText equipment-input-name"
                                 onChange={(e) => {
                                    this.handleInputPlastron("name", e.target.value)
                                 }}
                                 value={this.state.plastron.name}
                                 placeholder="Name"
                                />
                                <button
                                 className="little-circle-button add-button"
                                 onClick={() => {this.addEquipment("plastron")}}
                                >
                                    +
                                </button>
                            </div>
                            <textarea
                             className="littleText equipment-input-desc"
                             onChange={(e) => {
                                this.handleInputPlastron("desc", e.target.value)
                             }}
                             value={this.state.plastron.desc}
                             placeholder="Description"
                            />
                        </div>
                        {plastrons}
                    </div>

                    {/* hand */}
                    <div className="equipment-container-list">
                        <div className="equipment-img-container">
                            <img
                             src={handImg}
                             alt=""
                             className="equipment-img"
                            />
                        </div>
                        <div className="equipment-input-container">
                            <div className="row">
                                <input
                                 className="littleText equipment-input-name"
                                 onChange={(e) => {
                                    this.handleInputHand("name", e.target.value)
                                 }} 
                                 value={this.state.hand.name} 
                                 placeholder="Name"
                                />
                                <button
                                 className="little-circle-button add-button"
                                 onClick={() => {this.addEquipment("hand")}}
                                >
                                    +
                                </button>
                            </div>
                            <textarea
                             className="littleText equipment-input-desc"
                             onChange={(e) => {
                                this.handleInputHand("desc", e.target.value)
                             }}
                             value={this.state.hand.desc}
                             placeholder="Description"
                            />
                        </div>
                        {hands}
                    </div>

                    {/* pant */}
                    <div className="equipment-container-list">
                        <div className="equipment-img-container">
                            <img
                             src={pantImg}
                             alt=""
                             className="equipment-img"
                            />
                        </div>
                        <div className="equipment-input-container">
                            <div className="row">
                                <input
                                 className="littleText equipment-input-name"
                                 onChange={(e) => {
                                    this.handleInputPants("name", e.target.value)
                                 }}
                                 value={this.state.pants.name}
                                 placeholder="Name"
                                />
                                <button
                                 className="little-circle-button add-button" 
                                 onClick={() => {this.addEquipment("pants")}}
                                >
                                    +
                                </button>
                            </div>
                            <textarea
                             className="littleText equipment-input-desc"
                             onChange={(e) => {
                                this.handleInputPants("desc", e.target.value)
                             }}
                             value={this.state.pants.desc}
                             placeholder="Description"
                            />
                        </div>
                        {pants}
                    </div>

                    {/* foot */}
                    <div className="equipment-container-list">
                        <div className="equipment-img-container">
                            <img
                            src={footImg}
                             alt=""
                             className="equipment-img"
                            />
                        </div>
                        <div className="equipment-input-container">
                            <div className="row">
                                <input
                                 className="littleText equipment-input-name"
                                 onChange={(e) => {
                                    this.handleInputFoot("name", e.target.value)
                                 }}
                                 value={this.state.foot.name}
                                 placeholder="Name"
                                />
                                <button
                                 className="little-circle-button add-button"
                                 onClick={() => {this.addEquipment("foot")}}
                                >
                                    +
                                </button>
                            </div>
                            <textarea
                             className="littleText equipment-input-desc"
                             onChange={(e) => {
                                this.handleInputFoot("desc", e.target.value)
                             }}
                             value={this.state.foot.desc}
                             placeholder="Description"
                            />
                        </div>
                        {foots}
                    </div>

                    {/* weapon */}
                    <div className="equipment-container-list">
                        <div className="equipment-img-container">
                            <img
                             src={weaponImg}
                             alt=""
                             className="equipment-img"
                            />
                        </div>
                        <div className="equipment-input-container">
                            <div className="row">
                                <input
                                 className="littleText equipment-input-name"
                                 onChange={(e) => {
                                    this.handleInputWeapon("name", e.target.value)
                                 }}
                                 value={this.state.weapon.name}
                                 placeholder="Name"
                                />
                                <button
                                 className="little-circle-button add-button"
                                 onClick={() => {this.addEquipment("weapon")}}
                                >
                                    +
                                </button>
                            </div>
                            <textarea
                             className="littleText equipment-input-desc"
                             onChange={(e) => {
                                this.handleInputWeapon("desc", e.target.value)
                             }}
                             value={this.state.weapon.desc}
                             placeholder="Description"
                            />
                        </div>
                        {weapons}
                    </div>

                </div>
            </div>
        )
    }
}