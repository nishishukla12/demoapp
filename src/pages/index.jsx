import React from 'react'
import Header from '../components/Header';
import Category from '../components/Category';
import Featured from '../components/Featured';
import Bannerimg from '../components/Banneimg';
import bannerImg from '../assets/bannerImg.png';
import Banner from '../components/Banner';
import Companieslist from '../components/Companieslist';
import Footer from '../components/Footer';
function index() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Featured />
      <Companieslist />
      <Footer />
    </>
  )
}

export default index