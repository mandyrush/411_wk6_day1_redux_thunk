import React from 'react';
import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export function CustomTable(props) {
    const [index, setIndex] = useState(null)

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, idx) => {
        setAnchorEl(event.currentTarget);
        setIndex(idx);
    };

    const handleClose = () => {
        props.deleteMake(index);
        setAnchorEl(null);
    };

    return (
        // <TableContainer component={Paper}>
        <div>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((row, index) => (
                        <TableRow key={row.MakeId}>
                            <TableCell component="th" scope="row">
                                {row.MakeId}
                            </TableCell>
                            <TableCell>{row.MakeName}</TableCell>
                            <TableCell align="right">
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => handleClick(e, index)}>
                                    <MoreVertIcon></MoreVertIcon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </div>
        // </TableContainer>
    );
}