import React, { useState } from 'react'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import parse from 'html-react-parser';

function RobotWalk() {
    const [inputValue, setInputValue] = useState('');
    const [lastPos, setlastPos] = useState('(0,0)');
    const [tableSize, setTableSize] = useState(9);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        walk(inputValue);
    };

    let table = "<table style='border:1px solid #9B9B9B; border-collapse: collapse;'>";

    let tabXY = (tableSize - 1) / 2;
    for (let y = tabXY; y >= -tabXY; y--) {
        table += "<tr style='border:1px solid #9B9B9B; border-collapse: collapse;'>";
        for (let x = -tabXY; x <= tabXY; x++) {
            if (x === 0 && y === 0) {
                table += "<td className='tdcolor' style='border:1px solid #9B9B9B;width:40px;height:40px;background:#8AAF73;' id='";
                table += x + ',' + y;
                table += "'></td>";
            } else {
                table += "<td style='border:1px solid #9B9B9B;width:40px;height:40px;' id='";
                table += x + ',' + y;
                table += "'></td>";
            }

        }
        table += "</tr>";
    }
    table += "</table>";

    function walk() {
        let directtion = 'n';
        let posX = 0;
        let posY = 0;

        let textup = inputValue.toUpperCase();
        let charsArr = textup.split('');

        let allTds = document.getElementsByTagName("td");
        for (let i = 0; i < allTds.length; i++) {
            allTds[i].style.backgroundColor = "#FFFFFF";
        }
        document.getElementById('0,0').style.backgroundColor = "#8AAF73";

        for (let i = 0; i < charsArr.length; i++) {
            if (charsArr[i] === 'W') {
                switch (directtion) {
                    case 'n':
                        posY++;
                        break;
                    case 's':
                        posY--;
                        break;
                    case 'w':
                        posX--;
                        break;
                    case 'e':
                        posX++;
                        break;
                }
            }
            else if (charsArr[i] === 'L') {
                switch (directtion) {
                    case 'n':
                        directtion = 'w';
                        break;
                    case 's':
                        directtion = 'e';
                        break;
                    case 'w':
                        directtion = 's';
                        break;
                    case 'e':
                        directtion = 'n';
                        break;
                }
            } else if (charsArr[i] === 'R') {
                switch (directtion) {
                    case 'n':
                        directtion = 'e';
                        break;
                    case 's':
                        directtion = 'w';
                        break;
                    case 'w':
                        directtion = 'n';
                        break;
                    case 'e':
                        directtion = 's';
                        break;
                }
            }
            let pos = posX + ',' + posY;
            if (pos != '0,0') {
                if (i == charsArr.length - 1) {
                    document.getElementById(posX + ',' + posY).style.backgroundColor = "#CB8A8A";
                } else {

                    document.getElementById(posX + ',' + posY).style.backgroundColor = "#C4C4C4";
                }
            }

        }
        setlastPos('(' + pos + ')');

    }
    return (
        <>
            <div style={styles.container}>
                <div style={{ borderRight: '2px solid #E5E5E5', padding: '40px', height: '50vh' }}>
                    <Typography variant='h4'>Robot Walk</Typography>
                    <Typography style={{ marginTop: '20px' }}>คำสั่ง Robot Walk</Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: '500px', mt: '10px' }}
                        value={inputValue} onChange={handleInputChange}
                    />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#97B3C7",
                                borderRadius: '10px',
                                width: '100px',
                                marginTop: '20px',
                                color: "black",
                                ":hover": {
                                    bgcolor: "#7BCCDE",
                                }
                            }}
                            onClick={handleButtonClick}
                        >
                            คำนวน
                        </Button>
                    </div>
                </div>
                <div style={{ padding: '15px' }}>
                    ตำแหน่งปัจุบัน {lastPos}
                </div>
                <div style={styles.robotWalk}>
                    {parse(table)}
                </div>
            </div>
        </>

    )
}
let styles = {
    container: {
        padding: '50px',
        paddingTop: '100px',
        display: 'flex'
    },
    robotWalk: {
        padding: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

}
export default RobotWalk