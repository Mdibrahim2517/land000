import React, { useState } from 'react';
import { Button, Switch, FormControlLabel, Typography, Box, Grid, Card, CardContent, CardActions } from '@mui/material';
import { PACKAGES } from '../../../../constant/homeConstant';
function Prices() {
    const [Yearly, setYearly] = useState(false);

    const handleToggle = () => {
        setYearly(prevState => !prevState);
    };

    return (
        <Box sx={{ px: 4, py: 10, maxWidth: 'lg', mx: 'auto' }} id="Prices">
            <Box sx={{ textAlign: 'center', animation: 'zoomIn 0.5s', mb: 2 }}>
                <Typography variant="h3" fontWeight="bold" color="#010851" mb={2}>
                    Plans and <span className="cursive">Pricing</span>
                </Typography>
                <Typography variant="h6" color="#010851" mb={2} sx={{ color: '#b0b0b0' }}>
                    Choose how to level up your productivity
                </Typography>

                <FormControlLabel
                    control={
                        <Switch
                            checked={Yearly}
                            onChange={handleToggle}
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#010851',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#dfdcff',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#010851',
                                },
                            }}
                        />
                    }
                    label={Yearly ? 'Yearly' : 'Monthly'}
                    sx={{
                        mt: 3,
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        marginTop: '1px'
                    }}
                />
            </Box>


            <Grid container spacing={3} justifyContent="center" sx={{ mt: -5 }}>
                {PACKAGES?.map((pkg, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: '16px',
                                boxShadow: 3,
                                backgroundColor: '#dfdcff',
                                padding: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                marginTop: '15px'
                            }}
                        >
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h6" fontWeight="bold" color="#010851" align="center">
                                    {pkg.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" align="center" my={3}>
                                    {pkg.description}
                                </Typography>
                                <Typography variant="h6" color="#010851" align="center" fontWeight="bold">
                                    {Yearly ? `$${pkg.yearlyPrice}` : `$${pkg.MonthlyPrice}`}
                                    <span style={{ fontSize: '0.75rem', color: '#b0b0b0' }}>
                                        /{Yearly ? 'year' : 'month'}
                                    </span>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: '50px',
                                        padding: '8px 16px',
                                        backgroundColor: '#010851',
                                        boxShadow: 3,
                                        '&:hover': {
                                            backgroundColor: '#010851',
                                            color: 'white',
                                            transform: 'translateY(-4px)',
                                        },
                                        '&:active': {
                                            transform: 'scale(0.98)',
                                        },
                                        '&:focus': {
                                            transform: 'scale(1.01)',
                                        },
                                    }}
                                >
                                    Get Pay
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Prices;
