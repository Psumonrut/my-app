import React, { useState } from 'react'
import './App.css';
import {
    Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card, ImageList
} from '@material-ui/core';
import imgs from '../Image/spider.png';
import { Row } from 'reactstrap';
import Pagination from '@material-ui/lab/Pagination';

export default function Movie(props) {
    const [movieData, setMovieData] = useState(props.movie);

    const getMoveidata = () => {
        return movieData.map((item, idx) => {
            return < Grid container xs={2} style={{ marginLeft: '5%' }}>
                <div className="card_name">
                    <div style={{ marginLeft: '25%', marginTop: '10%' }}>
                        {item['Movei']['name']}
                    </div>
                </div>
                <img src={item['Movei']['image']} className="imgmovie " />
            </Grid>
        }) 
    }


    return (
        <>
            <p style={{ marginLeft: '40%', marginTop: '5%' }} className="h1">Movie</p>
            <Grid container  style={{ marginLeft: '1%' }} >
                {getMoveidata()}
            </Grid>
            <div style={{ marginLeft: '25%', marginTop: '5%', marginBottom:'5%' }}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </>
    )
}
