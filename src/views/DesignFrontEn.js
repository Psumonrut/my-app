import React, { Component } from 'react'
import {
    AppBar, Typography, Container, InputBase,
    Paper, IconButton, Grid, Button
} from '@material-ui/core';
import { Row }from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import "../styles.css";


class DesignFrontEn extends Component {
    
    render() {
        return (
            <AppBar color="#FEFEFE">
                <Container maxWidth="xl">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                                    placeholder="ค้นหา"
                                    style={{ width: '130px',clor:'grey' }}
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
                     <Row>
                           <p> หนังล่าสุด</p>
                        
                            <p> แอคชัน</p>
                     </Row>

                </Container>
            </AppBar>
        );
    }
}
export default DesignFrontEn;