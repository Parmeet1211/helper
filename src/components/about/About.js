export default function About(){
    return(
        <>
            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-right">
                    <div className="content">
                    <h3>The power of teamwork</h3>
                    <p>
                    Behind every great human achievement, there is a team. 

                    From medicine and space travel, to disaster response and pizza deliveries, our products help teams all over the planet advance humanity through the power of software.Our mission is to help unleash the potential of every team.
                    </p>
                    <a href="#" className="about-btn">About us <i className="bx bx-chevron-right"></i></a>
                    </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch" data-aos="fade-left">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i className="bx bx-receipt"></i>
                        <h4>Taking the 1% Pledge</h4>
                        <p>We've joined forces with leading companies around the world to donate 1% of equity, profit, employee time, and software licenses to the community.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i className="bx bx-cube-alt"></i>
                        <h4>A vision for foundation</h4>
                        <p>We created the Helper Foundation to help make the world a better place by partnering with local organizations and global ones like Room to Read.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i className="bx bx-images"></i>
                        <h4>Join the ultimate team</h4>
                        <p>Everyone is encouraged to bring their truest, most authentic selves to work. We embrace diversity and are committed to providing a space free of discrimination for everyone.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i className="bx bx-shield"></i>
                        <h4>Corporate social responsibility</h4>
                        <p>Helper is built to be open, inclusive, fair, and just. When we face tough questions about ethics, people, or the planet, we let those principles guide us.</p>
                        </div>
                    </div>
                    </div>
                    {/* <!-- End .content--> */}
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End About Section --> */}
    {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" class="clients">
            <div class="container" data-aos="zoom-in">

                <div class="row">

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-1.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-2.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-3.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-4.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-5.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-6.png" class="img-fluid" alt=""/>
                    </div>

                </div>

            </div>
        </section>
            {/* <!-- End Clients Section --> */}
        </>
    )
}