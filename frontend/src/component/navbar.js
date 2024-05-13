import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
const Navbar = () => {
    const type = localStorage.getItem("type")

    const logout=()=>{
        localStorage.removeItem("type")
        window.location.href='/'
    }



    return (
        <>
            <div className='container-fluid'>
                <div className='row' style={{ height: '7vh', backgroundColor: 'gray' }}>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-6' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                        {type == 'U' ?
                            <>
                                <a href="/Dashboard" style={{ textDecoration: 'none', color: 'black' }}><ul style={{ fontWeight: 'bolder' }}>DASHBOARD</ul></a>
                                <a href="/Billing" style={{ textDecoration: 'none', color: 'black' }}><ul style={{ fontWeight: 'bolder' }}>BILLING</ul></a>
                            </>


                            :
                            <>
                                <a href="/Dashboard" style={{ textDecoration: 'none', color: 'black' }}><ul style={{ fontWeight: 'bolder' }}>DASHBOARD</ul></a>
                                <a href="/Inventory" style={{ textDecoration: 'none', color: 'black' }}><ul style={{ fontWeight: 'bolder' }}>INVENTORY</ul></a>
                                <a href="/Billing" style={{ textDecoration: 'none', color: 'black' }}><ul style={{ fontWeight: 'bolder' }}>BILLING</ul></a>
                            </>

                        }

                    </div>
                    <div className='col-lg-3' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <button type='btn' className='btn btn-primary' onClick={()=>logout()}>lOGOUT</button>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Navbar
