
import parisImage from '../assets/images/paris.jpg'
import baliImage from '../assets/images/bali.jpg'
import newyorkImage from '../assets/images/new york.jpg'
import romeImage from '../assets/images/rome.jpg'
import sydneyImage from '../assets/images/sydney.jpg'
import tokyoImage from '../assets/images/tokyo.jpg'


const destinations = [
  {
    id: 1,
    name: "Paris",
    image: parisImage, // Eiffel Tower
    description: "The city of lights and love.",
    details: "Discover the Eiffel Tower, Louvre Museum, and enjoy croissants by the Seine."
  },
  {
    id: 2,
    name: "Tokyo",
    image: tokyoImage, // Shibuya at night
    description: "A blend of tradition and technology.",
    details: "Experience Shibuya Crossing, cherry blossoms, sushi, and ancient temples like Senso-ji."
  },
  {
    id: 3,
    name: "New York",
    image: newyorkImage, // NYC skyline
    description: "The city that never sleeps.",
    details: "Explore Times Square, the Statue of Liberty, and Central Park."
  },
  {
    id: 4,
    name: "Rome",
    image: romeImage, // Roman ruins
    description: "Where ancient history comes alive.",
    details: "Visit the Colosseum, Roman Forum, and enjoy Italian gelato and pasta."
  },
  {
    id: 5,
    name: "Bali",
    image: baliImage, // Bali rice terraces
    description: "An island paradise of beaches and temples.",
    details: "Relax on beaches, explore Ubud, and discover Balinese culture."
  },
  {
    id: 6,
    name: "Sydney",
    image:sydneyImage, // Opera House
    description: "Sun, surf, and a stunning harbor.",
    details: "Climb the Harbour Bridge and visit the Sydney Opera House."
  }
];

export default destinations;
