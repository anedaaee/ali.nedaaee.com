'use client';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Link } from "@mui/material";
import certificates from '@/data/certificates.json';
import NavComponent from "@/components/Nav";


export default function CertificatesSection() {
    return (
      <Box p={4} sx={{ backgroundColor: "#121212" ,padding:"0px",minHeight:"100vh"}}>
        <NavComponent/>
        <Box
            component="img"
            sx={{
                margin:"0", 
                width: "100vw",
                height: "60vh", 
                objectFit: "cover", 
            }}
            src="/certificates.jpg" 
            alt="ali nedaaee certificates"
        />
        <Grid container spacing={3} sx={{marginTop:"10vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          {certificates.map((cert, index) => (
            <Grid item xs={12} key={index} >
              <Card
                sx={{
                  display: "flex",
                  width:"80vw",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  color: "#fff",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.name}
                  sx={{
                    width: { xs: "100%", sm: 500 },
                    height: { xs: 200, sm: "auto" },
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom color="#000">
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="inherit"
                    >
                      {cert.name}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {cert.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }