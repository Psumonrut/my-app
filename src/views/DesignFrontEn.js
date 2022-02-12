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
import imgs from '../Image/spider.png';
import "../styles.css";



function DesignFrontEn() {
    const menu =['หนังล่าสุด','แอคชั่น', 'ซี่รี่ย์', 'การ์ตูน','อนิเมะ','หนังไทย','หนังฝรั่ง'];
    const groups=['หมวดหมู่', 'หนังซูม', 'หนังฝรั่ง',  'หนังไทย', 'ซีรี่ย์','การ์ตูน','อนิเมะ']
    const types = ['Biography ชีวประวัติ', 'Adventure ผจญภัย', 'Action แอคชั่น',
          'Comedy ตลก', 'History ประวัติศาสตร์', 'Horror สยองขวัญ', 'Western ตะวันตก',
        'War สงคราม', 'Thriller ระทึกขวัญ', 'Sci-fi วิทยาศาสตร์', 'Romance โรแมนติก',
        'Mystery ลึกลับ', 'Musical ดนตรี', 'Fantasy แฟนตาซี', 'Family ครอบครัว',
        'Drama ชีวิต', 'Documentary สารคดี', 'Crime อาชญากรรม'
    ];
    const year = ['2023', '2023', '2023', '2023', '2023', '2023', '2023', '2023',
    '2023', '2023', '2023', '2023' ]
    const menus = ['อัพเดทล่าสุด', 'หนังเรียงตามปี', 'TOP IMDM', 'คนชอบมากที่สุด']
    const OwnerData = [
        { image: 'owner/dc.png'  },
        { image: 'owner/dc.png'  },
        { image: 'owner/dc.png' }
    ];

    const TypeData = [
        {
            Type: {
                image: 'movei/spider.png',
                name: 'หนังล่าสุด'
            }
        },
        {
            Type: {
                image: 'movei/action.png',
                name: 'แคชั่น'
            }
        },
        {
            Type: {
                image: 'movei/spider.png',
                name: 'การ์ตูน'
            }
        },
        {
            Type: {
                image: 'movei/harry.png',
                name: 'หนังฝรั่ง'
            }
        },
        {
            Type: {
                image: 'movei/spider.png',
                name: 'ซีรี่ย์'
            }
        },
        {
            Type: {
                image: 'movei/harry.png',
                name: 'อนิเมะ'

            }
        },
        {
            Type: {
                image: 'movei/harry.png',
                name: 'หนังไทย'

            }
        }
        ]


    const MoveiData = [
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'harry'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/harry.png',
                name: 'spiderman'
            }
        },
        {
            Movei: {
                image: 'movei/spider.png',
                name: 'spiderman'
            }
        },
      
    ];

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
                    owner={OwnerData}
                    movie={MoveiData}
                    typemov={TypeData}
                    menus={menus}
                />
            </div>
        </div>
        );   
}
export default DesignFrontEn;