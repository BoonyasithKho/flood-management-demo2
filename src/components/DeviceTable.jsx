import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import deviceIcon_1 from '../assets/deviceIcon_1.png'
import deviceIcon_2 from '../assets/deviceIcon_2.png'
import deviceIcon_3 from '../assets/deviceIcon_3.png'
import deviceIcon_4 from '../assets/deviceIcon_4.png'
import deviceIcon_5 from '../assets/deviceIcon_5.png'
import { Box } from '@mui/material';

function createData(iconDevice, name, deviceType, status, date) {
    return { iconDevice, name, deviceType, status, date };
}

const rows = [
    createData(deviceIcon_1, 'เครื่องสูบน้ำ ขนาด 8', 'เครื่องสูบน้ำ', 'ติดตั้ง', '05 มิถุนายน 2567'),
    createData(deviceIcon_2, 'เครื่องสูบน้ำ ขนาด 10', 'เครื่องสูบน้ำ', 'หยุดการทำงาน', '05 มิถุนายน 2567'),
    createData(deviceIcon_3, 'เรือดูดโคลน', 'เรือ', 'ถอนการติดตั้ง', '05 มิถุนายน 2567'),
    createData(deviceIcon_4, 'ท่อเหล็ก', 'อุปกรณ์และเครื่องมือ', 'จัดเก็บในส่วนกลาง', '05 มิถุนายน 2567'),
    createData(deviceIcon_5, 'รถบรรทุก 6 ล้อ พร้อมเครน', 'รถ', 'รอการติดตั้ง', '05 มิถุนายน 2567'),
];



export default function DeviceTable() {
    // const [getdetail, setGetdetail] = React.useState(false)

    return (
        <>
            <TableContainer component={Paper} sx={{ marginTop: '1.2em' }
            } >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell sx={{ fontFamily: 'noto sans thai', fontSize: '1.2rem', color: 'orange' }} align="left">รายการ</TableCell>
                            <TableCell sx={{ fontFamily: 'noto sans thai', fontSize: '1.2rem', color: 'orange' }} align="left">ประเภท</TableCell>
                            <TableCell sx={{ fontFamily: 'noto sans thai', fontSize: '1.2rem', color: 'orange' }} align="left">สถานะ</TableCell>
                            <TableCell sx={{ fontFamily: 'noto sans thai', fontSize: '1.2rem', color: 'orange', paddingRight: '30px' }} align="right">วันที่</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                onClick={() => alert(row.name)}
                                // onClick={() => setGetdetail(true)}
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" sx={{ width: '6rem', paddingLeft: '30px' }}>
                                    <img src={row.iconDevice} alt="" width='32px' />
                                </TableCell>
                                <TableCell component="th" sx={{ fontFamily: 'noto sans Thai', fontSize: '1rem' }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="left" sx={{ fontFamily: 'noto sans Thai', fontSize: '1rem' }}>
                                    {row.deviceType}
                                </TableCell>
                                <TableCell align="left" sx={{ fontFamily: 'noto sans Thai', fontSize: '1rem' }}>
                                    {row.status}
                                </TableCell>
                                <TableCell align="right" sx={{ fontFamily: 'noto sans Thai', fontSize: '1rem', paddingRight: '30px' }}>
                                    {row.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
}
