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
                <p>Successful project managers have loads of responsibilities – running meetings, planning and scheduling, managing resources and budgets, and analyzing reports to name a few. On a busy day, the workload becomes quite overwhelming. To automate time-consuming tasks and run a large team of professionals, managers need the best project management software solution.</p>
                </div>

                <div className="row content">
                <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
                    <img src="assets/img/features-1.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-4" data-aos="fade-left" data-aos-delay="100">
                    <h3>Planning and scheduling</h3>
                    <p className="fst-italic">
                    When managing a team, it is highly important to have everyone’s tasks and responsibilities outlined and visible. Helping to avoid misunderstandings and knowing who to delegate new tasks.
                    </p>
                    <ul>
                    <li><i className="bi bi-check"></i> Time slot view gives an overview of how many hours and tasks have been booked for each team member, showing the unscheduled time slots</li>
                    <li><i className="bi bi-check"></i> You’ll get insight to whom assign new tasks in the next step of a project</li>
                    <li><i className="bi bi-check"></i> Quick overview of everyone’s tasks and unscheduled time helps to set realistic deadlines and to avoid overbooking people</li>
                    </ul>
                </div>
                </div>

                <div className="row content">
                <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                    <img src="assets/img/features-2.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                    <h3>Collaboration</h3>
                    <p className="fst-italic">
                    A large project team may consist of tens or hundreds of people, each working on specific tasks and having expert knowledge in a different field.
                    </p>
                    <p>
                    Insert your clients’ contact information and link projects and invoices to customer profiles. Later, you can quickly manage and organize your customers by different categories such as companies with due invoices, people waiting for your product, or even trustworthy partners.
                    </p>
                </div>
                </div>

                <div className="row content">
                <div className="col-md-5" data-aos="fade-right">
                    <img src="assets/img/features-3.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5" data-aos="fade-left">
                    <h3>Reporting</h3>
                    <p>To successfully manage your projects, you need to be aware of the shortcomings and problems that require a quick solution. To obtain a thorough overview of your project progress, you need at least two features – insightful reports and a KPI dashboard.</p>
                    <ul>
                    <li><i className="bi bi-check"></i> Customizable reports</li>
                    <li><i className="bi bi-check"></i> Project KPI dashboard</li>
                    <li><i className="bi bi-check"></i> Shared team dashboard</li>
                    </ul>
                </div>
                </div>

                <div className="row content">
                <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                    <img src="assets/img/features-4.png" className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                    <h3>Resource management</h3>
                    <p className="fst-italic">
                    It’s not only your team’s time needs to be managed. You probably need a tool for keeping track of other project resources: for example, meeting rooms, and materials used in the project process.
                    </p>
                    <p>
                    A great project management tool includes a feature for resource management, outlining all the scheduled and planned resources and calculating the cost of their use. This helps to avoid over-assignments and possible conflicts for lacking resources.
                    </p>
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End Features Section --> */}
        </>
    )
}