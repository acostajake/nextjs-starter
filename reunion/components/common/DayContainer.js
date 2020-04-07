import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

export default function DayContainer({ activity }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">_DATE_</TableCell>
                        <TableCell align="right">ACTIVITY</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {activity.map(each => (
                        <TableRow key={each.time}>
                            <TableCell align="left">{each.time}</TableCell>
                            <TableCell align="right">{each.activity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}