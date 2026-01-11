import Link from "next/link";

export default function Incentives() {
  return (
    <>
      {/* Our Capabilities Section */}
      <div className="bg-[#f4f4f4] py-24 pt-32 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                About Us
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Our Capabilities
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                We are always aiming to exceed customer expectations and provide
                creative solutions to meet any kind of demand. Keeping up with
                the emerging trends, market needs and combining them with our
                technical and creative expertise...
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#db2925] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
                >
                  Learn More
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Image with decorative dot */}
            <div className="relative">
              <img
                alt="Modern building architecture"
                src="/hero-image-desktop.jpg"
                className="w-full h-auto rounded-lg object-cover"
              />
              {/* Decorative red dot */}
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-[#db2925] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 - Holiday Extras */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-80">
                <img
                  src="/hero-image-mobile.jpg"
                  alt="Holiday Extras"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">HOLIDAY EXTRAS</h3>
                  <p className="text-sm font-semibold mb-2">
                    20% OFF EVERYTHING!
                  </p>
                  <p className="text-xs mb-4">YES, YOU READ THAT RIGHT</p>
                  <Link
                    href="/shop"
                    className="text-sm font-semibold border-b border-white hover:border-transparent transition-colors"
                  >
                    SHOP THE EDIT
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 - Jumpsuits & Boiler Suits */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-80">
                <img
                  src="/menu-hero-image.jpg"
                  alt="Jumpsuits & Boiler Suits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">
                    JUMPSUITS & BOILER SUITS
                  </h3>
                  <p className="text-sm font-semibold mb-2">
                    20% OFF EVERYTHING!
                  </p>
                  <p className="text-xs mb-4">YES, YOU READ THAT RIGHT</p>
                  <Link
                    href="/shop"
                    className="text-sm font-semibold border-b border-white hover:border-transparent transition-colors"
                  >
                    SHOP THE EDIT
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 3 - Summer Tops */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-80">
                <img
                  src="/hero-image-desktop.jpg"
                  alt="Summer Tops"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">SUMMER TOPS</h3>
                  <p className="text-sm font-semibold mb-2">
                    20% OFF EVERYTHING!
                  </p>
                  <p className="text-xs mb-4">YES, YOU READ THAT RIGHT</p>
                  <Link
                    href="/shop"
                    className="text-sm font-semibold border-b border-white hover:border-transparent transition-colors"
                  >
                    SHOP THE EDIT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
