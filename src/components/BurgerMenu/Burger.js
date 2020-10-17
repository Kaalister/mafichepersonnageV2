import React from 'react';

export default class BurgerMenu extends React.Component {

    handleChangeDest = (dest) => {
        this.props.setPage(dest);
    }

    render() {
        let hrefClass = "bigText underpart-title invisible-button clickable";
        let burgerContainerClass = "burgermenu-container";
        let burgerOverlayClass = "burgermenu-overlay"

        let currentPage = document.getElementById("current-page");
        let totalHeight = "100%";
        if ( null !== currentPage ) {
            totalHeight = currentPage.clientHeight + "px";
        }

        console.log(totalHeight)
        if (this.props.Burger) {
            burgerContainerClass += " activate";
            burgerOverlayClass = "activate " + burgerOverlayClass;
        }
        return(
            <div style={{position: "absolute"}}>
                <div className={burgerOverlayClass}/>
                <div
                 id="burgerMenu"
                 className={burgerContainerClass}
                >
                    <div className="burgermenu">
                        <div className="burgermenu-list-menu">
                            <div className="bigText section-title">
                                Menu
                            </div>
                            <button
                             className={hrefClass}
                             onClick={()=> {this.handleChangeDest("Character")}}
                            >
                                Personnage
                            </button>
                            <button
                             className={hrefClass}
                             onClick={()=> {this.handleChangeDest("CharacterSettings")}}
                            >
                                Options Personnage
                            </button>
                            <button
                             className={hrefClass}
                             onClick={()=> {this.handleChangeDest("Equipment")}}
                            >
                                Équipement
                            </button>
                            <button
                             className={hrefClass}
                             onClick={()=> {this.handleChangeDest("Inventory")}}
                            >
                                Inventaire
                            </button>
                            <button
                             className={hrefClass}
                             onClick={()=> {this.handleChangeDest("Tutorial")}}
                            >
                                Tutoriel
                            </button>
                            <button
                             className={hrefClass}
                             onClick={()=> {this.handleChangeDest("Settings")}}
                            >
                                Options
                            </button>
                        </div>
                    </div>
                    <button
                     className="exit-burgermenu"
                     onClick={()=> {this.props.setBurger(false)}}
                    >
                        <div>
                            <div className="bigText">
                                Close
                            </div>
                        </div>
                    </button>
			    </div>
            </div> 
        );
    }
}