import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "./Contact.css";
import { useGlobalContext } from "../context";

function Contact() {
  const { google_api_key } = useGlobalContext();

  return (
    <section className="contact-section">
      <article className="contact-article">
        <h2 className="contact-h2">Contact us</h2>
        <p className="contact-p bold">Our address:</p>
        <p className="contact-p">
          Russia, Moscow, Gorbunova street, 2str3, B312
        </p>
        <p className="contact-p bold">Email:</p>
        <p className="contact-p">info@locstosee.com</p>
        <p className="contact-p bold">Phone:</p>
        <p className="contact-p">8 800 000 00 00</p>
        <form className="contact-form">
          <h2 className="contact-h2">Send message:</h2>
          <label htmlFor="name" className="contact-label">
            Name:
          </label>
          <input type="name" id="name" className="contact-input" />
          <label htmlFor="email" className="contact-label">
            Email:
          </label>
          <input type="email" id="email" className="contact-input" />
          <label htmlFor="message" className="contact-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            cols="40"
            rows="10"
            className="contact-textarea"
          ></textarea>
          <button className="contact-btn">Send message</button>
        </form>
      </article>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: google_api_key,
            language: "ru",
            region: "ru",
          }}
          defaultZoom={14}
          defaultCenter={[55.72629577100727, 37.3991615043706]}
        >
          <Marker
            key="1"
            text="Our office"
            lat="55.72629577100727"
            lng="37.3991615043706"
          />
        </GoogleMapReact>
      </div>
    </section>
  );
}

export default Contact;
