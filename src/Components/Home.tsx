import { useState } from "react";
import { useCarousel } from "../Hooks/useCarouser";

export type AdItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

// Mock data for ads (in a real app, this would come from an API or props)
const adData: AdItem[] = [
  { type: "image", src: "/placeholder.svg?height=200&width=400", alt: "Ad 1" },
  { type: "video", src: "https://example.com/ad-video.mp4" },
  { type: "image", src: "/placeholder.svg?height=200&width=400", alt: "Ad 2" },
];

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const currentAdIndex = useCarousel(adData);

   const handleSearch = () => {
     // Implement search functionality here
     console.log(
       "Searching for route from",
       currentLocation,
       "to",
       destination
     );
   };
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
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

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-lg font-semibold p-2 bg-gray-200">
          Advertisements
        </h2>
        <div className="relative h-[200px]">
          {adData[currentAdIndex].type === "image" ? (
            <img
              src={adData[currentAdIndex].src}
              alt={adData[currentAdIndex].alt}
              className="w-full h-full object-cover"
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