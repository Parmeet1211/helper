export default function Home(){
    return(
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex align-items-center">

                <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
                    <h1>Build Better Softwares With Helper</h1>
                    
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    <img src="assets/img/hero-img.png" className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="150"/>
                </div>
            </section>
            {/* <!-- End Hero --> */}
            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-right">
                    <div className="content">
                    <h3>Voluptatem dignissimos provident quasi</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <a href="#" className="about-btn">About us <i className="bx bx-chevron-right"></i></a>
                    </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch" data-aos="fade-left">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i className="bx bx-receipt"></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Ullamco laboris nisi</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i className="bx bx-images"></i>
                        <h4>Labore consequatur</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i className="bx bx-shield"></i>
                        <h4>Beatae veritatis</h4>
                        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
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
            <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">

                <div className="row">

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
                </div>

                </div>

            </div>
            </section>
            {/* <!-- End Clients Section --> */}
            {/* <!-- ======= Features Section ======= --> */}
            <section id="features" className="features" data-aos="fade-up">
            <div className="container">

                <div className="section-title">
                <h2>Features</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row content">
                <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
                    <img src="assets/img/features-1.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-4" data-aos="fade-left" data-aos-delay="100">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</li>
                    </ul>
                </div>
                </div>

                <div className="row content">
                <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                    <img src="assets/img/features-2.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                    <h3>Corporis temporibus maiores provident</h3>
                    <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                </div>

                <div className="row content">
                <div className="col-md-5" data-aos="fade-right">
                    <img src="assets/img/features-3.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5" data-aos="fade-left">
                    <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                    <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                    <ul>
                    <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                    </ul>
                </div>
                </div>

                <div className="row content">
                <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                    <img src="assets/img/features-4.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                    <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                    <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End Features Section --> */}
        </>
    )
}