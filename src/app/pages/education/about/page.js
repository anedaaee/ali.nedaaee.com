'use client';
import React from 'react';
import { Container, Card, CardContent, Typography, Grid , Box} from '@mui/material';
import NavComponent from '@/components/Nav';
export default function EducationPage() {
  return (
    <Box sx={{ backgroundColor: "#121212" ,padding:"0px"}}>
        <NavComponent/>
        <Box
            component="img"
            sx={{
                margin:"0", 
                width: "100vw",
                height: "60vh", 
                objectFit: "cover", 
            }}
            src="/znu.jpg" 
            alt="ali nedaaee university of zanjan"
        />

        <Grid container spacing={4} justifyContent="center" sx={{marginTop:"5vh"}}>
            <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Bachelor of Computer Engineering, Software Engineering Track
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    University of Zanjan, Faculty of Computer Engineering
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    <strong>GPA:</strong> 18.21/20  
                    <br />
                    <strong>Expected Graduation:</strong> 2025
                </Typography>
                </CardContent>
            </Card>
            </Grid>

            <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
                Teaching Assistant Experience
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {[
                { semester: '2022-2023 First Semester', courses: ['Basic Programming', 'Advanced Programming'] },
                { semester: '2022-2023 Second Semester', courses: ['Basic Programming', 'Advanced Programming (multiple classes)', 'Data Structure'] },
                { semester: '2023-2024 First Semester', courses: ['Basic Programming', 'Advanced Programming (multiple classes)', 'Data Structure', 'Algorithms', 'System Analysis and Design'] },
                { semester: '2023-2024 Second Semester', courses: ['Basic Programming', 'Data Structure', 'Algorithms', 'Database'] },
                { semester: '2024-2025 First Semester', courses: ['Compiler Design', 'Data Structure', 'Algorithms'] },
                { semester: '2024-2025 Second Semester', courses: ['Programming Languages Design', 'Machine Learning'] }
                ].map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Card variant="outlined" sx={{minHeight:"200px"}}>
                    <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                        {item.semester}
                        </Typography>
                        <ul>
                        {item.courses.map((course, i) => (
                            <li key={i}>
                            <Typography variant="body2" color="text.secondary">{course}</Typography>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}