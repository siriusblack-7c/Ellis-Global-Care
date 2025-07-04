import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaregiverCard, { CaregiverProps } from "@/components/CaregiverCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Clock, MapPin, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample caregivers data
const featuredCaregivers: CaregiverProps[] = [
  {
    id: "1",
    name: "Adunni Olatunji",
    bio: "Experienced caregiver with specialization in elderly care and chronic illness management. Trained in Canada with 8+ years of experience.",
    hourlyRate: 15,
    rating: 4.9,
    reviewCount: 127,
    location: "Lagos, Nigeria",
    image: "https://ellis-global-care.s3.amazonaws.com/caregiver-1.jpg",
    specialties: ["Elderly Care", "Chronic Illness", "Mobility Assistance"],
    languages: ["English", "Yoruba", "French"],
    experience: 8,
    availability: "Available"
  },
  {
    id: "2", 
    name: "Grace Mensah",
    bio: "Certified nursing assistant with expertise in post-surgery care and rehabilitation. Compassionate and dedicated to patient wellbeing.",
    hourlyRate: 18,
    rating: 4.8,
    reviewCount: 89,
    location: "Accra, Ghana",
    image: "https://ellis-global-care.s3.amazonaws.com/caregiver-2.jpg",
    specialties: ["Post-Surgery Care", "Rehabilitation", "Medication Management"],
    languages: ["English", "Twi", "Ga"],
    experience: 6,
    availability: "Available"
  },
  {
    id: "3",
    name: "Fatima Mwangi",
    bio: "Professional caregiver with training in dementia care and mental health support. Brings warmth and patience to every interaction.",
    hourlyRate: 16,
    rating: 4.9,
    reviewCount: 156,
    location: "Nairobi, Kenya",
    image: "https://ellis-global-care.s3.amazonaws.com/caregiver-3.jpg",
    specialties: ["Dementia Care", "Mental Health", "Companionship"],
    languages: ["English", "Swahili", "Kikuyu"],
    experience: 7,
    availability: "Available"
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Compassionate Care",
      description: "Trained caregivers who provide loving, professional care with genuine compassion for your family members."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified & Trusted",
      description: "All caregivers undergo thorough background checks, verification, and Canadian-standard training certification."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Family-Centered",
      description: "We understand the importance of family. Our services bridge the gap between you and your loved ones back home."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Availability",
      description: "Round-the-clock care options with flexible scheduling to meet your family's specific needs and preferences."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Professional Training",
      description: "Caregivers trained to Canadian standards with ongoing education in healthcare, nutrition, and elderly care."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Across Africa",
      description: "Currently serving Nigeria, Ghana, Kenya with plans to expand across Africa to serve more families."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Welcome to Ellis Global Care
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Bridging the Distance with Compassionate Care
                </h2>
                <p className="text-muted-foreground mb-6">
                  We provide reliable, professional, and compassionate caregivers for your elderly loved ones in Nigeria. Our mission is to ensure your family receives the best care, even when you're thousands of miles away.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our caregivers are trained to Canadian standards, thoroughly vetted, and share a deep cultural understanding to provide care that is not only professional but also personal.
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://ellis-global-care.s3.amazonaws.com/care-image-1.jpg"
                    alt="Professional caregiver with elderly person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://ellis-global-care.s3.amazonaws.com/care-image-2.jpg"
                    alt="Caregiver providing care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://ellis-global-care.s3.amazonaws.com/care-image-3.jpg"
                    alt="Family care moment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/5 to-white dark:from-primary/10 dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  How It Works
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Simple Steps to Peace of Mind
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our process is designed to be simple, transparent, and centered around your family's needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Verified and trained caregivers
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Real-time updates and reports
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    Cultural understanding guaranteed
                  </li>
                </ul>
              </div>
              
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </section>
        
        {/* Featured Caregivers */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Featured Caregivers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Meet Some of Our Compassionate Professionals
              </h2>
              <p className="text-muted-foreground">
                Our caregivers are the heart of our service. Each one is selected for their skills, compassion, and dedication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaregivers.map((caregiver, index) => (
                <div key={caregiver.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <CaregiverCard caregiver={caregiver} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <Link to="/caregivers">
                  View All Caregivers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Our Commitment to You
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Peace of Mind, Delivered with Care
              </h2>
              <p className="text-muted-foreground">
                We are committed to providing a service that is not only reliable and professional but also deeply compassionate and respectful of your family's culture and values.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Provide Better Care for Your Family?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of families who trust Ellis Global Care to provide professional, compassionate care for their loved ones back home. Start your care journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/signup">Book a Caregiver Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/careers">Become a Caregiver</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
