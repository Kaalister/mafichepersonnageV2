import React from 'react';

export default class Equipment extends React.Component {

    state = {
        infos: this.props.infos,
    }

    render() {
        return(
            <div style={styles.container}>
                <div style={styles.section}>Équipement :</div>
                <div style={styles.OnWork}>En Travaux</div>
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
        fontFamily: "UnifrakturMaguntia",
        fontSize: 40,
        width: "100%",
        textAlign: "center",
    },
    OnWork: {
        fontFamily: "'Merienda One', cursive",
        width: "100%",
        fontSize: 50,
        marginBottom: 50,
        marginTop: 50,
    }
}