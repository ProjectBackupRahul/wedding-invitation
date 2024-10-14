import React from 'react';
import '../OurStory.css';

import aiburobhat from '../images/aiburobhat.jpg'
import ashirbad from '../images/ashirbad.jpg'
import haldi from '../images/haldi.jpg'
import bibaha from '../images/hastabandhan.jpeg'
import badubaran from '../images/badubaron.jpg'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">     
                        <div className="heading">
                            <span> </span>
                            <h2 className="title">The Ceremony</h2>
                            <h4>To love a person is to see all of their magic, and to remind them of it when they have forgotten.</h4>
                            <h4>Ah, life grows lovely where you are.</h4>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${ashirbad})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Ashirbad (আশীর্বাদ) </h4>
                                        <span className="date">November 26, 2024 : Morning </span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>The ritual where the bride and groom are blessed by elders with rice and grass for a prosperous and happy married life.</p>
                                    </div>
                                </div>
                            </li>

                            
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${aiburobhat})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Aiburobhat (আইবুড়োভাত)</h4>
                                        <span className="date"><i className="icon icon-date"></i>November 26, 2024 : Evening  </span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>The ritual where the bride or groom enjoys their last meal as an unmarried person, surrounded by family and friends, signifying the end of their bachelorhood.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${haldi})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title"> Haldi Ceremony (গায়ে হলুদ)  </h4>
                                        <span className="date">November 27, 2024 : Morning</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>In Bengali wedding involves applying turmeric paste to the bride and groom for purification and enhancing their beauty, symbolizing the start of their wedding rituals.</p>
                                    </div>
                                </div>
                            </li>

                            
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${bibaha})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">Subha Bibaha (শুভ বিবাহ)</h4>
                                        <span className="date"><i className="icon icon-date"></i>November 27, 2024 :Evening</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>
                                        Subha Bibaha is the auspicious Bengali wedding ceremony where traditional rituals unite the bride and groom in a sacred bond of marriage, blessed by family and the divine.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${badubaran})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title"> Reception (বধূ বরণ) </h4>
                                        <span className="date">November 29, 2024: :Evening</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>The Reception in a Bengali wedding is a celebratory event where the bride is warmly welcomed into her new family, and guests gather to feast and bless the newlywed couple.</p>
                                    </div>
                                </div>
                            </li>
                              
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;