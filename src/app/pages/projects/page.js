import { Box, Card, CardContent, Grid, Typography, Link , IconButton} from "@mui/material";
import projects from '@/data/projects.json';
import { GitHub } from "@mui/icons-material";
import NavComponent from "@/components/Nav";

export default function Projects() {
    return (
      <Box p={4} sx={{ backgroundColor: "#121212",padding:"0px" }}>
        <NavComponent />
        <Box
        component="img"
        sx={{
            margin:"0", 
            width: "100vw",
            height: "40vh", 
            objectFit: "cover", 
        }}
        src="/projects.jpg" 
        alt="ali nedaaee projects"
        />
        <Grid container spacing={4} justifyContent="center" sx={{marginTop: "10vh"}}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, mx: "auto", borderRadius: 4, boxShadow: 3 , minHeight:"70vh"}}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                      {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="bold">
                    {project.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {project.description}
                  </Typography>
                  {
                    project.github?
                        <IconButton href={project.github || "#"}>
                            <GitHub sx={{margin:"10px",color:'#000'}}/>
                        </IconButton>
                    :null
                  }
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }