'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Trusted Services</h6>
              <h3 className="mb-30">
                The service we offer is specifically designed to meet your
                needs.
              </h3>
              <p>
                Driven professional dedicated to making a lasting impact through
                innovative solutions and unwavering excellence.
              </p>
              <a
                href="/page-about"
                className="butn-crev d-flex align-items-center mt-40"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">Learn more</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/5.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Web & Software developer</h5>
                    <p>
                      Custom website & Apps development focused on performance, reliability, 
                      and clear information delivery to support organizational and event communication needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/7.png"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Show Management</h5>
                    <p>
                      Comprehensive show management services including stage coordination, 
                      technical control, and operational supervision for live and hybrid events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/6.png"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Produksi Event</h5>
                    <p>
                      End-to-end event production services covering planning, technical execution, 
                      and on-site coordination to ensure events run professionally, smoothly, and on schedule..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Feat;
