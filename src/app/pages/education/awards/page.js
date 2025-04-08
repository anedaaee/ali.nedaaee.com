'use client'
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import NavComponent from '@/components/Nav';
export default function AwardPage() {
  return (
    <Box sx={{ backgroundColor: "#121212" ,padding:"0px",minHeight:"100vh"}}>
        <NavComponent />
      <Typography variant="h4" gutterBottom align="center" sx={{paddingTop:"10vh",color:"#fff"}}>
        2022 - Best Music Team of All Universities in the Country
      </Typography>
      
      <Typography variant="h6" paragraph align="center" sx={{color:"#fff"}}>
        In 2022, I had the honor of being part of the best music team in all the universities across the country.
        This award reflects the dedication and collaboration of our team, achieving excellence in musical performances.
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body1" color="text.secondary" align="center">
                Below is the award certificate commemorating this achievement.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <img src="/bestMusicTeam.jpeg" alt="ali nedaaee best music team Award Certificate" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}