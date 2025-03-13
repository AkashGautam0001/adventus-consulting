import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-subheading">About Us</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              Adventus Consulting is a premier hospitality consulting firm,
              specializing in creating successful hospitality assets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-subheading">Quick Links</h3>
            <ul className="space-y-2 font-body">
              {["Home", "About Us", "Services", "Projects"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-300 hover:text-white transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-subheading">Contact Us</h3>
            <p className="text-gray-300 font-body">
              Email:{" "}
              <a
                href="mailto:sameer.d.singh@adventusconsulting.in"
                className="hover:text-white"
              >
                sameer.d.singh@adventusconsulting.in
              </a>
            </p>
            <p className="text-gray-300 font-body">Phone: +91 12345 67890</p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-subheading">Follow Us</h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin"].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-secondary text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <i className={`fab fa-${platform} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-gray-300 font-body text-sm">
          <p>
            &copy; {new Date().getFullYear()} Adventus Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
