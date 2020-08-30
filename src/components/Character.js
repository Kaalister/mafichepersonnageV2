import React from 'react';

export default class Character extends React.Component {

    state = {
        infos: this.props.infos,
    }

    handleNotes = (note) => {
        let newinfos = {...this.state.infos};

        newinfos.Character.note = note.target.value;
        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    handleTab = (tab, event, index, name) => {
        let newinfos = {...this.state.infos};
        let characState = this.state.infos.CharacterSettings.characteristic;
        let statState = this.state.infos.CharacterSettings.statistic;

        if (tab === "carac" && event - characState[index].val <= 0)
            newinfos.Character.characteristic[index] = {
                name: name,
                val: event - characState[index].val
            };
        if (tab === "stat")
            newinfos.Character.statistic[index] = {
                name: name,
                val: event - statState[index].val
            };

        this.setState({ infos: newinfos }, this.props.setInfo(newinfos));
    }

    render() {
        let image = require("../assets/images/avatar.jpg");
        let caracState = this.state.infos.Character.characteristic;
        let caracStateSettings = this.state.infos.CharacterSettings.characteristic;
        let competenceState = this.state.infos.CharacterSettings.skill;
        let statState = this.state.infos.Character.statistic;
        let statStateSettings = this.state.infos.CharacterSettings.statistic;
        let caracteristiques, competences, stats;

        if (this.state.infos.CharacterSettings.avatar !== "")
            image = this.state.infos.CharacterSettings.avatar;
        
        caracteristiques = caracState.map((obj, index) => {
            return (
                    <div className="row" key={obj.name + "_" + index}>
                        <div className="littleText tab-case">
                            <div className="underline">
                                - {obj.name} :
                            </div>
                            <input
                             type="number"
                             className="littleText tab-input-nb no-underline"
                             value={obj.val + caracStateSettings[index].val}
                             onChange={(e) => {
                                this.handleTab("carac", e.target.value, index, obj.name)
                             }}
                            /> 
                        </div>
                    </div>
                );
        });

        competences = competenceState.map((obj, index) => {
            return (
                    <div className="column" key={obj.name + "_" + index}>
                        <div className="littleText tab-case underline">
                            - {obj.name} : 
                        </div>
                        <div className="littleText tab-desc">
                            {obj.desc} 
                        </div>
                    </div>
                );
        });

        stats = statState.map((obj, index) => {
            return (
                <div className="row" key={obj.name + "_" + index}>
                <div className="littleText tab-case">
                    <div className="underline">
                        - {obj.name} :
                    </div>
                    <input
                     type="number"
                     className="littleText tab-input-nb"
                     value={obj.val + statStateSettings[index].val}
                     onChange={(e) => {
                        this.handleTab("stat", e.target.value, index, obj.name)
                     }}
                    /> 
                </div>
            </div>
                );
        });

        return(
            <div className="container wrapped row">
                <div className="bigText section-title">Personnage :</div>

                <div>
                    <div className="flex-1 row character-charac-picture-div">
                        <img
                         src={image}
                         alt=""
                         className="character-charac-picture"
                        />

                        <div className="character-desc-div">
                            <div className="d-flex">
                                <div className="littleText character-charac-text">
                                    {this.state.infos.CharacterSettings.firstName}
                                </div>
                                <div className="littleText character-charac-text">
                                    {this.state.infos.CharacterSettings.lastName}
                                </div>
                            </div>
                            <div  className="littleText character-charac-text">
                                {this.state.infos.CharacterSettings.work}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bigText underpart-title text-left">
                            Caractéristiques :
                        </div>
                        {caracteristiques}
                    </div>
                </div>

                <div className="flex-1 character-skills-div text-left">
                    <div className="bigText underpart-title">Compétences :</div>
                    {competences}
                </div>

                <div className="full-width text-left">
                    <div className="bigText underpart-title">Biographie :</div>
                    <div className="littleText character-charac-longtext">
                        {this.state.infos.CharacterSettings.bio}
                    </div>
                </div>
                <div className="full-width">
                    <div className="bigText underpart-title text-left">
                        Statistiques :
                    </div>
                    {stats}
                </div>
                <div className="full-width text-left" style={{marginBottom: 100}}>
                    <div className="bigText underpart-title">Notes :</div>
                    <textarea
                     className="littleText character-charac-longtext"
                     value={this.state.infos.Character.note}
                     onChange={(e) => {this.handleNotes(e)}}/>
                </div>
            </div>
        )
    }
}