import React, { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import './App.css';


export default function Slides (){

    const [current, setCurrent] = useState(0);
    const SlideData = [
        {
            image: 'Slide 1'
        },
        {
            image: 'Slide 2'
        },
        {
            image: 'Slide 3'
        }
    ];
    const  nextSlide =() => {
        setCurrent(current === SlideData.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === SlideData.length - 1 ? 0 : current - 1)
    }

    const moveDot = (idx) => {
        setCurrent(idx)
    }


    if (!Array.isArray(SlideData) || SlideData.length <= 0) {
        return null;
    }

 return (
       <>
         <section className="slider">
          <ArrowForwardIos onClick={nextSlide} className="right-arrow" />
            <ArrowBackIos onClick={prevSlide} className="left-arrow" />
             {SlideData.map((slide, idx) => {
                 return (
                     <div className={idx === current ? 'slide active' : 'slide'}
                         key={idx}>
                         {idx === current && (
                             <>
                                 <p style={{ marginLeft: '30%', marginTop: '10%' }} className="nameSlide">
                                     {slide['image']}</p>
                                 <img atl="Tes Image" className="image" />
                                 
                             
                             </>
                         )}

                         </div>
                   )
             })}
             <div className="container-dots">
                 {SlideData.map((item, idx) => (
                     <div style={{ marginLeft: '2%' }}
                         onClick={() => moveDot(idx + 1)}
                         className={current === idx ? 'dot active' : 'dot'}
                     ></div>
                 ))}
             </div>
         </section>
       </>
    );
    
}

