import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Personal Care Assistance",
    description: "Dignified and respectful assistance with daily activities such as bathing, dressing, grooming, and mobility support to ensure comfort and well-being.",
    image: "https://ellis-global-care.s3.amazonaws.com/service-personal-care.jpg",
    points: [
      "Bathing and Hygiene",
      "Dressing and Grooming",
      "Mobility and Transfers",
      "Incontinence Care"
    ]
  },
  {
    title: "Companionship & Social Engagement",
    description: "Friendly companionship to combat loneliness and promote mental and emotional health through conversation, activities, and social outings.",
    image: "https://ellis-global-care.s3.amazonaws.com/service-companionship.jpg",
    points: [
      "Meaningful Conversation",
      "Hobbies and Activities",
      "Accompanying to Appointments",
      "Social Outings"
    ]
  },
  {
    title: "Meal Preparation & Nutrition",
    description: "Planning and preparing nutritious meals that cater to dietary needs and preferences, ensuring your loved ones eat well-balanced and delicious food.",
    image: "https://ellis-global-care.s3.amazonaws.com/service-nutrition.jpg",
    points: [
      "Meal Planning",
      "Grocery Shopping",
      "Cooking and Preparation",
      "Hydration Reminders"
    ]
  },
  {
    title: "Medication Management",
    description: "Reliable reminders and assistance with medication schedules to ensure that prescriptions are taken correctly and on time.",
    image: "https://ellis-global-care.s3.amazonaws.com/service-medication.jpg",
    points: [
      "Medication Reminders",
      "Organizing Pills",
      "Documenting Doses",
      "Coordinating with Pharmacists"
    ]
  },
  {
    title: "Light Housekeeping & Errands",
    description: "Maintaining a clean, safe, and comfortable living environment, as well as running essential errands for your loved ones.",
    image: "https://ellis-global-care.s3.amazonaws.com/service-housekeeping.jpg",
    points: [
      "Tidying and Cleaning",
      "Laundry and Linens",
      "Grocery Shopping",
      "Picking up Prescriptions"
    ]
  },
  {
    title: "Specialized & Respite Care",
    description: "Specialized support for conditions like Dementia and Alzheimer's, as well as providing temporary relief for primary family caregivers.",
    image: "https://ellis-global-care.s3.amazonaws.com/service-specialized.jpg",
    points: [
      "Dementia & Alzheimer's Care",
      "Post-Surgery Support",
      "Chronic Illness Management",
      "Respite for Family Caregivers"
    ]
  }
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              We offer a comprehensive range of services designed to provide holistic support for your loved ones, ensuring their safety, health, and happiness.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`animate-fade-in ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                    />
                  </div>
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.points.map(point => (
                        <li key={point} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="text-gray-700 dark:text-gray-200">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}