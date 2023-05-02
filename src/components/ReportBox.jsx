import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


function ReportBox() {
    return (
        <div style={styles.reportContainer}>
            <div style={styles.transection}>
                <div><label style={styles.headtext}>Income</label></div>
                <div style={{ color: '#429065', marginTop: '5px' }} ><FontAwesomeIcon icon={faArrowDown} /> $9,302.00</div>

            </div>
            <div style={styles.lineContainer}>
                <div style={styles.line}>.</div>
            </div>

            <div style={styles.transection}>
                <div ><label style={styles.headtext}>Expense</label></div>
                <div style={{ color: '#C5565D', marginTop: '5px' }}><FontAwesomeIcon icon={faArrowUp} /> $2,790.00</div>

            </div>

        </div>
    )
}

let styles = {
    reportContainer: {
        background: 'white',
        padding: '15px 0px',
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1fr',
        boxShadow: '2px 2px 5px #e1e2e4',
        borderRadius: '5px'
    },
    transection: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '600',
        padding: '0 5px',

    },
    lineContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        width: '100%',
        heigth: '50%',
        background: '#586B79',
        color: 'rgba(0, 0, 0, 0)',
        opacity: '0.1',
    },
    headtext: {
        fontSize: '16px',
        color: '#586B79',
        width: 'fit-content',
        border: '2px solid #ECECEC',
        fontWeight: '400',
        borderRadius: '25px',
        padding: '1px 10px',
        fontWeight: '500',
        letterSpacing: '-1px',
    }
}

export default ReportBox