import React from "react";
import Companiescard from "./CompaniescardComponent"
import { AiOutlineStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import Img1 from '../assets/img1.png';
import Awslogo from '../assets/aws_logo.png';
import arjunlogo from '../assets/arjuna_logo.png';
import sekloko from '../assets/sekolah_logo.png';
import indivlogo from '../assets/indiv_logo.png';
import bannrimg from '../assets/downbannerimg.png';
import Kompas from '../assets/kompas.png';
import Awos from '../assets/avows.png';
import Lalamove from '../assets/lalamove.png';

function Companieslist() {
    const Companieslisting = [
        {
            img_url: Img1,
            title: 'Pegipegi',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Kompas,
            title: 'Kompas Group',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Awos,
            title: 'Group Avows',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Lalamove,
            title: 'Lalamove',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'PT Midas Daya Teknologi',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'Siemens',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'eFishery',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'Cermati',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'Whiz (YC W22)',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'JULO',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'UOB',
            subtitle: '4.9 | 50+ reviews',
        },
        {
            img_url: Img1,
            title: 'Logisly',
            subtitle: '4.9 | 50+ reviews',
        },
    ]
    return (
        <div className="wrapper companies_container">
            <h1>Find Best Companies</h1>
            <div className='companieslist_wrap'>     {
                Companieslisting.map((item, index) => (
                    <Companiescard imgurl={item.img_url} title={item.title} subtitle={item.subtitle} />
                ))
            }
            </div>
            <div className="compamies_name-wrap">
                <h2>We've helped <span>2000+</span> world's best companies</h2>
                <ul>
                    <li><img src={Awslogo} /></li>
                    <li><img src={arjunlogo} /></li>
                    <li><img src={sekloko} /></li>
                    <li><img src={indivlogo} /></li>
                </ul>
                <div className="companies_banner">
                    <img src={bannrimg} />
                </div>
            </div>
        </div>
    )
}
export default Companieslist;