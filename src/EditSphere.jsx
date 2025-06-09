
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { Check } from "lucide-react";

const categories = [
  {
    title: "Travel Edit",
    price: "₹199 - ₹399",
    description: "Beautifully crafted edits that capture your adventures and journeys with cinematic transitions, sound design, and storytelling.",
  },
  {
    title: "Reels Edit",
    price: "₹299 - ₹499",
    description: "Make your Instagram Reels pop with trendy cuts, sound sync, viral effects, and seamless transitions.",
  },
  {
    title: "YouTube Shorts Edit",
    price: "₹299 - ₹499",
    description: "Engaging, punchy edits perfect for short-form YouTube content with sharp attention retention techniques.",
  },
  {
    title: "YouTube Longform Edit",
    price: "₹899 - ₹1299",
    description: "Full-length professional YouTube videos with thumbnails, captions, storytelling structure, and brand consistency.",
  },
  {
    title: "Personal Moment Edit",
    price: "₹399 - ₹899",
    description: "Emotionally-driven edits for birthdays, anniversaries, or any personal event captured in a heartfelt video.",
  },
];

const reviews = [
  {
    name: "Rohan M.",
    review: "EditSphere turned my travel vlog into a movie-like experience. Smooth process, fast delivery, and amazing quality!",
  },
  {
    name: "Sneha K.",
    review: "Loved how my reel turned out. Perfect sync with audio and exactly the vibe I wanted. Definitely using again!",
  },
  {
    name: "Amit V.",
    review: "My YouTube video looked so pro after EditSphere worked on it. Great storytelling and pacing!",
  },
];

// ... (component code continues as in the canvas)
