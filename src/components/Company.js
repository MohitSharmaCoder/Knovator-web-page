import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import './css/Company.css';
import olocation from './img/orange-location.png';
import orangeburd from './img/orange-burd.png'
import company1 from './img/company1.png'
import company2 from './img/company2.png'
import company3 from './img/company3.png'
import company4 from './img/company4.png'
import company5 from './img/company5.png'
import company6 from './img/company6.png'

const Company = () => {
  return (
    <>
      <section className='find-company'>
            <h2>Find Best Company</h2>
            <div className="company-cards">
                <div className="compa-card">
                    <div className="left-co">
                        <img src={olocation} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={orangeburd} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={company6} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={company5} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={company4} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={company3} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={company2} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
                <div className="compa-card">
                    <div className="left-co">
                        <img src={company1} alt="" />
                        <div className="top-co">
                            <h4>pegipegi</h4>
                            <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                        </div>
                    </div>
                    <div className="right-co"><AiOutlineRight/></div>
                </div>
            </div>
      </section>
    </>
  )
}

export default Company
