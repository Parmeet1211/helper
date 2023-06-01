import { useState } from "react"
import ApiServices from "../../apiservice/ApiServices"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Contact(){

    const [ name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [description,setDescription] = useState("")

    const formHandle = (e) =>{
        e.preventDefault()
        let data={
            name : name,
            email : email,
            subject : subject,
            description : description
        }
        // console.log(data)
        ApiServices.addContact(data).then(
            x=>{
                // console.log(x)
                if(x.data.success){
                    toast.success(x.data.msg)
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        )
    }
    return(
        <>
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact section-bg my-5">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Contact</h2>
                <p></p>
                </div>

                <div className="row">

                <div className="col-lg-6">

                    <div className="row">
                    <div className="col-md-12">
                        <div className="info-box">
                        <i className="bx bx-map"></i>
                        <h3>Our Address</h3>
                        <p>A108 Janak Puri, New Delhi, DL 535022</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box mt-4">
                        <i className="bx bx-envelope"></i>
                        <h3>Email Us</h3>
                        <p>info@example.com<br/>contact@example.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box mt-4">
                        <i className="bx bx-phone-call"></i>
                        <h3>Call Us</h3>
                        <p>+91 5589 55488 5<br/>+91 6678 254445 4</p>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="col-lg-6 mt-4 mt-md-4">
                    <form onSubmit={formHandle}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    </div>
                    {/* <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div> */}
                    <div className="text-center mt-4 "><button type="submit" className="btn btn-primary">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
            </section>
            {/* <!-- End Contact Section --> */}
            <ToastContainer/>
        </>
    )
}