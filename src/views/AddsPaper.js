import React, {  useState } from 'react'
import {
    AppBar, Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card
} from '@material-ui/core';
import "../styles.css";


export default function AddsPaper(props) {
    return (
    <div><Paper style={{
        backgroundColor: '#6DE518',
        marginTop: '10%',
        marginLeft: '2%',
        width: '15%',
        height: '70%',
        position: 'fixed'
    }}></Paper><Paper style={{
        backgroundColor: '#EA6329',
        marginTop: '10%',
        marginLeft: '82%',
        width: '15%',
        height: '70%',
        position: 'fixed'
    }}></Paper><Paper style={{
        backgroundColor: '#29D7EA',
        marginTop: '30%',
        marginLeft: '20%',
        width: '60%',
        height: '25%',
        position: 'fixed'
    }}></Paper></div>
      )
}
