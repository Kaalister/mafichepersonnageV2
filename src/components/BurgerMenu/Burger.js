import React from 'react';
import background from '../../assets/images/base.jpg';
import marquePage from '../../assets/images/marque_page.png'

export default class BurgerMenu extends React.Component {

    handleChangeDest = (dest) => {
        this.props.setPage(dest);
    }

    render() {
        let hrefClass = "bigText underpart-title invisible-button clickable";
        let burgerContainerClass = "burgermenu-container";

        if (this.props.Burger) burgerContainerClass += " activate";


        return( 
            <div
             id="burgerMenu"
             className={burgerContainerClass}
            >
                <div className="burgermenu">
                    <div className="burgermenu-list-menu">
                        <div className="bigText section-title">
                            Menu :
                        </div>
                        <button
                            className={hrefClass}
                            onClick={()=> {this.handleChangeDest("Character")}}
                        >
                            Personnage
                        </button>
                        <button
                         className={hrefClass}
                         onClick={()=> {
                            this.handleChangeDest("CharacterSettings")
                         }}
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
        );
    }
}