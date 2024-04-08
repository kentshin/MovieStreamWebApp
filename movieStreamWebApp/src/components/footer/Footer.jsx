import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/contentWrapper";

import "./footer_style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                The content provided on this website,is for general informational purposes only.
                While we strive to keep the information up to date and accurate,
                we make no representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability,
                or availability with respect to the website or the information, services,
                or related graphics contained on the website for any purpose.
                <br></br>
                Through this website, you can link to other websites that are not under the control of the creator.
                We have no control over the nature, content, and availability of those sites.
                <br/><br/>
                Created by KNJ @2024.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
