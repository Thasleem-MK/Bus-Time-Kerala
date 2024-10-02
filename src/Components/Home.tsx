// import { useState } from "react";
// import { useCarousel } from "../Hooks/useCarouser";

// export type AdItem = {
//   type: "image" | "video";
//   src: string;
//   alt?: string;
//   company?: string;
// };

// // // Mock data for ads (in a real app, this would come from an API or props)
// const adData: AdItem[] = [
//   {
//     type: "image",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHEO7oUV7gFvVQRr540iNAgl2hJfQLQYr5w&s",
//     alt: "Ad 1",
//     company: "Cococola 1",
//   },
//   {
//     type: "image",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpCwRGFdZfuwUygIdld0nTGEPRZA1BSkETQ&s",
//     alt: "Ad 2",
//     company: "Cococola 2",
//   },
//   {
//     type: "image",
//     src: "https://i.ytimg.com/vi/u3GzuZJjBk0/maxresdefault.jpg",
//     alt: "Ad 3",
//     company: "Cococola 3",
//   },
//   {
//     type: "image",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xC6y9gwSwMacPF2J98vcPddgIG7BpRHxDA&s",
//     alt: "Ad 2",
//     company: "Cococola 4",
//   },
// ];

// const Home = () => {
//   const [currentLocation, setCurrentLocation] = useState("");
//   const [destination, setDestination] = useState("");
//   const currentAdIndex = useCarousel(adData);

//   const handleSearch = () => {
//     // Implement search functionality here
//     console.log("Searching for route from", currentLocation, "to", destination);
//   };
//   return (
//     <div className="h-screen bg-gray-100 p-4 flex flex-col">
//       <h1 className="text-2xl font-bold mb-4">Bus Time App</h1>

//       <div className="space-y-4 mb-6">
//         <input
//           type="text"
//           placeholder="Current Location"
//           value={currentLocation}
//           onChange={(e) => setCurrentLocation(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSearch}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
//         >
//           Search
//         </button>
//       </div>

//       <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden mt-3 flex flex-col">
//         <h2 className="text-lg font-semibold p-2 bg-gray-200">
//           {adData[currentAdIndex].company}
//         </h2>
//         <div className="relative flex flex-col h-full w-full">
//           {adData[currentAdIndex].type === "image" ? (
//             <img
//               src={adData[currentAdIndex].src}
//               alt={adData[currentAdIndex].alt}
//               // className="object-cover w-full h-auto sm:h-[400px] md:h-[500px]"
//               style={{height:"inherite",width:"inherite"}}
//             />
//           ) : (
//             <video
//               src={adData[currentAdIndex].src}
//               className="w-full h-auto object-cover sm:h-[400px] md:h-[500px]"
//               autoPlay
//               muted
//               loop
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState } from "react";
import { Search } from "lucide-react";
import { Button, Card, CardContent, CardHeader, Input } from "@mui/material";
import { useCarousel } from "../Hooks/useCarouser";

export type AdItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  company?: string;
};

// // Mock data for ads (in a real app, this would come from an API or props)
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

export default function BusTimeApp() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const currentAdIndex = useCarousel(adData);

  const handleSearch = () => {
    // Implement search functionality here
    console.log(
      "Searching for routes from",
      currentLocation,
      "to",
      destination
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-300 p-4 md:p-8 relative overflow-hidden">
      {/* Background Illustrations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 rotate-180"
        >
          <path
            fill="#0099ff"
            fillOpacity="0.8"
            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* City Skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#000000"
            fillOpacity="0.3"
            d="M0,320L48,304C96,288,192,256,288,245.3C384,235,480,245,576,234.7C672,224,768,192,864,186.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-20 flex flex-col">
        <Card
          className="mx-auto mt-16 mb-12 max-w-3xl min-w-full backdrop-blur-sm bg-white/80"
          style={{ border: "2px solid #0A0A0A", borderRadius: "10px" }}
        >
          <CardHeader
            title="Bus Time Finder"
            className="text-2xl font-sans text-center"
          />
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col px-2">
                <Input
                  type="text"
                  placeholder="Current Location"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center">
                <Button
                  className="w-1/2"
                  onClick={handleSearch}
                  style={{ background: "#1980EF", color: "white" }}
                >
                  <Search className="mr-2 h-4 w-4" /> Find Routes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className="mx-auto max-w-3xl min-w-full mt-8 backdrop-blur-sm bg-white/80 flex-grow "
          style={{ border: "2px solid #0A0A0A", borderRadius: "10px" }}
        >
          <CardHeader
            title={adData[currentAdIndex].company}
            className="text-xl font-semibold"
          />
          <CardContent>
            <div
              className="h-80 flex items-center justify-center text-gray-500"
              style={{
                backgroundImage: `url(${adData[currentAdIndex].src})`,
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents image repetition
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
