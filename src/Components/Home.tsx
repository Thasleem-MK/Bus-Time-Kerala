import { useState } from "react";
import { useCarousel } from "../Hooks/useCarouser";

export type AdItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  company?: string;
};

// Mock data for ads (in a real app, this would come from an API or props)
const adData: AdItem[] = [
  {
    type: "image",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHEO7oUV7gFvVQRr540iNAgl2hJfQLQYr5w&s",
    alt: "Ad 1",
    company: "Cococola 1",
  },
  {
    type: "image",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpCwRGFdZfuwUygIdld0nTGEPRZA1BSkETQ&s",
    alt: "Ad 2",
    company: "Cococola 2",
  },
  {
    type: "image",
    src: "https://i.ytimg.com/vi/u3GzuZJjBk0/maxresdefault.jpg",
    alt: "Ad 3",
    company: "Cococola 3",
  },
  {
    type: "image",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xC6y9gwSwMacPF2J98vcPddgIG7BpRHxDA&s",
    alt: "Ad 2",
    company: "Cococola 4",
  },
];

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const currentAdIndex = useCarousel(adData);

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for route from", currentLocation, "to", destination);
  };
  return (
    <div className="h-screen bg-gray-100 p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Bus Time App</h1>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Current Location"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          Search
        </button>
      </div>

      <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden mt-3 flex flex-col">
        <h2 className="text-lg font-semibold p-2 bg-gray-200">
          {adData[currentAdIndex].company}
        </h2>
        <div className="relative flex flex-col h-full">
          {adData[currentAdIndex].type === "image" ? (
            <img
              src={adData[currentAdIndex].src}
              alt={adData[currentAdIndex].alt}
              className="object-cover w-full h-full"
            />
          ) : (
            <video
              src={adData[currentAdIndex].src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
