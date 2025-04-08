'use client';
import { Avatar, Box, Grid, Typography } from "@mui/material";
import NavComponent from "@/components/Nav";
import { motion } from "framer-motion";
import skills from '@/data/skills.json';
export default function Skill() {

    const chunkSize = Math.ceil(skills.length / 3);
    const skillChunks = [
      skills.slice(0, chunkSize),
      skills.slice(chunkSize, chunkSize * 2),
      skills.slice(chunkSize * 2),
    ];
  
    const row = (skillsRow, delay) => {
      const MotionBox = motion(Box);
  
      return (
        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            mb: 4,
          }}
        >
          <MotionBox
            sx={{
              display: "flex",
              width: "fit-content",
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 40,
              delay,
            }}
          >
            {[...skillsRow, ...skillsRow].map((skill, index) => (
              <Grid
                key={index}
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 120, mx: 2 }}
              >
                <Avatar src={skill.icon} alt={skill.name} sx={{ width: 56, height: 56 }} />
                <Typography variant="body1" mt={1} color="#fff">
                  {skill.name}
                </Typography>
              </Grid>
            ))}
          </MotionBox>
        </Box>
      );
    };
  
    return (
        <Box sx={{ backgroundColor: "#1a1a1a", width: "100vw",height:"100vh" }}>
            <NavComponent />
            <Box p={4} sx={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                {row(skillChunks[0], 0)}
                {row(skillChunks[1], .1)}
                {row(skillChunks[2], .2)}
            </Box>
        </Box>
    );
}