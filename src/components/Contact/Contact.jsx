import React, { useRef, useState } from "react";
import { contactDetail } from "../../data/constants";
import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";

function Contact() {
  const [activeLabel, setActiveLabel] = useState("");
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_emux3fs", "template_o54layb", form.current, {
      publicKey: "bzj7XofiRWUJhFwDn",
    });
  };

  return (
    <section id="contact">
      <div className="contact__container">
        <div className="contact__top">Contact me</div>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">{contactDetail.description}</p>

            <div className="info">
              {contactDetail.infos.map((info, index) => (
                <div key={index} className="information">
                  <i className={`${info.icon} icon`}></i>
                  <p>{info.label}</p>
                </div>
              ))}
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                {contactDetail.socials.map((social, index) => (
                  <a key={index} target="_blank" href={social.value}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} onSubmit={sendMail} autoComplete="off">
              {contactDetail.fields.map((field, index) =>
                field.element !== "textarea" ? (
                  <div key={index} className={`input-container`}>
                    <TextField
                      id="outlined-basic"
                      label={field.label}
                      variant="outlined"
                      className={
                        field.element === "textarea" ? "contact-textarea" : ""
                      }
                    />
                  </div>
                ) : (
                  <div key={index} className={`input-container`}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label={field.label}
                      multiline
                      minRows={4}
                      maxRows={4}
                    />
                  </div>
                )
              )}
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
