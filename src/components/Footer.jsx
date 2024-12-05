function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">DevelMo</span>
            </div>
            <p className="text-sm text-gray-400">
              DevelMo™ helps companies build, deploy, and scale Visual AI
              solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {[
                { name: "Our Vision", link: "/build-your-vision" },
                { name: "Contact Us", link: "/build-your-vision" },
                { name: "Industry", link: "/industry" },
              ].map((item) => (
                <li key={item}>
                  <a
                    href={item.link}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { name: "CrowdIQ", link: "/crowdiq" },
                { name: "OmniRoad 2.0", link: "/omniroad" },
              ].map((item) => (
                <li key={item}>
                  <a
                    href={item.link}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
