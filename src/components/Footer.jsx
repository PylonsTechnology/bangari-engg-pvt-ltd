const Footer = () => {
    return (
        <footer className="relative bg-[#3D3C3A] text-white py-12">
        <div className="absolute inset-0 bg-[#3D3C3A] bg-opacity-80"></div>
      
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">BANGARI ENGINEERING PVT LTD</h2>
            <p className="mt-2 text-gray-300">
              Heavy Industrial Area, Bhilai, Durg, Chhattisgarh, 490023
            </p>
            <p className="mt-1 text-gray-300">Email: murthy.raman1983@gmail.com</p>
            <p className="mt-1 text-gray-300">Mobile: 9770807344, 9755180066</p>
          </div>
      
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-red-400">Home</a></li>
              <li><a href="#" className="hover:text-red-400">About Us</a></li>
              <li><a href="#" className="hover:text-red-400">Services</a></li>
              <li><a href="#" className="hover:text-red-400">Contact</a></li>
            </ul>
          </div>
      
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="hover:text-red-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-red-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-red-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-red-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      
        {/* Copyright */}
        <div className="relative text-center text-gray-400 text-sm mt-8">
          © 2025 BANGARI ENGINEERING PVT LTD. All Rights Reserved.
        </div>
      </footer>
      
    );
  };
  
  export default Footer;
  