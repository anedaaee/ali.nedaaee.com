'use client';
import React from 'react';
import { Grid, Typography, Box, Paper,IconButton } from '@mui/material';
import NavComponent from '@/components/Nav';
import { styled } from '@mui/system';
import {LinkedIn, GitHub, Instagram} from "@mui/icons-material";

const ImageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
});

const AboutPage = () => {
  return (
    <>
        <NavComponent />
        <Box sx={{ backgroundColor: '#1a1a1a' ,width:"100vw"}}>
            <Grid container spacing={4} alignItems="center" sx={{width:"100%",display:"flex",justifyContent:"center"}}>    
                <Grid item xs={12} sm={6}>
                <ImageBox>
                    <Box
                        component="img"
                        src="/6.jpg"
                        alt="ali nedaaee"
                        sx={{
                        margin:"15%",
                        width: "80vw",  
                        height: "60vh",
                        borderRadius:"20px",
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                        backgroundSize: "cover",
                        }}
                    />
                </ImageBox>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper sx={{ padding: 3, backgroundColor: '#333', color: '#fff', borderRadius: 2 }}>
                        <Typography variant="h3" sx={{ marginBottom: 2 }}>
                        About Me
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        Hi, I&apos;m Ali Nedaee — a Computer Engineering student at the University of Zanjan with a deep passion for Artificial Intelligence, scalable software development, and the Internet of Things (IoT).
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        I&apos;m currently working remotely with Petanux GmbH in Germany and have collaborated with several tech companies in the past.
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        In addition to my tech career, I&apos;m a pianist, composer, and orchestral arranger. Blending creativity and technology is one of the driving forces in my life.
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        My research is focused on Explainable AI (XAI), and I&apos;m currently writing academic papers in this area.
                        </Typography>
                        <Typography variant="body1">
                        I&apos;m also passionate about developing scalable IoT systems and have been involved in various projects in this field.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            <IconButton href='https://www.linkedin.com/in/anedaaee/'>
                                <LinkedIn sx={{margin:"10px",color:'#fff'}}/>
                            </IconButton>
                            <IconButton href='https://github.com/anedaaee'>
                                <GitHub sx={{margin:"10px",color:'#fff'}}/>
                            </IconButton>
                            <IconButton href='https://www.instagram.com/ali.nedaaee?igsh=dW82eHZ5NDl5czV1'>
                                <Instagram sx={{margin:"10px",color:'#fff'}}/>
                            </IconButton>
                            
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </>
  );
};

export default AboutPage;