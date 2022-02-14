import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import {
    Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card, ImageList
} from '@material-ui/core';
import imgs from '../Image/spider.png';
import imgac from '../Image/action.png';
import { Row } from 'reactstrap';

export default function Type(props) {
    const [typesData, setTypesData] = useState(props.typemov);


    return (
        <>
            <p style={{ marginLeft: '40%', marginTop: '10%' }} className="h1">Group</p>
            <Grid container style={{ marginLeft: '4%' }} >
                <Grid container xs={2} style={{ marginLeft: '2%' }} >
                    <div className="card_type">
                        <div style={{ marginLeft: '25%', marginTop: '50%' }}>
                             <p>New</p>
                        </div>
                    </div>
                        <img src={imgs} className="imgTypeL" />
                </Grid>
                <Grid container xs={2} style={{ marginLeft: '5%' }} >
                    <Row>
                        <div className="card_types">
                            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                                <p>ACtion</p>
                            </div>
                        </div>
                        <img src={imgac} className="imgTypeC" />
                        <div className="card_types">
                            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                                Series
                            </div>
                        </div>
                            <img src={imgs} className="imgTypeC" />
                    </Row>
                </Grid>
                <Grid container xs={2} style={{ marginLeft: '5%' }} >
                    <Row>
                        <div className="card_types">
                            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                                Cartoon
                            </div>
                        </div>
                        <img src={imgac} className="imgTypeC" />
                        <div className="card_types">
                            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                                Anime
                            </div>
                        </div>
                        <img src={imgs} className="imgTypeC" />
                    </Row>
                </Grid>
                <Grid container xs={2} style={{ marginLeft: '5%' }} >
                    <Row>
                        <div className="card_types">
                            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                                Thai movie
                            </div>
                        </div>
                        <img src={imgac} className="imgTypeC" />
                        <div className="card_types">
                            <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                                Universal movie
                            </div>
                        </div>
                        <img src={imgs} className="imgTypeC" />
                    </Row>
                </Grid>
            </Grid>

     </>
    )
}
