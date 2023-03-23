export default function Service(){
    return(
        <>
          {/* <!-- ======= Services Section ======= --> */}
            <section id="services" className="services mt-5">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                <p>Project management services specialize in planning, coordinating, and executing projects according to specific requirements and constraints. They perform some or all of the activities related to project work, from conceptualization to completion.</p>
                </div>

                <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                    <h4 className="title"><a href="">Resource Management</a></h4>
                    <p className="description">Better planning of the things and managing the resources</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-file"></i></div>
                    <h4 className="title"><a href="">Documentations</a></h4>
                    <p className="description">Better communication and documentation of the project</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                    <h4 className="title"><a href="">Management of time</a></h4>
                    <p className="description">Better time management as the project details are visible to all the team members</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-layer"></i></div>
                    <h4 className="title"><a href="">Quality Product</a></h4>
                    <p className="description">Better communication and visibility of the project leads to the better product</p>
                    </div>
                </div>

                </div>

            </div>
            </section>
            {/* <!-- End Services Section --> */}
        </>
    )
}