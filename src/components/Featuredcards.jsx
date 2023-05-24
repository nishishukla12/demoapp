import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import location from '../assets/location.png';
import fresher from '../assets/fresher.png';

function Featuredcards({
  imgurl, title, subtitle, saveimgurl, reviewicon, reviewtitle
}) {
  return (
    <div className='feature_card'>

      <Card sx={{ maxWidth: 345 }}>
        <div className='heder_wrap'>
          <img src={imgurl} alt="img" />
          <div className='title_wrap'>
            <h1>{title}</h1>
          </div>
          <img src={saveimgurl} />
        </div>
        <CardContent>
          <div className='subtitle_wrap'>
            <h2>{subtitle}</h2>
            <div className='review_wrap'>
              <span>{reviewicon}</span>
              <p>{reviewtitle}</p>
            </div>
          </div>
          <div className='time_wrap'>
            <ul>
              <li><img src={fresher} />Fresher</li>
              <li><img src={location} />Jakarta</li>
            </ul>
            <span>23 hours ago</span>
          </div>
          <ul className='list_wrap'>
            <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
            <li>Internship</li>
            <li>Hybrid</li>
          </ul>
        </CardContent>

      </Card>

    </div>
  )
}

export default Featuredcards