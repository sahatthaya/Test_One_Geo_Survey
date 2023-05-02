import { Typography } from '@mui/material'
import React from 'react'

import { BsCalendar4Event } from "react-icons/bs";
import { RiBarChartFill } from "react-icons/ri";
import ReportBox from '../components/reportBox';
import TransectionIncome from '../components/TransectionIncome';
import TransectionExpense from '../components/TransectionExpense';
import VisaCard from '../components/VisaCard';

import Flickity from 'react-flickity-component';
import "../styles/flickity.css";

const transectionDetails = [
    { id: 1, subject: 'Resturant Manhattan', date: 'June 10, 2018', amount: '$170', type: 'expense', icon: 'food' },
    { id: 2, subject: 'Salary Deposit', date: 'June 1, 2018', amount: '$1,200', type: 'income', icon: 'dollar' },
    { id: 3, subject: 'Cantral Market', date: 'May 28, 2018', amount: '$50', type: 'expense', icon: 'shopbag' },
    { id: 4, subject: 'Salary Deposit', date: 'May 1, 2018', amount: '$1,200', type: 'income', icon: 'coin' },
];


function VisaCard1() {
    const flickityOptions = {
        initialIndex: 1
    }
    return (
        <div style={styles.container}>
            <Typography variant='h4' style={{ textAlign: 'center' }}>Visa Card (1)</Typography>
            <div style={styles.screenContainer}>
                <div style={styles.screen}>
                    <div style={styles.headerContainer}>
                        <div style={styles.header}>
                            All my accounts
                        </div>
                        <div style={styles.header}>
                            <RiBarChartFill />
                        </div>
                    </div>
                    <span style={styles.textspan}>
                        June 10, 2018
                    </span>
                    <div style={{margin:'20px 0'}}>
                        <Flickity className={'carousel'} options={flickityOptions} >
                            <div class="carousel-cell">
                                <VisaCard />
                            </div>
                            <div class="carousel-cell">
                                <VisaCard />
                            </div>
                            <div class="carousel-cell">
                                <VisaCard />
                            </div>
                        </Flickity>
                    </div>
                    <div style={{marginTop:'50px'}} >
                        <ReportBox />
                    </div>
                    <div style={{ ...styles.headerContainer, ...styles.boxDistance }}>
                        <div style={styles.headerDetail}>
                            Detail of movements
                        </div>
                        <div style={styles.headerDetail}>
                            <BsCalendar4Event style={{ strokeWidth: '1', transform: 'scaleX(-1)' }} />
                        </div>
                    </div>
                    {transectionDetails.map((transectionDetail) => (
                        <div key={transectionDetail.id} style={{ margin: '12px 0' }}>
                            {transectionDetail.type === 'income' ? <TransectionIncome trans={transectionDetail} /> : <TransectionExpense trans={transectionDetail} />}
                        </div>
                    ))}
                </div>
            </div>

        </div >
    )
}


let styles = {
    container: {
        paddingTop: '100px'
    },
    screenContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px'
    },

    // visa screen
    screen: {
        width: '390px',
        maxWidth: '390px',
        background: '#F5F6F8',
        padding: '20px 20px'
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
    textspan: {
        color: '#586B79',
        opacity: '0.5',
        fontWeight: '400',
        fontSize: '16px'
    },
    headerDetail: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#586B79',
    },
    boxDistance: {
        marginTop: '24px'
    }
}

export default VisaCard1