
import { TableContainer, Table, TableHead, TableRow, TableBody, IconButton, Collapse } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/system';

const ResponsiveTableContainer = styled(TableContainer)(({ theme }) => ({
    width: '95vw',
    textAlign: 'left',
    backgroundColor: '#C78283',
    border: 'none',
    boxShadow: 'none',
    color: '#212738',
    [theme.breakpoints.up('md')]: {
        width: '90vw',
        textAlign: 'justify',

    }

}));


function Row(props) {
    const { product } = props;
    const [open, setOpen] = useState(false);
    console.log(`Rendering Row for product id: ${product.id}`); // Debug output

    return (
        <>
            <TableRow
                key={product.id}
                sx={{ '& > *': { borderBottom: 'none' }, height: '50px', color: '#212738' }}
            >
                <TableCell>
                    <IconButton
                        aria-label={"expand row-" + product.id}
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon sx={{ color: '#212738' }} /> : <KeyboardArrowDownIcon sx={{ color: '#212738' }} />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{ color: '#212738', fontSize: '18px' }}>{product.name} </TableCell>
                <TableCell sx={{ color: '#212738', fontSize: '18px' }}>${product.price} MXP</TableCell>
                <TableCell sx={{ color: '#212738', fontSize: '18px' }}>{product.presentation.name} </TableCell>
            </TableRow>
            <TableRow  >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, color: '#212738' }} colSpan={6} >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <h4 style={{ fontSize: '16px', paddingBottom: 10, paddingTop: 20, color: '#212738' }}>Descripción </h4>
                        {product.description}
                    </Collapse>

                </TableCell>
            </TableRow >
        </>
    );


}

export default function PriceProductsTable({ products }) {
    return (

        <>
            <ResponsiveTableContainer  >
                <Table sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead  >
                        <TableRow>
                            <TableCell />
                            <TableCell sx={{ color: "#212738", fontSize: "20px" }}><strong>Producto</strong></TableCell>
                            <TableCell sx={{ color: "#212738", fontSize: "20px" }}><strong>Precio</strong></TableCell>
                            <TableCell sx={{ color: "#212738", fontSize: "20px" }}><strong>Unidad/Tamaño</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <Row key={product.id} product={product} />

                        ))}

                    </TableBody>
                </Table>

            </ResponsiveTableContainer>
        </>
    );

}