import React from 'react';

export default class Settings extends React.Component {

    render() {
        return(
            <div style={styles.container}>
                <div style={styles.section} className="bigText">Options :</div>
                <div style={styles.OnWork} className="littleText">En travaux</div>
                <div>Support: samuelcaillot@gmail.com</div>
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
    OnWork: {
        width: "100%",
        fontSize: 50,
        marginBottom: 50,
        marginTop: 50,
    }
}