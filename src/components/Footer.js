import React from 'react';
import '../styles/movie.css';
import { Heading , Paragraph } from '@innovaccer/design-system';
import "@innovaccer/design-system/css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    {/* <h6 className="about-heading">About</h6> */}
                    <Heading color="white"className="about-heading">About</Heading>
                    <Paragraph color="grey" className="text">This is a popular, user editable database application for movies.</Paragraph>
                    <Paragraph color="grey" className="text">Designed and built by Divyanshu, data provided by TMDb</Paragraph>
                </div>
            </div>
            <hr className="horLine"/>
            <div className="footer-bottom">
                <Paragraph color="grey" className="text" >Copyright © 2024 All Rights Reserved by Innovaccer</Paragraph>
            </div>
        </footer>
    );
}

export default Footer;
