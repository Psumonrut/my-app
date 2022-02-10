import React, { useEffect,useState } from 'react'
import {
    AppBar, Typography, Container, InputBase,
    Paper, IconButton, Grid, Button, Card
} from '@material-ui/core';
import { Row }from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Headers from './Headers';
import AddsPaper from './AddsPaper';
import MainPage from './MainPage';
import "../styles.css";


function DesignFrontEn() {
    const [menu, setMenu] = useState([
        'A'  ,
        'B',
        'C',
        'D']);

    const [year, setYear] = useState([]);
    const [groups, setGroups] = useState(['หมวดหมู่', 'หนังซูม', 'หนังฝรั่ง',
        'หนังไทย', 'ซีรี่ย์','การ์ตูน','อนิเมะ']);
    const [types, setTypes] = useState(['Biography ชีวประวัติ', 'Adventure ผจญภัย', 'Action แอคชั่น',
          'Comedy ตลก', 'History ประวัติศาสตร์', 'Horror สยองขวัญ', 'Western ตะวันตก',
        'War สงคราม', 'Thriller ระทึกขวัญ', 'Sci-fi วิทยาศาสตร์', 'Romance โรแมนติก',
        'Mystery ลึกลับ', 'Musical ดนตรี', 'Fantasy แฟนตาซี', 'Family ครอบครัว',
        'Drama ชีวิต', 'Documentary สารคดี', 'Crime อาชญากรรม'
       ]);


    useEffect(() => { setYears() }, [])

    function setYears() {
        for (var i = 1; i <= 12; i++) {
            year.push(2023);
        }
        setYear(year)
    }

    
    return (
        <div>
            <Headers menu={menu} />
            <div>
             
            </div>
            <div>
                <MainPage
                    year={year}
                    groups={groups}
                    types={types}
                />
            </div>
        </div>
        );
    
}
export default DesignFrontEn;