import React from 'react'
import './css/Co.css';
import sekolah from './img/sekolah_logo.png';
import aws from './img/aws_logo.png';
import arju from './img/arjuna_logo.png';
import indv from './img/indiv_logo.png';
import phone from './img/phone-big-view.png';

const Co = () => {
  return (
    <>
      <section className='Company-brand-detail'>
        <h2>hekjrkehr <span>434+</span> comomsdf</h2>
        <div className="brand-boxes">
            <div className="brand">
                <img src={sekolah} alt="" />
                <img src={aws} alt="" />
                <img src={arju} alt="" />
                <img src={indv} alt="" />
                <img src={sekolah} alt="" />
            </div>
        </div>
      </section>
      <section className='big-image'>
        <img src={phone} alt="" />
      </section>
    </>
  )
}

export default Co
