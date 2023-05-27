import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();
    const [sumbiting, changeSubmit] = useState(false);

  const sendEmail = (e) => {
    changeSubmit(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vr9milh",
        "template_xfi51zw",
        form.current,
        "-NSKt9mjtMMAwH5Mz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SENT!");
          changeSubmit(false);
          document.getElementById('name').value = '';
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <div class="container">
        <div class="col align-self-center">
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="user_name"
                class="form-control"
                id="name"
                placeholder="enter your name"
                required
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="user_email"
                class="form-control"
                id="email"
                placeholder="enter your email"
                required
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="user_subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
                required
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                name="message"
                class="form-control"
                id="message"
                rows="5"
                required
              ></textarea>
              {sumbiting && (
                <input
                  type="submit"
                  className="no-click"
                  value="Submiting..."
                />
              )}
              {!sumbiting && <input type="submit" value="Submit" />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
