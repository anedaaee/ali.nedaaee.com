'use client';
import NavComponent from "@/components/Nav";
import { Box,Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

const poppins = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600'], 
  display: 'swap',
});

const images = [
  "/5.JPG",
  "/4.jpeg",
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
];

export default function Home() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); 

    return () => clearInterval(timer);
  }, []);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavComponent />
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              alt="Ali Nedaaee"
              sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: index === i ? 1 : 0,
                transition: "opacity 2s ease-in-out",
                zIndex: 0,
              }}
            />
          ))}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              zIndex: 1,
            }}
          >
            <Typography variant="h2" color="white" textAlign="left" sx={{paddingLeft:"5vw" ,animation: "fadeIn 3s 1s forwards", fontFamily: "Space Grotesk",fontWeight:"bold"}}>
              Ali Nedaaee
            </Typography>
            <Typography variant="h4" color="white" textAlign="left" sx={{ paddingBottom: "20vh" ,animation: "fadeIn 3s 1s forwards", paddingLeft:"5vw" , fontFamily: "Space Grotesk",fontWeight:"bold"}}>
              Computer Engineer
            </Typography>
          </Box>
        </Box>
      </body>
    </html>
  );
}
