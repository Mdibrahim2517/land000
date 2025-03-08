import React from 'react';
import { Button, Typography, Box, Grid, CardMedia } from '@mui/material';
import AboutPic from "../../../../assets/ai 1.jpg";
import AboutPic2 from "../../../../assets/a15.jpg";

function About() {
    return (
        <Box px={{ xs: 3, md: 7 }} py={7} maxWidth="lg" mx="auto" className="space-y-10">
            <Box textAlign="center" className="animate__animated animate__zoomIn" id="About">
                <Typography
                    variant="h3"
                    color="#010851"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    AI-driven that’s{' '}
                    <span className="cursive animate__animated animate__tada">empowering,</span>
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    mb={4}
                    sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Not overpowering
                </Typography>
            </Box>

            <Grid
                container
                spacing={4}
                justifyContent="space-between"
                alignItems="center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        image={AboutPic}
                        alt="About AI"
                        sx={{
                            width: '110%',
                            height: 'auto',
                            borderRadius: '8px',
                            cursor: 'zoom-in',
                            '&:hover': { filter: 'brightness(0.8)' },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            variant="h4"
                            color="#010851"
                            fontWeight="bold"
                            mb={2}
                            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                        >
                            With you, Generative <span className="title1">AI</span> you can rely on
                        </Typography>
                        <Typography variant="body1" color="textSecondary" mb={3} sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}>
                            We are a team of researchers, healthcare professionals, students, authors, leaders, and coaches defining global people models using AI-driven platforms.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" mb={3} sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}>
                            Our AI models decode your professional blueprint in a systematic way with our algorithms being developed based on our research over 5 years. These models can find out how your inherent constructs help or limit you to achieve your goals.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#010851',
                                color: 'white',
                                borderRadius: '50px',
                                padding: '8px 16px',
                                fontSize: '1rem',
                                boxShadow: 3,
                                '&:hover': {
                                    backgroundColor: '#010851',
                                    color: 'white',
                                    transform: 'translateY(-4px)',
                                },
                                '&:active': {
                                    transform: 'scale(0.98)',
                                },
                            }}
                        >
                            More
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                direction={{ xs: 'column', md: 'row-reverse' }}
                justifyContent="space-between"
                alignItems="center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        image={AboutPic2}
                        alt="About AI"
                        sx={{
                            width: '110%',
                            height: 'auto',
                            borderRadius: '8px',
                            cursor: 'zoom-in',
                            '&:hover': { filter: 'brightness(0.8)' },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            variant="h4"
                            color="#010851"
                            fontWeight="bold"
                            mb={2}
                            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                        >
                            With you, anywhere you <span className="cursive">Work..</span>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" mb={3} sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}>
                            Beta AI
                        </Typography>
                        <Typography variant="body1" color="textSecondary" mb={3} sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}>
                            This is a human and AI-generated professional blueprint people model. We are currently in beta and continuously validating these models while working hard to improve the precise AI models.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#010851',
                                color: 'white',
                                borderRadius: '50px',
                                padding: '8px 16px',
                                fontSize: '1rem',
                                boxShadow: 3,
                                '&:hover': {
                                    backgroundColor: '#010851',
                                    color: 'white',
                                    transform: 'translateY(-4px)',
                                },
                                '&:active': {
                                    transform: 'scale(0.98)',
                                },
                            }}
                        >
                            More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;
