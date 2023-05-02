import { Typography } from '@mui/material'
import React from 'react'

import { IoIosArrowDown, IoMdArrowDropright } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";
import { BsCalendar4Event } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import ReportBox from '../components/reportBox';
import TransectionIncome from '../components/TransectionIncome';
import TransectionExpense from '../components/TransectionExpense';

const transectionDetails = [
    { id: 1, subject: 'Resturant Manhattan', date: 'June 10, 2018', amount: '$170', type: 'expense', icon: 'food' },
    { id: 2, subject: 'Salary Deposit', date: 'June 1, 2018', amount: '$1,200', type: 'income', icon: 'dollar' },
    { id: 3, subject: 'Cantral Market', date: 'May 28, 2018', amount: '$50', type: 'expense', icon: 'shopbag' },
    { id: 4, subject: 'Salary Deposit', date: 'May 1, 2018', amount: '$1,200', type: 'income', icon: 'coin' },
    { id: 5, subject: 'Cantral Market', date: 'June 1, 2018', amount: '$37', type: 'expense', icon: 'shopbag' },
];


function VisaCard2() {
    return (
        <div style={styles.container}>
            <Typography variant='h4' style={{ textAlign: 'center' }}>Visa Card (2)</Typography>
            <div style={styles.screenContainer}>
                <div style={styles.screen}>
                    <div style={{ ...styles.cardContainer }}>
                        <div style={styles.headerContainer}>
                            <div style={{ ...styles.header, color: 'white' }}>
                                <RiBarChartFill style={{ transform: 'rotate(90deg)' }} />
                            </div>
                            <div style={{ ...styles.header, color: 'white' }}>
                                <BsCalendar4Event style={{ strokeWidth: '1', transform: 'scaleX(-1)' }} />
                            </div>
                        </div>

                        <div style={{ fontSize: '12px', color: '#96B9A8', textAlign: 'center' }}>
                            Available Balance
                        </div>

                        <div style={{ fontSize: '35px', color: 'white', textAlign: 'center' }}>
                            <BiDollar style={{ fontSize: '15px', textAlign: 'center', background: '#031F37', borderRadius: '100%', padding: '3px' }} /> 7,392.00
                        </div>
                        <div style={{ fontSize: '12px', color: '#7B94B6', textAlign: 'center' }}>
                            June 9, 2018
                        </div>

                        <div style={{ ...styles.cardInfo, margin: '15px 10px' }}>
                            <div style={{ fontSize: '22px', display: 'flex', justifyContent: 'space-between', color: '#9DB2C7', fontWeight: '400' }}>
                                <span>4201</span> <span>3049</span><span>2800</span><span>9815</span>
                            </div>
                            <div style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between', color: 'white', opacity: '0.7', fontWeight: '400' }}>
                                <div>EXPIRE <IoMdArrowDropright style={{ alignItems: 'center', marginRight: '2px' }} /><span style={{ fontSize: '14px' }}>02/22</span></div> <div>CVC CODE <IoMdArrowDropright style={{ alignItems: 'center', marginRight: '2px' }} /><span style={{ fontSize: '14px' }}>230</span></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '0 20px' }}>
                        <div style={{ ...styles.boxDistance, marginTop: '-45px' }} >
                            <ReportBox />
                        </div>
                        <div style={{ ...styles.headerContainer, ...styles.boxDistance }}>
                            <div style={styles.headerDetail}>
                                Detail of movements
                            </div>
                            <div style={{ ...styles.headerDetail, display: 'flex', alignItems: 'center' }}>
                                <div style={{ fontSize: '12px', marginRight: '5px', color: '#8C8D8F' }}>Weekly</div>  <IoIosArrowDown />
                            </div>
                        </div>
                        {transectionDetails.map((transectionDetail) => (
                            <div key={transectionDetail.id} style={{ margin: '12px 0' }}>
                                {transectionDetail.type === 'income' ? <TransectionIncome trans={transectionDetail} /> : <TransectionExpense trans={transectionDetail} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}


let styles = {
    container: {
        paddingTop: '100px',
        minHeight: '120vh'
    },
    screenContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
    },

    // visa screen
    screen: {
        width: '390px',
        maxWidth: '390px',
        height: 'fit-content',
        background: '#F5F6F8',
    },
    cardContainer: {
        padding: '20px',
        height: '250px',
        background: 'linear-gradient(to left top, #0f2233, #1b3145, #274157, #33516a, #40627e)'
    },
    cardInfo: {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur( 14.5px )',
        borderRadius: '5px',
        padding: '10px',
        color: 'white'
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: '22px',
        fontWeight: '600',
        color: '#586B79',
    },
    headerDetail: {
        fontSize: '18px',
        fontWeight: '400',
        color: '#586B79',
    },
    boxDistance: {
        marginTop: '24px'
    }
}

export default VisaCard2