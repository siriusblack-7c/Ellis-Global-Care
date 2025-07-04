import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ArrangeCare() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    clientName: "",
    clientLocation: "",
    serviceType: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Care Request Submitted",
      description: "Thank you for reaching out. A care coordinator will be in touch with you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Care Recipient Registration</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Create an account and tell us about your care needs. Our dedicated care coordinators will help match you with the perfect caregiver.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Account Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="yourEmail">Email Address</Label>
                      <Input id="yourEmail" name="yourEmail" type="email" onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" name="password" type="password" onChange={handleInputChange} required />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Your Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <Label htmlFor="yourPhone">Phone Number</Label>
                    <Input id="yourPhone" name="yourPhone" type="tel" onChange={handleInputChange} required />
                  </div>
                  <div className="mt-6 space-y-2">
                    <Label htmlFor="yourLocation">Your Location (City, Country)</Label>
                    <Input id="yourLocation" name="yourLocation" onChange={handleInputChange} required />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Care Recipient's Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="clientName">Recipient's Full Name</Label>
                      <Input id="clientName" name="clientName" onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clientLocation">Recipient's Location (City, Country)</Label>
                      <Input id="clientLocation" name="clientLocation" onChange={handleInputChange} required />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 border-b pb-4">Care Needs</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Primary Care Need</Label>
                      <Select name="serviceType" onValueChange={(value) => handleSelectChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a primary service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal-care">Personal Care</SelectItem>
                          <SelectItem value="companionship">Companionship</SelectItem>
                          <SelectItem value="specialized-care">Specialized Care (e.g., Dementia)</SelectItem>
                          <SelectItem value="post-surgery">Post-Surgery Care</SelectItem>
                          <SelectItem value="respite-care">Respite Care</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Please briefly describe the care needs</Label>
                      <Textarea id="message" name="message" rows={6} onChange={handleInputChange} placeholder="Tell us a little about the situation, any specific needs, and what you're looking for in a caregiver." required />
                    </div>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full btn-primary text-lg py-3">
                    Create Account & Submit Care Request
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