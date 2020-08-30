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

    handleInputEquipment = (type, source, text) => {
        let equipment = {...this.state[type]}

        equipment[source] = text;

        this.setState({[type]: equipment});
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
                if (this.state.foot.name === "" || this.state.foot.desc === "")
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

    createEquipementInput = (type, img, value, listElem) => {
        return (
            <div className="equipment-container-list">
                <div className="row equipment-input-container-w-img">
                    <div className="equipment-img-container">
                        <img
                         src={img}
                         alt=""
                         className="equipment-img"
                         />
                    </div>
                    <div className="equipment-input-container">
                        <div className="row">
                            <input
                             className="littleText equipment-input-name"
                             onChange={(e) => {
                                this.handleInputEquipment(type, "name", e.target.value)
                             }}
                             value={value.name}
                             placeholder="Name"
                             />
                            <button
                             className="little-circle-button add-button"
                             onClick={() => {this.addEquipment(type)}}>
                                +
                            </button>
                        </div>
                        <textarea
                         className="littleText equipment-input-desc"
                         onChange={(e) => {
                            this.handleInputEquipment(type, "desc", e.target.value)
                         }}
                         value={value.desc}
                         placeholder="Description"
                        />
                    </div>
                </div>
                <div className="equiped-equipement-list row flex-1">
                    {listElem}
                </div>
            </div>
        )
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
                    {this.createEquipementInput("headset", headsetImg, this.state.headset, headsets)}

                    {/* plastron */}
                    {this.createEquipementInput("plastron", plastronImg, this.state.plastron, plastrons)}

                    {/* hand */}
                    {this.createEquipementInput("hand", handImg, this.state.hand, hands)}

                    {/* pant */}
                    {this.createEquipementInput("pants", pantImg, this.state.pants, pants)}
                    
                    {/* foot */}
                    {this.createEquipementInput("foot", footImg, this.state.foot, foots)}
                    
                    {/* weapon */}
                    {this.createEquipementInput("weapon", weaponImg, this.state.weapon, weapons)}

                </div>
            </div>
        )
    }
}