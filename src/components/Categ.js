import React from 'react'
import './css/Categ.css'
import rarr from './img/right-blue.png'
import zig from './img/zig.png'
import scal from './img/scal.png'
import brack from './img/brack.png'
import c4 from './img/c4.png'

const Categ = () => {
    return (
        <>
            <section className="main-section">
                <div className="all-cate-section">
                    <h2>Search By Category</h2>
                    <div className="cate-right">
                        <select name="" id=""> All Categories
                            <option value="All Categories">All Categories</option>
                        </select>
                        <div className="right-arr"><img src={rarr} alt="" /></div>
                    </div>
                </div>
                <div className="container-box">
                    <div className="con-box">
                        <img className='box-icon' src={zig} alt="" />
                        <div className="box-text">
                            <h3>Business Development</h3>
                            <p>2 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={scal} alt="" />
                        <div className="box-text">
                            <h3>Business Development</h3>
                            <p>2 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={brack} alt="" />
                        <div className="box-text">
                            <h3>Designing</h3>
                            <p>3 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={c4} alt="" />
                        <div className="box-text">
                            <h3>Development</h3>
                            <p>2 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={c4} alt="" />
                        <div className="box-text">
                            <h3>Content writer</h3>
                            <p>2 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={brack} alt="" />
                        <div className="box-text">
                            <h3>Content writer</h3>
                            <p>2 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={zig} alt="" />
                        <div className="box-text">
                            <h3>Development</h3>
                            <p>3 openings</p>
                        </div>
                    </div>
                    <div className="con-box">
                        <img className='box-icon' src={scal} alt="" />
                        <div className="box-text">
                            <h3>Business Development</h3>
                            <p>2 openings</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categ
