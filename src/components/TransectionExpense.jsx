import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FaUtensils } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

function TransectionExpense({ trans }) {
    function iconcase(Icon) {
        switch (Icon) {
            case 'food':
                return <FaUtensils />
            case 'shopbag':
                return <AiOutlineShopping />
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
                <div><FontAwesomeIcon icon={faArrowUp} /></div>
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
        color: '#C5565D',
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

export default TransectionExpense