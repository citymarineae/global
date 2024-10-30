"use client";
// components/ContactForm.tsx
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import apiService from "services/api";
import { Contact } from "types/Contact";
import parse from 'html-react-parser'
import { Element } from "html-react-parser";

type Inputs = {
  name: string
  phone?: string
  email: string
  message: string
};


const ContactForm: React.FC = () => {
  const [contactData, setContactData] = useState<{
    fax: string;
    phone?: string;
    address: string;
    map: string;
  } | null | null>(null);

  const [loading, setLoading] = useState(true)


  async function fetchContactData() {
    setLoading(true);
    try {
      const data: Contact = await apiService.get("/contact-us");
      if (data.contact[0]) {
        const contactData = data.contact[0]
        setContactData(contactData);
      }

      console.log("one news:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchContactData();
  }, []);


  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // You can add form submission logic here
  // };

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("message", data.message)
      if (data.phone) {
        formData.append("phone", data.phone)
      }

      const response = await fetch('/api/send-mail', {
        method: "POST",
        body: formData
      })

      if (response.ok) {
        alert("email send successfully")
        reset()
      } else {
        alert('error in sending email')
      }

    } catch (error) {
      console.log("Error while trying to send email:", error)
    }
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
              <form className="contact-form needs-validation" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="messages"></div>
                <div className="row gx-4">
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        required
                        type="text"
                        id="form_name"
                        placeholder="Jane"
                        className="form-control"
                        {...register("name", { required: "Name is required" })}
                      />
                      <label htmlFor="form_name">Name *</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        placeholder="Doe"
                        id="form_lastname"
                        className="form-control"
                        {...register("phone", { required: false })}
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
                        id="form_email"
                        className="form-control"
                        placeholder="jane.doe@example.com"
                        {...register("email", { required: "Email is required" })}
                      />
                      <label htmlFor="form_email">Email Address *</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                      </div>
                    </div>
                  </div>



                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea
                        required
                        id="form_message"
                        className="form-control"
                        placeholder="Your message"
                        style={{ height: 150 }}
                        {...register("message", { required: "Message is required" })}
                      />

                      <label htmlFor="form_message">Message *</label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        {errors.message && <span className="text-danger">{errors.message.message}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <button type="submit" className="btn rounded-pill btnCty d-flex ms-lg-auto">{isSubmitting ? "Sending Mail" : "Send Message"}<i
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
                    <a href="tel:+97165758800">{contactData?.phone}</a>
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
                    <a href="tel:+97165758878">{contactData?.fax}</a>
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
                      {/* City Marine Insurance Brokers L.L.C <br />
                      Golden Tower, Office # 1701, 1702, 1703 & 1704 <br />
                      P.O Box 26629 <br />
                      Al Majaz 1, Sharjah United Arab Emirates */}
                      {parse(contactData?.address || "")}
                    </address>
                  </article>
                </li>
              </ul>
            </div>
            <div className="contact-main__map mt-auto pb-5 pb-md-0">
              <iframe
                src={contactData?.map}
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
