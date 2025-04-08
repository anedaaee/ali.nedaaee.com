"use client";
import { Box, Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import NavComponent from "@/components/Nav";
import workExperiences from "@/data/experience.json";



export default function WorkExperience() {
    return (
      <Box  sx={{ backgroundColor: "#121212" ,padding:"0px"}}>
        <NavComponent/>
        <Box
          component="img"
          sx={{
              margin:"0", 
              width: "100vw",
              height: "60vh", 
              objectFit: "cover", 
          }}
          src="/experience.jpg" 
          alt="ali nedaaee experience"
          />
        <Grid container spacing={4} justifyContent="center" sx={{marginTop: "10vh"}}>
          {workExperiences.map((job, index) => (
            <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
              <Card sx={{ width:"80vw", mx: "auto", borderRadius: 4, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={job.logo}
                  alt={job.company}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <Link href={job.url} target="_blank" rel="noopener" color="inherit">
                      {job.company}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="bold">
                    {job.role}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" mb={1}>
                    {job.period} - {job.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
}