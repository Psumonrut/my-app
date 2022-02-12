import React, { Component ,useState} from 'react'
import {
    AppBar, Typography, Container, InputBase,
    Paper, IconButton, Grid, Button,Card
} from '@material-ui/core';
import { Row } from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';


function Headers(props) {
    const [menu, setMenu] = useState(props.menu);
    const getMenu = () => {
       return menu.map((item) => {
           return <Grid item style={{ marginLeft: '1%' }}>
               <Button >
                   {item}
               </Button>
              </Grid>
       }) 
          }
    return (
            <Card>
                <Container maxWidth="xl">
                    <Grid container >
                    <Grid item xs={1} style={{ marginLeft: '10%', marginTop: '2%' }}>
                            <Typography>
                                LOGO
                            </Typography>
                        </Grid>
                    <Grid item xs={3} style={{ marginLeft: '2%', marginTop: '1%' }} >
                        <Paper style={{ background: '#D3D5D6', height:'40px' }}>
                            <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                            <InputBase placeholder='Sreach'>
                            </InputBase></Paper>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    <Grid item xs={1} style={{ marginTop: '1%' }}>
                        <Button style={{ background: '#D3D5D6' }}>Register</Button>
                        </Grid>
                    <Grid item xs={1} style={{ marginTop: '1%' }}>
                        <Button style={{ background: '#ffffff',border: '2px solid #D3D5D6' }} >
                            Sign IN</Button>
                        </Grid>
                </Grid>
                <Grid container style={{ marginLeft: '9%', marginTop: '1%' }}>
                    {getMenu()}
                </Grid>
            </Container>
        </Card>
        );
    }

export default Headers;