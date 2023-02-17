import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-800 text-white rounded">
            <h2 className='text-3xl'>Let's Connect</h2>
            <div className='flex justify-start text-3xl space-x-2 my-4'>
                <a href="https://github.com/anamul-github" target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/anamul-hasan/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://www.facebook.com/profile.php?id=100082589681211" target="_blank" rel="noreferrer"><BsFacebook /></a>
            </div>
            <div>
                <p>Copyright ©2023 - All right reserved by Anamul Hasan</p>
            </div>
        </footer>
    );
};

export default Footer;