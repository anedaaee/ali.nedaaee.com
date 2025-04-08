import React from 'react';
import { Card, CardContent, Typography, Button, Grid , Box,Avatar,IconButton} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import NavComponent from '@/components/Nav';
import groups from '@/data/music_Groupe.json'
import songs from '@/data/songs.json'
const MusicPage = () => {


  return (
    <Box p={4} sx={{ backgroundColor: "#121212" ,padding:"0px"}}>
        <NavComponent/>
        <Box
          component="img"
          sx={{
              margin:"0", 
              width: "100vw",
              height: "80vh", 
              objectFit: "cover", 
          }}
          src="/music.jpg" 
          alt="ali nedaaee experience"
          />
        <Grid container spacing={4} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10vh"}}>
            {groups.map((group, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{margin:"10px"}}>
                <Card sx={{ maxWidth: 500, backgroundColor: 'lightgray' }}>
                <img src={group.logo} alt={group.groupName} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <CardContent>
                    <Typography variant="h5">{group.groupName}</Typography>
                    <Typography variant="body2" color="text.secondary">Date: {group.date}</Typography>
                    <Typography variant="body2" color="text.secondary">Role: {group.role}</Typography>
                    <Typography variant="body2" color="text.secondary">Genre: {group.genre}</Typography>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <IconButton href='https://open.spotify.com/artist/0L96plIS0ckK77lo17cRoz?si=PQviIgJgSQajV4mmReyiVQ'>
                <Avatar
                    alt="Spotify"
                    src="/spotify.png"
                    sx={{ width: 64, height: 64, cursor: "pointer" }}
                />
            </IconButton>
            <IconButton href='https://music.apple.com/us/artist/ali-nedaaee/1553706016'>
                <Avatar
                    alt="Apple Music"
                    src="/apple_music.png"
                    sx={{ width: 64, height: 64, cursor: "pointer" }}
                />     
            </IconButton>
        </Box>
        <Grid container spacing={2} sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"10vh"}}>
            {songs.map((song, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ width: 345 }}>
                <CardContent>
                    <Typography variant="h6">{song.title}</Typography>
                    <Typography variant="body2" color="text.secondary">Artist: {song.artist}</Typography>
                    <Typography variant="body2" color="text.secondary">Composer: {song.composer}</Typography>
                    <Typography variant="body2" color="text.secondary">Arranger: {song.arranger}</Typography>
                    <Typography variant="body2" color="text.secondary">Singer: {song.singer}</Typography>
                    <Typography variant="body2" color="text.secondary">Genre: {song.genre}</Typography>
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PlayArrow />}
                    href={song.audio}
                    target="_blank"
                    sx={{ marginTop: '10px' }}
                    >
                    Play Song
                    </Button>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Box>
  );
};

export default MusicPage;