import Image from "next/image";

export default function Header({ businessName }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#ff4d4d]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo_euUma-iDk93XdBhFz9GMlo-qIggoT5JA&s"
              alt="Fit Fast Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-cover rounded-full"
              priority
            />
            <h1 className="text-2xl font-bold tracking-tight text-[#ffffff]">
              {businessName}
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-[#ffffff] hover:text-[#ff4d4d] transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-[#ffffff] hover:text-[#ff4d4d] transition-colors font-medium">
                Programs
              </a>
              <a href="#gallery" className="text-[#ffffff] hover:text-[#ff4d4d] transition-colors font-medium">
                Facility
              </a>
              <a href="#contact" className="text-[#ffffff] hover:text-[#ff4d4d] transition-colors font-medium">
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-[#ff4d4d] text-white rounded-full hover:bg-[#ff3333] transition-all hover:scale-105 hover:shadow-lg font-medium text-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 