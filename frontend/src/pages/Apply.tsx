import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Apply() {
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will review your application and get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Caregiver Registration</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Join our network of professional caregivers. Fill out the form below to create your account and start your application process.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">Account Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" required />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" type="text" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" type="text" required />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" type="text" required />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b pb-2">Professional Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" min="0" required />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="specialties">Specialties</Label>
                    <Textarea
                      id="specialties"
                      placeholder="E.g., Elderly care, Dementia care, Post-surgery care, etc."
                      rows={3}
                      required
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="certifications">Certifications</Label>
                    <Textarea
                      id="certifications"
                      placeholder="List any relevant certifications you hold"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="resume">Resume/CV</Label>
                    <Input id="resume" type="file" required />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself, your experience, and why you want to be a caregiver"
                      rows={6}
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full btn-primary">
                    Create Account & Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}