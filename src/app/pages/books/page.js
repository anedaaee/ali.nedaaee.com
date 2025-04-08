'use client';
import { Card, CardContent, Typography, Button, Grid, CardMedia,Box } from '@mui/material';
import NavComponent from '@/components/Nav';
import books from '@/data/books.json';

export default function BooksShowcase() {
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
                src="/books.jpg" 
                alt="ali nedaaee books"
            />
            <Grid container spacing={4} justifyContent="center" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10vh"}}>
                {books.map((book, index) => (
                <Grid item xs={12} sm={10} md={6} key={index}>
                    <Card
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        backgroundColor: '#121212',
                        color: 'white',
                        borderRadius: 4,
                        boxShadow: 6,
                    }}
                    >
                    <CardMedia
                        component="img"
                        sx={{ width: { xs: '100%', sm: 200 }, objectFit: 'cover' }}
                        image={book.image}
                        alt={book.name}
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5" fontWeight="bold" gutterBottom>
                        {book.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                        {book.description}
                        </Typography>
                        <Button
                        variant="outlined"
                        color="primary"
                        href={book.link}
                        target="_blank"
                        sx={{ mt: 1 }}
                        >
                        View PDF
                        </Button>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
  }