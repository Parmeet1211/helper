import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <>
        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">

            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Helper</h3>
                    <p>
                    A108 Janak Puri <br/>
                    New Delhi, DL 535022<br/>
                    India <br/><br/>
                    <strong>Phone:</strong> +91 7589 55488 5<br/>
                    <strong>Email:</strong> info@example.com<br/>
                    </p>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Join Our Newsletter</h4>
                    <p></p>
                    <form action="" method="post">
                    <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                    </form>
                </div>

                </div>
            </div>
            </div>

            <div className="container d-md-flex py-4">

            <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                &copy; Copyright <strong><span>Helper</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                Designed by <Link >Helper</Link>
                </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            </div>
        </footer>
        {/* <!-- End Footer --></br> */}
        </>
    )
}
            

    