import React,{useState} from "react";
import './qualification.css'
import {certificates} from './certificates';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Qualification = ()=>{
    const [toggleState,setToggleState] = useState(3);
    const toggleTab = (index)=>{
        setToggleState(index);
    }

    return(
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                
                <div className="qualification__tabs">
                    
                    <div 
                    className={
                        toggleState === 1 ?
                        "qualification__button qualification__active button--flex"
                        :
                        "qualification__button button--flex"
                    }
                    onClick={()=>{toggleTab(1)}}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 3 ?
                        "qualification__button qualification__active button--flex"
                        :
                        "qualification__button button--flex"
                    }
                    onClick={()=>{toggleTab(3)}}
                    >
                        <i className="bx bx-certification qualification__icon"></i>
                        Certifications
                    </div>

                    <div className={
                        toggleState === 2 ?
                        "qualification__button qualification__active button--flex"
                        :
                        "qualification__button button--flex"
                    }
                    onClick={()=>{toggleTab(2)}}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    
                    <div className={toggleState === 1 ? 
                    "qualification__content qualification__content-active"
                    :
                    "qualification__content"}>

                        <div className="qualification__data">
                            
                            <div>
                            <h3 className="qualification__title">BS Computer Science</h3>
                            <span className="qualification__subtitle">
                                Sukkur IBA University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2020 - 2024
                            </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            

                        </div>
                        {/*
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                            <h3 className="qualification__title">Artificial Intelligence</h3>
                            <span className="qualification__subtitle">
                                Sukkur IBA University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - Present
                            </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            
                            <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">
                                Sukkur IBA University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - Present
                            </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">
                                Sukkur IBA University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - Present
                            </div>
                            </div>

                        </div>
                        */}
                    </div>

                    <div className={toggleState === 2 ? 
                    "qualification__content qualification__content-active"
                    :
                    "qualification__content"}>

                        <div className="qualification__data">
                            
                            <div>
                            <h3 className="qualification__title">Uvovorp</h3>
                            <span className="qualification__subtitle">
                                Expert Writer (Computer Science)
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - 2024
                            </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        {/*
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">
                                Sukkur IBA University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - Present
                            </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            
                            <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">
                                Sukkur IBA University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2023 - Present
                            </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        */}
                    </div>
                    
                    <div className={toggleState === 3 ? 
                    "qualification__content qualification__content-active certificate"
                    :
                    "qualification__content"}>
                        <Swiper className="qualification__data "
                        effect={'coverflow'}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        //pagination={true}
                        modules={[EffectCoverflow, Pagination]}>
                        {certificates.map(({id, image})=>{
                        return(
                        <SwiperSlide className="" key={id}>
                        <img src={image} alt="" className="" />
                        </SwiperSlide>
                        );
                        })}

                        </Swiper>
                        
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Qualification;