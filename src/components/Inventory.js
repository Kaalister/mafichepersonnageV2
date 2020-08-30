import React from 'react';

export default class Inventory extends React.Component {

    state = {
        infos: this.props.infos,
        name: "",
        desc: "",
        number: "",
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleDesc = (e) => {
        this.setState({ desc: e.target.value });
        
    }

    handleNum = (e) => {
        this.setState({ number: e.target.value });
    }

    handleAddElem = () => {
        let newinfos = {...this.state.infos};
        
        if (this.state.name !== "" &&
            this.state.desc !== "" &&
            this.state.number !== "") {
            newinfos.Inventory.push({
                name: this.state.name,
                desc: this.state.desc,
                num: this.state.number
            });
            this.setState({
                infos: newinfos,
                name: "",
                desc: "",
                number: ""
            }, this.props.setInfo(newinfos));
        }
    }

    handleDelElem = (index) => {
        let newinfos = {...this.state.infos};

        newinfos.Inventory.splice(index, 1);
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleInTab = (event, index, elem) => {
        let newinfos = {...this.state.infos};

        if (elem === "desc")
            newinfos.Inventory[index].desc = event.target.value;
        else
            newinfos.Inventory[index].num = event.target.value;
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    render() {
        let inventory = this.state.infos.Inventory.map((obj, index) => {
            return (
                <div className="row" key={obj.name + "_" + index}>
                    <input
                     className="littleText inventory-tab-cel inventory-name-cel"
                     type="text"
                     value={obj.name}
                     readOnly
                    />
                    <textarea
                     type="text"
                     className="littleText inventory-tab-cel inventory-desc-cel"
                     value={obj.desc}
                     onChange={(e) => { this.handleInTab(e, index, "desc") }}
                     style={{
                        resize: "none"
                     }}
                    />
                    <input
                     type="number"
                     className="littleText inventory-tab-cel inventory-num-cel"
                     value={obj.num}
                     onChange={(e) => { this.handleInTab(e, index, "num") }}
                    />
                    <button
                     className="little-circle-button del-button"
                     onClick={() => {this.handleDelElem(index)}}
                    >
                        -
                    </button>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="bigText section-title">Inventaire :</div>
                <div className="flex-1 d-flex inventory-form">
                    <input
                     type="text"
                     className="littleText inventory-input inventory-name"
                     placeholder="Nom de l'object" value={this.state.name}
                     onChange={(e) => { this.handleName(e) }}
                    />
                    <input
                     type="text"
                     className="littleText inventory-input"
                     placeholder="Description de l'object"
                     value={this.state.desc}
                     onChange={(e) => { this.handleDesc(e) }}
                    />
                    <input
                     type="number"
                     className="littleText inventory-input inventory-num"
                     placeholder="Nombre"
                     value={this.state.number}
                     onChange={(e) => { this.handleNum(e) }}
                    />
                    <button
                     className="little-circle-button add-button"
                     onClick={() => { this.handleAddElem() }}>
                        +
                    </button>
                </div>
                <div className="inventory-list-container">
                    {inventory}
                </div>
            </div>
        )
    }
}