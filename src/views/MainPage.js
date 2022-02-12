import React, {  useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';
import { Row,Col } from 'reactstrap';
import {
    Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card, ImageList
} from '@material-ui/core';
import Slides from './Slides';
import AddsPaper from './AddsPaper';
import Type from './Types';
import Owner from './Owner';
import Movie from './Movie';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './App.css';
import CloseIcon from '@material-ui/icons/Close';

export default function MainPage(props) {
    const Years =(year)=> {
        return year.map(item => {
            return <Paper square style={{
                backgroundColor: '#C5C8CF',
                marginLeft: '20%',
                marginTop: '2%',
                width: '80%',
                height: '3%'
            }}> <Row><Col>
                    <a style={{ marginLeft: '15%' }} className="h2">{item}</a>
                    <a style={{ marginLeft: '15%' }} className="h2">{item}</a>
                    </Col></Row>
            </Paper>                
        }) 
    }

    const  Groups = (groups) =>{
        return groups.map(item => {
            return <Paper square style={{
                backgroundColor: '#C5C8CF',
                marginLeft: '20%',
                width: '80%',
                marginTop: '2%',
                height: '5%'
            }}> <Row><Col>
                        <LensIcon style={{ fontSize: '80%', marginLeft: '10%' }} />
                    <a style={{ marginLeft: '10%' }} className="h2">{item}</a>
                    </Col></Row>
            </Paper>
        })
    }

    const Types = (types) =>{
        return types.map(item => {
            return <Paper square style={{
                backgroundColor: '#C5C8CF',
                marginLeft: '20%',
                width: '80%',
                marginTop: '2%',
                height: '5%'
            }}> <Row>
                    <Col>
                        <LensIcon style={{ fontSize: '80%', marginLeft:'10%' }} />
                        <a style={{ marginLeft: '5%' }} className="h2">{item}</a>
                    </Col>
                </Row>
            </Paper>
        })
    }

    const Menus = (menus) => {
        return menus.map(item => {
            return <>
               <a style={{ marginLeft: '10%' }} className="h2">{item}</a>
                <MoreVertIcon style={{ fontSize: '50%', marginLeft: '1%' }} />
                </>
        })
    }

 return (
     <div>
         <Grid container xs={12}>
             <Grid item xs={2}>
                 <AddsPaper color='#D2D4D5' className="addsLeft" />
             </Grid>
             <Grid item xs={8} >
                 <Slides/> 
             </Grid>
             <Grid item xs={2}>
                 <AddsPaper className="addsRight" />
               </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={1}>
                </Grid>
               <Grid item xs={8}>
                 <AddsPaper className="addsCenter"/>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <Grid container xs={12}  >
                <Grid item xs={2}> </Grid>
             <Grid item xs={8}>
                 <Paper style={{
                     backgroundColor: '#C5C8CF',
                     marginTop: '25%',
                     marginLeft: '5%',
                     width: '90%',
                     height: '100%'
                 }}></Paper>
                </Grid>
                <Grid item xs={2}></Grid>
         </Grid>
         <Grid container xs={12} style={{ marginTop: '10%' }}>
             <Grid item xs={2} >
                 <Paper style={{ backgroundColor: '#C5C8CF' }} className="paper_l"></Paper>
             </Grid>
             <Grid item xs={8} >
                     <Type typemov={props.typemov} />
             </Grid>
             <Grid item xs={2}>
                 <Paper style={{ backgroundColor: '#C5C8CF' }} className="paper_l"></Paper>
             </Grid>
         </Grid>
         <Grid container xs={12} style={{ marginTop: '1%' }}>
             <Grid item xs={2} >
                 <Paper style={{ backgroundColor: '#C5C8CF' }} className="paper_l"></Paper>
             </Grid>
             <Grid item xs={8} >
                 <Owner owner={props.owner} />
             </Grid>
             <Grid item xs={2}>
                 <Paper style={{ backgroundColor: '#C5C8CF' }} className="paper_l"></Paper>
             </Grid>
         </Grid>
         <Grid container xs={12} style={{ marginTop: '1%' }}>
             <Grid item xs={2} >  
             </Grid>
             <Grid item xs={8} >
                 <div style={{ marginLeft: '5%', marginTop: '10%' }} >
                     <Row><Paper style={{ backgroundColor: '#C5C8CF' }}>
                         <Col>{Menus(props.menus)}</Col></Paper></Row>
                 </div>
             </Grid>
             <Grid item xs={2}>
             </Grid>
         </Grid>
         <Grid container xs={12} style={{ marginTop: '1%' }}>
             <Grid item xs={2} style={{ marginTop: '5%' }} >
                 <div style={{ marginLeft: '50%' }}><p className="h1" >Year</p></div>
                 <div style={{ marginTop: '10%' }}>{Years(props.year)}</div>
                 <div style={{ marginLeft: '50%' }}><p className="h1" >Group</p></div>
                 <div style={{ marginTop: '10%' }}>{Groups(props.groups)}</div>
                 <div style={{ marginLeft: '50%' }}><p className="h1">Type</p></div>
                 <div style={{ marginTop: '10%' }}>{Types(props.types)}</div>
               </Grid>
             <Grid item xs={8} >
                 <Movie movie={props.movie} /> 
               </Grid>
                <Grid item xs={2}>
                 <Paper style={{
                     backgroundColor: '#C5C8CF',
                     marginTop: '20%',
                     marginLeft: '5%',
                     width: '90%',
                     height: '50%'
                 }}></Paper>
                </Grid>
         </Grid>
     </div>

)
}

