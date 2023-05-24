import React from 'react';
import Img1 from '../assets/img1.png';
import Featuredcards from './Featuredcards';
import save from '../assets/save.png';
import { AiOutlineStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

function Featured() {

  const featured = [
    {
      img_url: Img1,
      title: 'Tech Rookie Internship Program (TRIP) - iOS Eng...',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Business Development Support - Bandung',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Program Management Officer - Multimedia Nusantara Poly...',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Cyber Security Engineer',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Visual Designer (Freelance)',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Tech Rookie Internship Program (TRIP) - iOS Eng...',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Risk Manager',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
    {
      img_url: Img1,
      title: 'Transporter Management Executive',
      subtitle: 'PT Midas Daya Teknologi',
      saveimg_url: save,
      reviewicon: <AiOutlineStar />,
      reviewtitle: '4.1 | 50+ reviews',
    },
  ]
  return (
    <div className='wrapper feature_container'>
      <h1>Featured Job Offers</h1>
      <div className='feature_wrap'>     {
        featured.map((item, index) => (
          <Featuredcards imgurl={item.img_url} title={item.title} subtitle={item.subtitle} saveimgurl={item.saveimg_url} reviewicon={item.reviewicon} reviewtitle={item.reviewtitle} actioncta={item.actioncta} />
        ))
      }
      </div>
      <div className='actioncta'><a href="#">All Job Offers <FiChevronRight />   </a></div>
    </div>
  )
}

export default Featured