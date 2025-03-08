import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import banner from '../../../../assets/a1_2-removebg-preview.png';
import { fadeIn } from '../../../../utils/constants';

const MainContent = () => {
    return (
        <Box sx={{ padding: '4px 12px', maxWidth: 'screen-2xl', margin: 'auto', marginTop: '100px' }} id="Home">
            <Box
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                sx={{ textAlign: 'center', marginBottom: 0 }}
            >
                {/* Line 1: Reach Your */}
                <Typography
                    variant="h3"
                    sx={{
                        margin: '50px 3px 3px 3px',
                        animation: 'zoomIn 1s',
                        fontSize: '4rem',
                        fontWeight: 'bold'
                    }}
                >
                    Reach Your
                </Typography>

                {/* Line 2: Professional Potential */}
                <Typography
                    variant="h2"
                    sx={{
                        marginBottom: '3px',
                        animation: 'zoomIn 1s',
                        fontSize: '4.5rem',
                        fontStyle: 'italic'
                    }}
                >
                    Professional Potential
                </Typography>

                {/* Increased font size for body text */}
                <Typography
                    variant="body1"
                    sx={{ marginBottom: '5px', animation: 'zoomIn 1s', fontSize: '1.2rem' }} // Slight increase
                >
                    Everyone has tons of work to get through. Some accept the frustration.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ marginBottom: '20px', animation: 'zoomIn 1s', fontSize: '1.2rem' }} // Slight increase
                >
                    Others choose Thee Castable AI to speed up their tasks.
                </Typography>

                {/* Get Started For Free Text */}
                <Typography
                    component="a"
                    href="/"  // Replace with your desired URL
                    sx={{
                        backgroundColor: '#010851',
                        color: 'white',
                        padding: '15px 28px',
                        fontSize: '1.2rem',
                        borderRadius: '9999px',
                        boxShadow: 3,
                        transition: 'all 0.3s ease-in-out',
                        marginBottom: '20px',
                        display: 'inline-block',  // Makes it look like a button
                        '&:hover': {
                            backgroundColor: '#010851',
                            transform: 'translateY(-4px)',
                        },
                        '&:active': {
                            transform: 'scale(0.98)',
                            transitionDuration: '75ms',
                        },
                        '&:focus': {
                            transform: 'scale(1.01)',
                        },
                        '@media (prefers-reduced-motion)': {
                            transition: 'none',
                            transform: 'none',
                        },
                    }}
                >
                    Get TheeCastable for free
                </Typography>


                {/* No credit card text */}
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '1rem',
                        color: 'gray',
                        marginTop: '-10px',
                        marginBottom: '10px',
                        fontWeight: 'normal'
                    }}
                >
                    No credit card required
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: { xs: '2px', md: '8px' },
                    maxWidth: '1440px',
                    margin: 'auto',
                    marginLeft: { xs: '16px', md: '32px' },
                    marginRight: { xs: '16px', md: '32px' },
                }}
                id="Home"
            >
                <Box
                    sx={{
                        padding: { xs: '9px 4px', md: '9px 9px' },
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row-reverse' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: '24px',
                        background: 'linear-gradient(99deg, #f374e6 0%, #5961F9 100%)',
                        borderRadius: '12px',
                        borderBottomRightRadius: '80px',
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        animation: 'fade-up 2s',
                    }}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <Box
                        sx={{
                            display: 'grid',
                            width: { xs: '100%', md: '50%' },
                            backgroundColor: 'white',
                            padding: '24px',
                            border: '2px solid #ddd',
                            borderRadius: '12px',
                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                            height: '350px',
                            marginRight: { xs: '0px', md: '32px' },
                        }}
                    ></Box>

                    <Box
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        sx={{
                            width: { md: '50%' },
                            animation: 'zoomIn 1s',
                            padding: { xs: '24px', md: '32px' },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                marginBottom: '22px',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: { xs: '1.75rem', md: '2.5rem' },
                                animation: 'zoomIn 1s',
                            }}
                        >
                            Decode your leadership blueprint with our AI-driven models
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: '#EBEBEB',
                                marginBottom: '32px',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                animation: 'zoomIn 1s',
                            }}
                        >
                            Our unique AI models can detect your leadership patterns faster and more accurately.
                            Discover your unique mental constructs that keep you down and make you grow.
                        </Typography>

                        <Box>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    padding: '8px 16px',
                                    fontSize: '1rem',
                                    border: '1px solid white',
                                    borderRadius: '50px',
                                    boxShadow: 3,
                                    transition: 'all 0.3s ease-in-out',
                                    marginBottom: '4px',
                                    '&:hover': {
                                        color: 'white',
                                        border: '1px solid #010851',
                                        backgroundColor: '#010851',
                                        transform: 'translateY(-4px)',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                        transitionDuration: '75ms',
                                    },
                                    '&:focus': {
                                        transform: 'scale(1.01)',
                                    },
                                    '@media (prefers-reduced-motion)': {
                                        transition: 'none',
                                        transform: 'none',
                                    },
                                }}
                            >
                                Get Guide
                            </Button>

                            <Typography
                                variant="caption"
                                sx={{
                                    color: '#EBEBEB',
                                    marginLeft: '8px',
                                    fontSize: '0.75rem',
                                    marginTop: '4px',
                                    display: 'block',
                                }}
                            >
                                Try Guidance’s for free.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default MainContent;
