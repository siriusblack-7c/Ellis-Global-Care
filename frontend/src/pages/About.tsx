import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">About Ellis Global Care</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Bridging the distance to provide professional, compassionate care for your loved ones back home.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ellis Global Care was founded by immigrants who understood the challenge of caring for aging parents from afar. We saw a need for a reliable, trustworthy service that could provide high-quality care with a personal touch.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to connect families with professionally trained, compassionate caregivers who can provide the support and companionship your loved ones deserve. We are committed to making a positive impact on the lives of the elderly and their families, one home at a time.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
                  alt="Our team"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in treating every individual with kindness, empathy, and respect.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trust</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We are committed to building long-lasting relationships based on trust, transparency, and reliability.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for excellence in everything we do, from caregiver training to customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you're looking for care for a loved one or want to join our team of caregivers, we'd love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="btn-primary">
                <Link to="/signup">
                  Book a Caregiver <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/careers">
                  Work With Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}