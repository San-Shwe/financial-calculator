import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
const columns = [
  { id: 'id', label: 'ID', minWidth: 20 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 20 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.getFullYear()+'-'+(value.getMonth()+1)+'-'+value.getDate(),
  },
  {
    id: 'product_size',
    label: 'Product Size',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'view',
    label: 'View',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'delete',
    label: 'Delete',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows=[
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function StickyHeadTable() {

    const [rows, setRows] = useState([]);
        
    // bind Order data on load
    useEffect(()=>{
        if(localStorage.getItem("order") === null){
            localStorage.setItem('order', JSON.stringify([]));
        }else{
            setRows(JSON.parse(localStorage.getItem('order')));
        }
    }, []);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                {/* {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })} */}
                                <TableCell component="td" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    {row.type}
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell component="td" scope="row" align="right">
                                    {row.product_size}
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    <ImportContactsIcon onClick={e=>console.log("view")} color="primary" />
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    <BackspaceIcon onClick={e=>(setRows(rows.filter(rec => rec.id !== row.id)))} color="warning"/>
                                    {/* localStorage.setItem('order', JSON.stringify(rows.filter(rec => rec.id !== row.id)));  */}
                                </TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </Paper>
            </Box>
        </Container>
    );
}