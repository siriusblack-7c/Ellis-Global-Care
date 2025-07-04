import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Join Our Team of Compassionate Caregivers</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Make a difference in the lives of the elderly and their families. We are looking for dedicated, compassionate individuals to join our growing team.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Ellis Global Care?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Meaningful Work</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience the fulfillment of making a real difference in the lives of others.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We invest in our caregivers with ongoing training and development opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a team that values collaboration, respect, and mutual support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Application Process</h2>
            <div className="max-w-3xl mx-auto">
              <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-bold text-gray-900 dark:text-white">Submit Your Application:</span> Complete our online form and upload your resume.
                </li>
                <li>
                  <span className="font-bold text-gray-900 dark:text-white">Initial Screening:</span> Our team will review your application and contact you if you're a good fit.
                </li>
                <li>
                  <span className="font-bold text-gray-900 dark:text-white">Interview:</span> Showcase your skills and passion for caregiving in an interview with our team.
                </li>
                <li>
                  <span className="font-bold text-gray-900 dark:text-white">Background Check & Training:</span> Complete a background check and our comprehensive training program.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Take the first step towards a rewarding career with Ellis Global Care.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/apply">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}