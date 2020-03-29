import React from 'react';

export default class Inventory extends React.Component {

    state = {
        infos: this.props.infos,
        name: "",
        desc: "",
        number: "",
    }

    handleName = (e) => {
        this.setState({name: e.target.value});
    }

    handleDesc = (e) => {
        this.setState({desc: e.target.value});
        
    }

    handleNum = (e) => {
        this.setState({number: e.target.value});
    }

    handleAddElem = () => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));
        
        if (this.state.name !== "" && this.state.desc !== "" && this.state.number !== "") {
            newinfos.Inventory.push({name: this.state.name, desc: this.state.desc, num: this.state.number});
            this.setState({infos: newinfos, name: "", desc: "", number: ""}, this.props.setInfo(newinfos));
        }
    }

    handleDelElem = (index) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        newinfos.Inventory.splice(index, 1);
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    handleInTab = (event, index, elem) => {
        let newinfos = JSON.parse(JSON.stringify(this.state.infos));

        if (elem === "desc")
            newinfos.Inventory[index].desc = event.target.value;
        else
            newinfos.Inventory[index].num = event.target.value;
        this.setState({infos: newinfos}, this.props.setInfo(newinfos));
    }

    render() {
        let inventory = this.state.infos.Inventory.map((obj, index) => {
            return (
                <div style={styles.tabContainer} key={obj.name + "_" + index}>
                    <div style={styles.nameTab} className="littleText">{obj.name}</div>
                    <input type="text" style={styles.descTab} className="littleText" value={obj.desc} onChange={(e) => {this.handleInTab(e, index, "desc")}}/>
                    <input type="number" style={styles.numTab} className="littleText" value={obj.num} onChange={(e) => {this.handleInTab(e, index, "num")}}/>
                    <button style={styles.delBtn} onClick={() => {this.handleDelElem(index)}}>-</button>
                </div>
            );
        });

        return(
            <div style={styles.container}>
                <div style={styles.section} className="bigText">Inventaire :</div>
                <div style={{flex: 1, display: "flex", width:"100%"}}>
                    <input type="text" style={styles.name} className="littleText" placeholder="Nom de l'object" value={this.state.name} onChange={(e) => {this.handleName(e)}}/>
                    <input type="text" style={styles.desc} className="littleText" placeholder="Description de l'object" value={this.state.desc} onChange={(e) => {this.handleDesc(e)}}/>
                    <input type="number" style={styles.inputNum} className="littleText" placeholder="Nombre" value={this.state.number} onChange={(e) => {this.handleNum(e)}}/>
                    <button style={styles.btn} onClick={() => {this.handleAddElem()}}>+</button>
                </div>
                {inventory}
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
    name: {
        flex: 1,
        maxWidth: 200,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        textAlign: "center",
        color: "white",
        border: "none",
    },
    desc: {
        flex: 1,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "rgba(224, 167, 150, 0.4)",
        boxShadow: "inset 0px 0px 5px #353535",
        textAlign: "center",
        color: "white",
        border: "none",
    },
    inputNum: {
        fontSize: 20,
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
    btn: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 5,
        height: 30,
        width: 30,
        backgroundColor: "#804d00",
        fontSize: 20,
        borderRadius: 20,
        borderColor: "black",
        color: "white",
        fontWeight: "bold",
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
    tabContainer: {
        display: "flex",
    },
    numTab: {
        fontSize: 20,
        maxWidth: 100,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "transparent",
        textAlign: "center",
        border: "solid",
    },
    nameTab: {
        overflowWrap: "break-word",
        flex: 1,
        maxWidth: 200,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "transparent",
        textAlign: "center",
        border: "solid",
    },
    descTab: {
        flex: 1,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "transparent",
        textAlign: "center",
        border: "solid",
    }
}