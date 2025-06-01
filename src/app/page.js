import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Dumbbell,
  Trophy,
  Smile,
  Instagram,
  Facebook,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import GallerySlider from "@/components/GallerySlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import MenuSlider from "@/components/MenuSlider";

// Business Data from JSON
const businessData = {
  name: "Fit Fast",
  image_url: "",
  rating: null,
  review_count: 0,
  category: "Personal trainer",
  business_age: "Professional Fitness Training",
  closing_time: "⋅ Open 24/7",
  location: "Montgomery, AL",
  address: "Montgomery, AL",
  phone: "+13345388537",
  services: "Personal Training · Group Classes",
  website_url: "",
  directions_url: "",
  call_url: "+13345388537",
  menu_url: "",
  order_urls: [
    "https://booking.com/",
    "https://calendly.com/",
    "https://appointment.com/"
  ],
  price_range: "$30–100",
};

// Gym Services/Menu
const services = [
  // Personal Training
  {
    title: "One-on-One Training",
    description: "Personalized workout plans and guidance.",
    price: "$60/session",
    category: "Personal Training",
  },
  {
    title: "Group Training",
    description: "High-energy group workout sessions.",
    price: "$30/session",
    category: "Personal Training",
  },
  {
    title: "Nutrition Planning",
    description: "Customized meal and nutrition plans.",
    price: "$50/plan",
    category: "Personal Training",
  },
  // Fitness Classes
  {
    title: "HIIT Workout",
    description: "High-intensity interval training.",
    price: "$25/class",
    category: "Fitness Classes",
  },
  {
    title: "Strength Training",
    description: "Build muscle and increase strength.",
    price: "$30/class",
    category: "Fitness Classes",
  },
  {
    title: "Cardio Blast",
    description: "Intense cardio workout session.",
    price: "$25/class",
    category: "Fitness Classes",
  },
  // Special Programs
  {
    title: "Weight Loss Program",
    description: "Comprehensive weight loss program.",
    price: "$200/month",
    category: "Special Programs",
  },
  {
    title: "Muscle Building",
    description: "Specialized muscle gain program.",
    price: "$250/month",
    category: "Special Programs",
  },
  {
    title: "Fitness Assessment",
    description: "Complete body composition analysis.",
    price: "$40",
    category: "Special Programs",
  },
];

