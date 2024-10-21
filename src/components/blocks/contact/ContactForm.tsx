"use client";
// components/ContactForm.tsx
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can add form submission logic here
  };

  return (
    <section className="contact-main overflow-hidden">
      <div className="container">
        <div className="row justify-content-between gx-lg-5 contact-main__div">
          <div className="col-lg-6 contact-main__left py-10 py-lg-14">
            <div className="contact-main__head">
              <h2 className="sbttl">
                Want to know more about City Marine Insurance Brokers L.L.C?
              </h2>
              <p>Feel free to contact us, we’re happy to help you</p>
            </div>
            <div className="contact-main__form">
              <form className="contact-form needs-validation" method="post">
                <div className="messages"></div>
                <div className="row gx-4">
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        required
                        type="text"
                        name="name"
                        id="form_name"
                        placeholder="Jane"
                        className="form-control"
                      />
                      <label htmlFor="form_name">Name *</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your first name.{" "}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        required
                        type="text"
                        name="surname"
                        placeholder="Doe"
                        id="form_lastname"
                        className="form-control"
                      />
                      <label htmlFor="form_lastname">Phone Number (optional)</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your last name.{" "}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        required
                        type="email"
                        name="email"
                        id="form_email"
                        className="form-control"
                        placeholder="jane.doe@example.com"
                      />
                      <label htmlFor="form_email">Email Address *</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please provide a valid email address.{" "}
                      </div>
                    </div>
                  </div>

                 

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea
                        required
                        name="message"
                        id="form_message"
                        className="form-control"
                        placeholder="Your message"
                        style={{ height: 150 }}
                      />

                      <label htmlFor="form_message">Message *</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your messsage.{" "}
                      </div>
                    </div>
                  </div>

                  <div className="col">
                  <button type="submit" className="btn rounded-pill btnCty d-flex ms-lg-auto">Send Message<i
                                        className="icbc"></i></button>
                  </div>
                </div>
              </form>

              {/*    <form onSubmit={handleSubmit}>
                <div className="mb-3 mb-lg-10">
                  <input
                    type="text"
                    className="form-control shadow-none rounded-0 border-top-0 border-start-0 border-end-0 border-bottom-1 ps-2"
                    style={{ borderColor: '#cacaca' }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3 mb-lg-10">
                  <input
                    type="tel"
                    className="form-control shadow-none rounded-0 border-top-0 border-start-0 border-end-0 border-bottom-1 ps-2"
                    style={{ borderColor: '#cacaca' }}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (optional)"
                  />
                </div>
                <div className="mb-3 mb-lg-10">
                  <input
                    type="email"
                    className="form-control shadow-none rounded-0 border-top-0 border-start-0 border-end-0 border-bottom-1 ps-2"
                    style={{ borderColor: '#cacaca' }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-5 mb-lg-8">
                  <textarea
                    className="form-control shadow-none rounded-0 border-top-0 border-start-0 border-end-0 border-bottom-1 ps-2"
                    style={{ borderColor: '#cacaca' }}
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn rounded-pill btnCty d-flex ms-lg-auto">
                  Send Message
                  <i className="icbc"></i>
                </button>
              </form> */}
              <div className="contact-main__shape d-none d-lg-block">
                <div className="img-box">
                  <img src="/img/icons/shape-down.svg" alt="shape" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 contact-main__right p-md-0 mb-10 mb-md-0">
            <div className="contact-main__info px-0 pt-8 pb-6 p-lg-10 p-xl-12 ps-xl-14">
              <div className="contact-main__info-shape d-none d-lg-block">
                <img
                  src="/img/icons/shape-up.svg"
                  width="100"
                  height="100"
                  alt="Shape"
                />
              </div>
              <ul className="list-unstyled">
                <li>
                  <img
                    src="/img/icons/phone.svg"
                    width="16"
                    height="16"
                    alt="Phone Number"
                  />
                  <article>
                    <span>Phone</span>
                    <a href="tel:+97165758800">+971 6 5758 800</a>
                  </article>
                </li>
                <li>
                  <img
                    src="/img/icons/fax.svg"
                    width="16"
                    height="16"
                    alt="Fax"
                  />
                  <article>
                    <span>Fax</span>
                    <a href="tel:+97165758878">+971 6 5758 878</a>
                  </article>
                </li>
                <li>
                  <img
                    src="/img/icons/map-icon.svg"
                    width="16"
                    height="16"
                    alt="Location"
                  />
                  <article>
                    <span>Address</span>
                    <address>
                      City Marine Insurance Brokers L.L.C <br />
                      Golden Tower, Office # 1701, 1702, 1703 & 1704 <br />
                      P.O Box 26629 <br />
                      Al Majaz 1, Sharjah United Arab Emirates
                    </address>
                  </article>
                </li>
              </ul>
            </div>
            <div className="contact-main__map mt-auto pb-5 pb-md-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9079267963302!2d55.383108975386385!3d25.34087047761882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bc2ec95ccb5%3A0xc03be5efbd8a8332!2sCity%20Marine%20Insurance%20Brokers%20LLC!5e0!3m2!1sen!2sin!4v1726654539694!5m2!1sen!2sin"
                width="600"
                height="300"
                style={{ border: 0 }}
                className="d-block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
