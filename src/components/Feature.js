import React from 'react'
import './css/Feature.css';
import warr from './img/white-arr.png';
import olocation from './img/orange-location.png';
import heartline from './img/heart-line.png';
import bag from './img/bag-fe.png';
import location from './img/location-img.png'
import { AiFillStar } from 'react-icons/ai';
import orangeburd from './img/orange-burd.png'
import company1 from './img/company1.png'
import company2 from './img/company2.png'
import company3 from './img/company3.png'
import company4 from './img/company4.png'
import company5 from './img/company5.png'
import company6 from './img/company6.png'

const Feature = () => {
  return (
    <>
      <section className='feature-section'>
        <h2>Featured Job Offers</h2>
        <div className="feature-boxes">
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={olocation} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart col-bo">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart col-bo">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={orangeburd} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={company1} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={company2} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={company3} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={company4} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={company5} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
            <div className="feature-box">
                <div className="simble-img">
                    <div className="left-co">
                        <img src={company6} alt="" />
                        <h3>Tech Rorkie internship</h3>
                    </div>
                    <div className="heartline"><img src={heartline} alt="" /></div>
                </div>
                <div className="company-de">
                    <h5> Pt Midos Doya Technology</h5>
                    <p><div className="star"><AiFillStar/></div> <div>4.1 | 50+ reviews</div></p>
                </div>
                <div className="company-requirement">
                    <div className="require-left">
                    <div className="bag-cart">
                        <img src={bag} alt="" />
                        Fresher
                    </div>
                    <div className="loca-cart">
                        <img src={location} alt="" />
                          Jakara
                    </div>
                    </div>
                    <div className="require-right">23hours ago</div>
                </div>
                <ul className='fe-ulli'>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    <p>Django . python . SQL . JAVA</p>
                </ul>
                <button className='feature-button'>Apply Now <img src={warr} alt="" /></button>

            </div>
        </div>
        
        <button className='feature-button'>All Job Offers <img src={warr} alt="" /></button>
      </section>
    </>
  )
}

export default Feature
