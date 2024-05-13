import React, { useState } from 'react'
import { Button, TextField, MenuItem, Select, Typography, Container, Box, FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import axios from 'axios'
import Navbar from './navbar';

const Sign_in = () => {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [type, setType] = useState()

    const submit = (user, password, type) => {
    //   console.log(user, password, type);
        const formdata = new FormData()
        formdata.append("user", user)
        formdata.append("password", password)
        formdata.append("type", type)
        axios.post(`http://localhost:3005/login`, formdata)
            .then((res) => {
                console.log(res);
                if (res.data.Response.Success == 1) {
                    alert(res.data.Response.Message)
                    localStorage.setItem("type",type)
                    window.location.href = '/Dashboard'
                }
                if (res.data.Response.Success == 0) {
                    alert(res.data.Response.Message)
                }
            })
    }


    return (
        <>
            <Container component="main" maxWidth="sm" >
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    style={{ background: "#FFFFFF" }}
                >

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="EMPLOYEE ID"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                      

                        <br />
                        <br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                            <Select
                                labelId="Utype"
                                id="Utype"
                                name="Utype"
                                label="Utype"
                                onChange={(e) => setType(e.target.value)}

                            >
                                <MenuItem value={"A"}>Admin</MenuItem>

                                <MenuItem value={"U"}>Employee</MenuItem>
                            </Select>
                        </FormControl>
                        <br /><br />





                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => submit(user, password, type)}
                        >
                            Sign In
                        </Button>

                    </Box>
                </Box>
            </Container>

        </>
    )
}

export default Sign_in