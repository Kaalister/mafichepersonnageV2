import React from 'react';
import background from '../../assets/images/base.jpg';
import marquePage from '../../assets/images/marque_page.png'

export default class BurgerMenu extends React.Component {

    handleChangeDest = (dest) => {
        this.props.setPage(dest);
    }

    render() {
        return( 
            <div id="burgerMenu" style={styles.container} className={this.props.Burger ? "activate":""}>
                <div style={styles.menu}>
                    <div style={styles.list}>
                        <div style={styles.title} className="bigText">Menu :</div>
                        <button style={styles.section} className="bigText" onClick={()=> {this.handleChangeDest("Character")}}>Personnage</button>
                        <button style={styles.section} className="bigText" onClick={()=> {this.handleChangeDest("CharacterSettings")}}>Options Personnage</button>
                        <button style={styles.section} className="bigText" onClick={()=> {this.handleChangeDest("Equipment")}}>Équipement</button>
                        <button style={styles.section} className="bigText" onClick={()=> {this.handleChangeDest("Inventory")}}>Inventaire</button>
                        <button style={styles.section} className="bigText" onClick={()=> {this.handleChangeDest("Tutorial")}}>Tutoriel</button>
                        <button style={styles.section} className="bigText" onClick={()=> {this.handleChangeDest("Settings")}}>Options</button>
                        <div style={{height: 80}} />
                    </div>
                </div>
                    <button style={styles.closeBtn} onClick={()=> {this.props.setBurger(false)}}>
                        <div style={styles.divMenu}>
                            <div style={styles.vertcalText} className="bigText">Close</div>
                        </div>
                    </button>
			</div>
        );
    }
}

const styles = {
    container: {
		position: "absolute",
        left: 0,
        marginLeft: "-100%",
        backgroundColor: "transparent",
        width: "100%",
        minHeight: "100%",
        display: "flex",
    },
    menu: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: 500,
        height: "100%",
        boxShadow: "0px 0px 30px #000000, inset 0px 0px 10px #000000",
    },
    closeBtn: {
        padding: 0,
        height: 200,
        backgroundColor: "transparent",
        border: "none",
    },
    divMenu: {
        backgroundImage: `url(${marquePage})`,
        backgroundRepeat: "no-repeat",
        height: 200,
        width: 50,
    },
    vertcalText: {
        verticalAlign: "middle",
        height: "90%",
        writingMode: "vertical-rl",
        fontSize: 30,
        flex: 1,
    },
    list: {
        marginTop: 100,
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    },
    section: {
        textDecoration: "underline",
        fontSize: 40,
        marginBottom: 30,
        backgroundColor: "transparent",
        border: "none",
        color: "black",
    },
    title: {
        textDecoration: "underline",
        fontSize: 50,
        marginBottom: 40,
    }
}