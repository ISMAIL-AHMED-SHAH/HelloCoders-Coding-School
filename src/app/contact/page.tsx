'use client';

import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-50">Contact Us</h1>
                <p className="text-lg mb-6">
                    You can reach us at{" "}
                    <a href="mailto:ismailahmedshahpk@gmail.com" className="underline text-blue-400 hover:text-blue-300">
                        ismailahmedshahpk@gmail.com
                    </a>{" "}
                    or call us at{" "}
                    <a href="tel:+923322241405" className="underline text-blue-400 hover:text-blue-300">
                        +923322241405
                    </a>.
                </p>
                <h2 className="text-2xl font-bold mb-4 text-gray-50">Connect with us on social media</h2>
                <div className="flex space-x-6 justify-center">
                    <a href="https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="https://github.com/ISMAIL-AHMED-SHAH" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                        <FaGithub className="text-3xl" />
                    </a>
                    <a href="https://wa.me/+923322241405" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                        <FaWhatsapp className="text-3xl" />
                    </a>
                    <a href="https://www.instagram.com/ahmedshahismail?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                        <FaInstagram className="text-3xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
