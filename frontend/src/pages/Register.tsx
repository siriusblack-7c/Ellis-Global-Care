import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCaregiverSelect = () => {
    navigate("/apply");
  };

  const handleCareRecipientSelect = () => {
    navigate("/arrange-care");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Join Our Community</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Please select the option that best describes you to continue with the registration process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Caregiver Card */}
              <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-primary/10 dark:bg-primary/5 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-center">Caregiver</CardTitle>
                  <CardDescription className="text-center">
                    I want to provide care services
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Apply to join our network of professional caregivers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Showcase your skills and experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Connect with clients who need your services</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={handleCaregiverSelect} 
                    className="w-full btn-primary mt-4"
                  >
                    Register as Caregiver
                  </Button>
                </CardContent>
              </Card>

              {/* Care Recipient Card */}
              <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-primary/10 dark:bg-primary/5 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-center">Care Recipient</CardTitle>
                  <CardDescription className="text-center">
                    I need to arrange care for myself or a loved one
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Find qualified caregivers for your loved ones</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Describe your specific care needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Get personalized care solutions</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={handleCareRecipientSelect} 
                    className="w-full btn-primary mt-4"
                  >
                    Register as Care Recipient
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
              Already have an account? <a href="/login" className="text-primary hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}