import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

import pdfIconImg from '../assets/pdf.png'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('ภาพถ่ายดาวเทียมไทยโชต'),
    createData('ภาพถ่ายดาวเทียม Nasa Blue Marble'),
    createData('ระดับความรุนแรงรายตำบลในรอบ 7 วัน'),
    createData('พื้นที่น้ำท่วมรอบ 7 วัน'),
    createData('ตำแหน่งหลังคาเรือน (มาตราส่วน 1 : 25000)'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} sx={{ marginTop: '1.2em' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell sx={{ fontFamily: 'noto sans thai', fontSize: '1.2rem', color: 'orange' }} align="left">รายการ</TableCell>
                        <TableCell sx={{ fontFamily: 'noto sans thai', fontSize: '1.2rem', color: 'orange', paddingRight: '30px' }} align="right">ไฟล์ดาวน์โหลด</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ width: '6rem', paddingLeft: '30px' }}>
                                <Avatar sx={{ bgcolor: '#3881EA2E', color: 'blue' }}><ListAltIcon /></Avatar>
                            </TableCell>
                            <TableCell component="th" scope="row" sx={{ fontFamily: 'noto sans Thai', fontSize: '1rem' }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ paddingRight: '30px' }}>
                                <img src={pdfIconImg} alt="" width='25px' />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
