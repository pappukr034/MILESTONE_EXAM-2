import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h5 className="font-bold text-lg">Movie search App</h5>
            <p>© 2024 My Movie search App. All rights reserved.</p>
          </div>
          <p>PAPPU KUMAR</p>
          <div className="text-center">
            <a href="#" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
