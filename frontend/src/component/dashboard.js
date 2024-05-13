import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faListCheck, faMessage } from '@fortawesome/free-solid-svg-icons';
import { BarChart } from '@mui/x-charts/BarChart';

const Dashboard = () => {



    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar />
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                            <div className='col-lg-3 bg-primary ' style={{ display: 'flex' }}>
                                <div style={{ height: '100%', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faMessage} style={{ height: '50%', width: '100%', color: 'white' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'end', justifyContent: 'space-around' }}>
                                    <h3>26</h3>
                                    <h3>New Connection</h3>

                                </div>

                            </div>
                            <div className='col-lg-3 bg-warning ' style={{ display: 'flex' }}>
                                <div style={{ height: '100%', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faListCheck} style={{ height: '50%', width: '100%', color: 'white' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'end', justifyContent: 'space-around' }}>
                                    <h3>12</h3>
                                    <h3>New Task</h3>

                                </div>

                            </div> <div className='col-lg-3 bg-danger ' style={{ display: 'flex' }}>
                                <div style={{ height: '100%', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faCartFlatbed} style={{ height: '50%', width: '100%', color: 'white' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', color: 'white', textAlign: 'end', justifyContent: 'space-around' }}>
                                    <h3>124</h3>
                                    <h3>New Orders!</h3>

                                </div>

                            </div>

                        </div>


                        <div style={{ height: '60vh' ,display:'flex',justifyContent:'center',alignItems:'center'}}>

                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                width={1000}
                                height={500}
                            />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Dashboard