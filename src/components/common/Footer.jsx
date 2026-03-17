/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2 max-w-7xl mx-auto px-4">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <h1 className="text-3xl font-bold text-primary">DateForRent</h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Find the perfect date for any occasion. Whether it's Valentine's Day, a wedding, or just a fun night out, we've got you covered!
              </p>
              <div className="gap-5 my-6 flex-center-center">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaFacebook />
                </div>
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Matchmaking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Date Planning</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Privacy & Safety</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Customer Support</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> About Us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">How It Works</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Our Mission</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Safety Guidelines</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Stay updated on exclusive offers, matchmaking tips, and more!
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
          Created by <span className="text-primary">Alexa Kyle Poblacion</span> | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
