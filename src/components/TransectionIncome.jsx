import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { RiHandCoinLine } from "react-icons/ri";
import { CiCoins1 } from "react-icons/ci";

function TransectionIncome({ trans }) {
    function iconcase(Icon) {
        switch (Icon) {
            case 'dollar':
                return <RiHandCoinLine />
            case 'coin':
                return <CiCoins1 />
            default:
                break;
        }
    }
    return (
        <div style={styles.Container}>
            <div style={styles.icon}>
                {iconcase(trans.icon)}
            </div>
            <div>
                <div style={styles.subject}> {trans?.subject}</div>
                <div style={styles.date}>{trans?.date}</div>
            </div>
            <div style={styles.amountContainer}>
                <div style={{paddingRight:'5px'}}>{trans?.amount}</div>
                <div><FontAwesomeIcon icon={faArrowDown} /></div>
            </div>
        </div>
    )
}

let styles = {
    Container: {
        background: 'white',
        padding: '15px 0',
        paddingRight: '15px',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 2fr',
        boxShadow: '2px 2px 5px #e1e2e4',
        borderRadius: '5px'
    },
    icon: {
        fontSize: '30px',
        paddingLeft: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#323B3F'
    },
    amountContainer: {
        color: '#429065',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        fontWeight: '500',
    },
    subject: {
        fontSize: '18px',
        fontWeight: '400',
        fontWeight: '500',
        letterSpacing: '-1px',
        lineHeight:'18px',
    },
    date: {
        color: '#586B79',
        opacity: '0.5',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight:'12px',
        display: 'flex',
        marginTop:'5px',
        alignItems: 'center',
    }

}

export default TransectionIncome