import React, {  useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';
import { Row,Col } from 'reactstrap';
import {
    AppBar, Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card, ImageList
} from '@material-ui/core';

import "../styles.css";
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    contentDialog: {
        position: 'absolute',
        height: 200
    },
});

export default function MainPage(props) {
    const [open, setOpen] = useState(true);

    function Years(year) {
        return year.map(item => {
            return <Paper square  style={{
                backgroundColor: '#C5C8CF',
                marginLeft: '10%',
                marginTop: '2%',
                width: '160%',
                height: '5%'
            }}> <Row><Col>
                        <a style={{ marginLeft: '15%' }}>{item}</a>
                        <a style={{ marginLeft: '15%'}}>{item}</a>
                    </Col></Row>
            </Paper>                
        }) 
    }

    function Groups(groups) {
        return groups.map(item => {
            return <Paper square style={{
                backgroundColor: '#C5C8CF',
                marginLeft: '10%',
                width: '160%',
                marginTop: '2%',
                height: '5%'
            }}> <Row><Col>
                        <LensIcon style={{ fontSize: '80%', marginLeft: '10%' }} />
                        <a style={{ marginLeft: '10%' }}>{item}</a>
                    </Col></Row>
            </Paper>
        })
    }

    function Types(types) {
        return types.map(item => {
            return <Paper square style={{
                backgroundColor: '#C5C8CF',
                marginLeft: '10%',
                width: '160%',
                marginTop: '2%',
                height: '5%'
            }}> <Row>
                    <Col>
                        <LensIcon style={{ fontSize: '80%', marginLeft:'10%' }} />
                        <a style={{ marginLeft: '5%' }}>{item}</a>
                    </Col>
                </Row>
            </Paper>
        })
    }
    return (
        <div>
            <Grid container xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={8}>
                    <Paper style={{
                        backgroundColor: '#C5C8CF',
                        marginLeft: '10%',
                        marginTop: '20%',
                        width: '100%',
                        height: '100%'
                    }}></Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={8} style={{ marginTop: '20%'}}>
                    <Paper style={{
                        backgroundColor: '#C5C8CF',
                        marginLeft: '10%',
                        marginTop: '1%',
                        width: '100%',
                        height: '1000%'
                    }}></Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <div><Typography align="center" >Group</Typography></div>
            <Grid container xs={12}>
                <Grid item xs={1}>
                    <Paper style={{
                        backgroundColor: '#C5C8CF',
                        marginLeft: '10%',
                        marginTop: '1%',
                        width: '100%',
                        height: '500%'
                    }}></Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper style={{
                        backgroundColor: '#D788EA',
                        marginLeft: '10%',
                        marginTop: '10%',
                        width: '100%',
                        height: '500%'
                    }}></Paper>
                </Grid>
                <Grid item xs={1}>
                    <img  />

                    <Paper style={{
                        backgroundColor: '#C5C8CF',
                        marginLeft: '100%',
                        marginTop: '10%',
                        width: '100%',
                        height: '500%'
                    }}></Paper>
                </Grid>
            </Grid>
            <div style={{ marginTop: '20%' }}>
             <Grid container xs={12} >
                    <Grid item xs={1} style={{ marginTop: '10%' }}>
                       < Typography align="center" >Year</Typography>
                            {Years(props.year)}
                    </Grid>
                  
                    <Grid item xs={6} style={{ marginTop: '10%' }}>
                    <Paper style={{
                        backgroundColor: '#D788EA',
                        marginLeft: '20%',
                        marginTop: '10%',
                        width: '100%',
                        height: '500%'
                    }}></Paper>
                </Grid>
                    <Grid item xs={1} style={{ marginTop: '10%' }}>
                    <img />

                    <Paper style={{
                        backgroundColor: '#C5C8CF',
                        marginLeft: '100%',
                        marginTop: '10%',
                        width: '100%',
                        height: '500%'
                    }}></Paper>
                </Grid>
                </Grid>

                <Grid item xs={1} style={{ marginTop: '3%' }}>
                    < Typography align="center" >Groups</Typography>
                    {Groups(props.groups)}
                </Grid>

                <Grid item xs={1} style={{ marginTop: '3%' }}>
                    < Typography align="center" >Type</Typography>
                    {Types(props.types)}
                </Grid>
             </div>
        </div>

)

    
}

