'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/arw3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                <h3>
                  Transforming Ideas into <br /> Powerful Digital Experiences.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Creative Strategy with Clear Objectives</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Kami memulai setiap proyek dengan pemahaman mendalam terhadap tujuan, audiens, 
                      dan pesan utama klien. Setiap konsep dirancang strategis agar tidak hanya menarik 
                      secara visual, tetapi juga tepat sasaran dan berdampak.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Professional & Multidisciplinary Team</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Didukung oleh tim berpengalaman di bidang event production, web development, 
                      dan broadcast, kami bekerja secara terintegrasi untuk memastikan setiap detail 
                      dieksekusi secara profesional dan konsisten.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>End-to-End Execution & Collaboration</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Dari perencanaan hingga pelaksanaan, kami mengelola seluruh proses secara menyeluruh. 
                      Kami percaya kolaborasi yang solid dengan klien adalah kunci untuk menghasilkan 
                      karya yang kuat, relevan, dan berkesan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
