import React, { Component ,useState} from 'react'
import {
    AppBar, Typography, Container, InputBase,
    Paper, IconButton, Grid, Button
} from '@material-ui/core';
import { Row } from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import "../styles.css";


function Headers(props) {
    const [menu, setMenu] = useState(props.menu);
    
    function getMenu(menu) {
       menu.forEach(item => {
           return ( <Grid item xs={1}>
                <Typography>
                    {item}
                </Typography>
            </Grid>)
       }   ) 
          }
    return (
            <AppBar style={{ color : "#FEFEFE" }}>
                <Container maxWidth="xl">
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={1}>
                            <Typography>
                                LOGO
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper component="form" >
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    placeholder='ค้นหา'
                                    style={{ width: '130px', clor: 'grey' }}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={1}>
                            <Button variant="contained">Register</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained">Sign IN</Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                    <Grid item xs={1}> <Typography> A</Typography> </Grid>
                    <Grid item xs={1}> <Typography> B</Typography> </Grid>
                    <Grid item xs={1}> <Typography> C</Typography> </Grid>
                    <Grid item xs={1}> <Typography> D</Typography> </Grid>
                </Grid>

                </Container>
            </AppBar>
        );
    }

export default Headers;