// Gym Gallery Images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Fit Fast gym interior",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMs965FXLVd1KJDEk9-hHTn-J9UODz_1cSpYdpn=s1360-w1360-h1020-rw",
    alt: "Personal training session",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOflM9MtOG9eyswi7P3pmKXojMRhlxvteeG_G7a=s1360-w1360-h1020-rw",
    alt: "Group fitness class",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPfO8ZRvCzBTzRRJ0UWyW07bsr4ap8vhhj27jzY=s1360-w1360-h1020-rw",
    alt: "Weight training area",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOQ9aVUS7_Tg77BVUjEjL90bjGfxf6OuofleVpe=s1360-w1360-h1020-rw",
    alt: "Cardio equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Fitness assessment",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#ffffff]">
      <Header businessName={businessData.name} />

      {/* Hero Section */}
      <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
        {/* Background Image with darker overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Fit Fast gym interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#000000]/80" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="space-y-6 sm:space-y-8 animate-fade-in max-w-2xl">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg ">
                <span className="block text-[#ff4d4d] text-3xl sm:text-4xl lg:text-5xl">Welcome to</span>
                <span className="block text-white text-opacity-95 mt-1 sm:mt-2 bg-gradient-to-r from-[#ff4d4d] to-[#ff8533] bg-clip-text text-transparent">
                  {businessData.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium tracking-wide text-[#ffffff] border-l-4 border-[#ff4d4d] pl-3 sm:pl-4 py-1 sm:py-2">
                {businessData.category}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#ff4d4d]" />
                  <span className="text-[#ffffff] text-sm sm:text-base">{businessData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#ff4d4d]" />
                  <span className="text-[#ffffff] text-sm sm:text-base">{businessData.closing_time}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${businessData.call_url}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#ff4d4d] text-white rounded-full hover:bg-[#ff3333] transition-all hover:scale-105 hover:shadow-lg font-medium text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Now
              </a>
              <a
                href={businessData.directions_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all hover:scale-105 hover:shadow-lg font-medium text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Directions
              </a>
              <a
                href={businessData.order_urls[1]}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#ff4d4d] text-white rounded-full hover:bg-[#ff3333] transition-all hover:scale-105 hover:shadow-lg font-medium text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#ffffff]">
            Our Facility
          </h2>
          <p className="text-center text-[#ffffff]/80 mb-12 max-w-2xl mx-auto">
            Take a tour of our state-of-the-art fitness facility, designed to help you achieve your fitness goals.
          </p>
          <GallerySlider 
            images={galleryImages} 
            themeColor="#ff4d4d"
            className="rounded-2xl overflow-hidden shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a2a2a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#ffffff]">About Fit Fast</h2>
          <p className="text-[#ffffff]/80 text-lg leading-relaxed">
            At Fit Fast, we are dedicated to transforming lives through fitness. Our expert trainers provide personalized attention and motivation to help you reach your fitness goals. Whether you are looking to lose weight, build muscle, or improve your overall health, we have the programs and support you need to succeed.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#ffffff]">
              Our Programs
            </h2>
            <p className="text-[#ffffff]/80 max-w-2xl mx-auto text-lg">
              Choose from our wide range of fitness programs designed to help you achieve your goals. From personal training to group classes, we have something for everyone.
            </p>
          </div>
          {['Personal Training', 'Fitness Classes', 'Special Programs'].map((cat) => {
            const items = services.filter(s => s.category === cat);
            return (
              <div key={cat} className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-[#ff4d4d]">{cat}</h3>
                <MenuSlider 
                  items={items} 
                  themeColor="#ff4d4d"
                  className="rounded-2xl overflow-hidden shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#ffffff]">
              Success Stories
            </h2>
            <p className="text-[#ffffff]/80 max-w-2xl mx-auto text-lg">
              Hear from our members about their fitness journey and transformation
            </p>
          </div>
          <ReviewsSlider 
            themeColor="#ff4d4d"
            className="rounded-2xl overflow-hidden shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#ff4d4d]">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-[#ffffff]">
                  <Phone className="w-5 h-5 text-[#ff4d4d]" />
                  <a href={`tel:${businessData.phone}`} className="hover:text-[#ff4d4d] transition-colors">
                    {businessData.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3 text-[#ffffff]">
                  <MapPin className="w-5 h-5 text-[#ff4d4d]" />
                  <a 
                    href={businessData.directions_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff4d4d] transition-colors"
                  >
                    {businessData.address}
                  </a>
                </p>
                <p className="text-[#ffffff]/80 text-sm mt-4">
                  Located in Montgomery, AL, serving the local community with premium fitness services.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#ff4d4d]">Hours</h3>
              <div className="space-y-3">
                <p className="text-[#ffffff]">
                  <span className="font-medium">Monday - Sunday:</span> 24/7 Access
                </p>
                <p className="text-[#ffffff]/80 text-sm mt-4">
                  Personal training sessions available by appointment.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#ff4d4d]">Follow Us</h3>
              <div className="space-y-4">
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="text-[#ffffff] hover:text-[#ff4d4d] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a 
                    href="#" 
                    className="text-[#ffffff] hover:text-[#ff4d4d] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                </div>
                <p className="text-[#ffffff]/80 text-sm">
                  Follow us on social media for fitness tips and updates.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#ff4d4d]">Book a Session</h3>
              <div className="space-y-4">
                <a
                  href={businessData.order_urls[1]}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff4d4d] text-white rounded-full hover:bg-[#ff3333] transition-all hover:scale-105 hover:shadow-lg font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </a>
                <p className="text-[#ffffff]/80 text-sm">
                  Schedule your personal training session or group class today.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-[#ff4d4d]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.601234567890!2d-86.299187684593!3d32.3790119793266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888e7b2f8f8f8f8f%3A0x1a2b3c4d5e6f7g8h!2sMontgomery%2C%20AL!5e0!3m2!1sen!2sus!4v1716840000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px]"
            ></iframe>
          </div>

          <div className="mt-16 pt-8 border-t border-[#ff4d4d]/20 text-center text-[#ffffff]/80">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.
            </p>
            <p className="text-sm">
              Professional fitness training and personal coaching in Montgomery, AL.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


