import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, CardHeader, CardContent, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Pagination, Icon, IconButton } from '@mui/material';

const Inventory = () => {

    const data = [{
        "name": "avocado", "price": 230,
        "category": "grocery",
        "quantity": 10, "date": "10/03/2021"
    }, {
        "name": "lotion", "price": 250,
        "category": "beauty & personal",
        "quantity": 100,
        "date": "15/07/2021"
    }, {
        "name": "pain reliever", "price": 500,
        "category": "health",
        "quantity": 200, "date": "12/04/2021"
    }, {
        "name": "dry pasta", "price": 20,
        "category": "grocery",
        "quantity": 50, "date": "27/06/2021"
    }, {
        "name": "toothbrush", "price": 700,
        "category": "beauty & personal",
        "quantity": 100,
        "date": "30/01/2021"
    }, {
        "name": "halloween candy", "price": 33,
        "category": "grocery",
        "quantity": 56, "date": "22/02/2021"
    }, {
        "name": "mascara", "price": 765,
        "category": "beauty & personal",
        "quantity": 70,
        "date": "11/03/2021"
    }, {
        "name": "capsicum", "price": 764,
        "category": "grocery",
        "quantity": 90, "date": "16/02/2021"
    }, {
        "name": "blush", "price": 87,
        "category": "beauty & personal",
        "quantity": 50, "date": "17/07/2021"
    }, {
        "name": "granola bars", "price": 24,
        "category": "grocery", "quantity": 60,
        "date": "20/05/2021"
    },
    ]
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar />
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Container>
                            <div style={{
                                height: '100%',
                            }}>
                                <Card>
                                    <CardHeader style={{ marginBottom: '-2.5vh' }} title="Inventory" />

                                    <CardContent>
                                        <TableContainer>
                                            <Table>
                                                <TableHead className="bg-primary">
                                                    <TableRow>
                                                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>SL.NO</TableCell>


                                                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>

                                                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Price</TableCell>

                                                        <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Category</TableCell>

                                                        <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold', color: 'white' }}>Quantity</TableCell>

                                                        <TableCell sx={{ whiteSpace: 'nowrap', fontWeight: 'bold', color: 'white' }}>Date</TableCell>


                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data.map((data, i) => (
                                                        <TableRow key={i}>
                                                            <TableCell>{i + 1}</TableCell>
                                                            <TableCell>{data.name}</TableCell>
                                                            <TableCell>{data.price}</TableCell>
                                                            <TableCell>{data.category}</TableCell>
                                                            <TableCell>{data.quantity}</TableCell>
                                                            <TableCell>{data.date}</TableCell>
                                                        </TableRow>
                                                    ))}


                                                </TableBody>

                                            </Table>
                                        </TableContainer>

                                    </CardContent>
                                </Card>
                            </div>
                        </Container>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Inventory
