import React from 'react'
import { RiVisaLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { FcSimCardChip } from "react-icons/fc";
import { IoMdArrowDropright } from "react-icons/io";

function VisaCard() {
  return (
    <div style={styles.cardContainer}>
      <RiVisaLine style={{ fontSize: '50px', color: 'white' }} />
      <div style={{ ...styles.gridContainer, marginTop: '-10px' }}>
        <div>
          <FcSimCardChip style={{ fontSize: '50px', marginTop: '18px' }} />
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#96B9A8', textAlign: 'end' }}>
            Available Balance
          </div>
          <div style={{ fontSize: '25px', color: 'white', display: 'flex', justifyContent: 'end', }}>
            <div>
              <BiDollar style={{ marginRight: '10px', fontSize: '15px', textAlign: 'center', background: '#031F37', borderRadius: '100%', padding: '3px', alignItems: 'center', }} />
            </div>
            <div style={{ textAlign: 'end'}}>
              7,392.00
            </div>
          </div>
        </div>
      </div>
      <div style={{ ...styles.cardInfo, marginTop: '-5px' }}>
        <div style={{ fontSize: '22px', display: 'flex', justifyContent: 'space-between', color: '#9DB2C7', fontWeight: '400' }}>
          <span>4201</span> <span>3049</span><span>2800</span><span>9815</span>
        </div>
        <div style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between', color: 'white', opacity: '0.7', fontWeight: '400', marginTop: '5px' }}>
          <div>EXPIRE <IoMdArrowDropright style={{ alignItems: 'center', marginRight: '2px' }} /><span style={{ fontSize: '14px' }}>02/22</span></div> <div>CVC CODE <IoMdArrowDropright style={{ alignItems: 'center', marginRight: '2px' }} /><span style={{ fontSize: '14px' }}>230</span></div>
        </div>
      </div>
    </div>
  )
}
let styles = {
  cardContainer: {
    width: '300px',
    height: '200px',
    background: 'linear-gradient(to left top, #0f2233, #1b3145, #274157, #33516a, #40627e)',
    borderRadius: '5px',
    padding: '5px 20px',
    margin:'0 5px'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  cardInfo: {
    color: 'white'
  },
}
export default VisaCard