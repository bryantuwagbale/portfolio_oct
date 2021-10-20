import "./contact.css"
import Phone from "../../img/phone-call.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef } from "react"
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSumbit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_tai2g4s',
         'template_w3phccg',
         formRef.current,
         'user_rU6xEVTY3Dq4F90JWJJqT')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Reach out</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img 
                                src={Phone}
                                alt="" 
                                className="c-icon" 
                                />
                                (832) 499-4543
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img 
                                src={Email}
                                alt="" 
                                className="c-icon" 
                                />
                                bryant.uwagbale@gmail.com
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img 
                                src={Address}
                                alt="" 
                                className="c-icon" 
                                />
                                Houston, Texas
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
<p className="c-desc">
    <b>What can we build together?</b> Shoot me an idea and I'll get back to you with a plan.
</p>
<form ref={formRef} onSubmit={handleSumbit}>
    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
    <button>Submit</button>
    {done && " Thanks, I'll get back toy you soon!"}
</form>
</div>
                </div>
            
        </div>
    )
}

export default Contact


