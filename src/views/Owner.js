import React, { useState } from 'react'
import './App.css';
import {
    Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card, ImageList
} from '@material-ui/core';
import imgs from '../Image/spider.png';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

export default function Owner(props) {
    const [current, setCurrent] = useState(0);
    const [slideData, setSlideData] = useState(props.owner);

    const nextSlide = () => {
        setCurrent(current === slideData.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === slideData.length - 1 ? 0 : current - 1)
    }

    const moveDot = (idx) => {
        setCurrent(idx)
    }

    return (
        <>
            <p style={{ marginLeft: '40%', marginTop: '5%' }} className="h1">Owner</p>
            <section className="sliderOwn" style={{ marginLeft: '1%' }}>
          <ArrowForwardIos onClick={nextSlide} className="right" />
            <ArrowBackIos onClick={prevSlide} className="left" />
                {slideData.map((slide, idx) => {
                 return (
                     <div className={idx === current ? 'slide active' : 'slide'}
                         key={idx}>
                         {idx === current && (
                             <>
                                 <Grid container style={{ marginLeft: '10%' }}>
                                     <Grid container xs={2} style={{ marginLeft: '1%' }}>
                                         <img src={slide['image']} className="imgTypeO " />
                                     </Grid>
                                     <Grid container xs={2} style={{ marginLeft: '1%' }}>
                                         <img src={slide['image']} className="imgTypeO " />
                                     </Grid>
                                     <Grid container xs={2} style={{ marginLeft: '1%' }}>
                                         <img src={slide['image']} className="imgTypeO " />
                                     </Grid>
                                     <Grid container xs={2} style={{ marginLeft: '1%' }}>
                                         <img src={slide['image']} className="imgTypeO " />
                                     </Grid>
                                 </Grid>
                             
                             </>
                         )}

                         </div>
                   )
             })}
                <div style={{ marginLeft: '10%', marginTop: '4%' }} className="container-dots">
                    {slideData.map((item, idx) => (
                        <div style={{ marginLeft: '5%' }}
                         onClick={() => moveDot(idx + 1)}
                         className={current === idx ? 'dot active' : 'dot'}
                     ></div>
                 ))}
             </div>
         </section>
       </>
    )
}
