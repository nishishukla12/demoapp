import React from 'react'
import Card from '@mui/material/Card';
import { AiOutlineStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

function CompaniescardComponent({ imgurl, title, subtitle }) {
    return (
        <div className='compamies_card'>
            <Card sx={{ maxWidth: 345 }}>
                <div className='heder_wrap'>
                    <img src={imgurl} alt="img" />
                    {console.log("hello", imgurl)}
                    <div className='comp_title-wrap'>
                        <h1>{title}</h1>
                        <h2>
                            <AiOutlineStar />{subtitle}</h2>
                    </div>
                    <span><FiChevronRight /></span>
                </div>

            </Card>

        </div>
    )
}
export default CompaniescardComponent;