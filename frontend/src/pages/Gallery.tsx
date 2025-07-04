import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    alt: "Caregiver assisting elderly woman with a walker",
    caption: "Providing mobility support with a smile."
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    alt: "Caregiver and elderly man playing a board game",
    caption: "Engaging in stimulating activities and companionship."
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    alt: "Caregiver preparing a healthy meal for a client",
    caption: "Nutritious and delicious meals, prepared with care."
  },
  {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=400&fit=crop",
    alt: "Caregiver reading a book to an elderly woman",
    caption: "Sharing stories and moments of connection."
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
    alt: "Caregiver helping an elderly man with his medication",
    caption: "Ensuring health and safety with medication management."
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    alt: "Group of caregivers in a training session",
    caption: "Our caregivers are trained to the highest standards."
  },
   {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    alt: "Caregiver and client enjoying a walk in the garden",
    caption: "Promoting an active and healthy lifestyle."
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    alt: "A happy client with her caregiver",
    caption: "Building trusting and meaningful relationships."
  }
];

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Gallery</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              A glimpse into the compassionate care and meaningful connections we foster every day.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-4">{image.caption}</p>
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
