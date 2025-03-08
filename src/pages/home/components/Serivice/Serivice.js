import React from 'react'
import { Box, Button } from '@mui/material'
import Banner from '../../../../assets/ai6.png'
import { fadeIn } from '../../../../utils/constants'
function Serivice() {
    return (
        <Box className="md:px-14 p-4 max-w-screen-2x1 mx-auto my-12 " id='Services'>
            <div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='gradientBg2 rounded-x1 rounded-md rounded-se-full rounded-bl-full  md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 animate__animated animate__zoomIn'>
                    <div>
                        <img src={Banner} alt="" className='lg:h-[350px] rounded-br-[80px] rounded-br-[-80px] rounded-l-lg ' data-aos="fade-up" data-aos-duration="1000" />
                    </div>
                    <div className='md:w-3/5 ml-32'>
                        <h2 className='md:text-5xl text-4xl font-bold text-black mb-6 leading-relaxed' data-aos="fade-up" data-aos-duration="1000">Services Enterprise <span className="cursive">level</span></h2>
                        <ul className='text-black text-lg mb-8' data-aos="fade-up" data-aos-duration="1000">
                            <li>Your approach towards work makes you appear focussed, aggressive and commanding</li>
                            <li className='mt-2'>You give the impression that you are skilled, diligent and hardworing</li>
                            <li className='mt-3'>You acheive most of it with caution and avoid pitfalls</li>
                        </ul>
                        <div>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#010851',
                                    color: 'white',
                                    padding: '8px 16px',
                                    fontSize: '1rem',
                                    borderRadius: '9999px',
                                    boxShadow: 3,
                                    transition: 'all 0.3s ease-in-out',
                                    marginBottom: '4px',
                                    '&:hover': {
                                        backgroundColor: '#010851',
                                        color: 'white',
                                        transform: 'translateY(-4px)',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                        transitionDuration: '75ms',
                                    },
                                    '&:focus': {
                                        transform: 'scale(1.01)',
                                    },
                                    '&:hover, &:focus': {
                                        transition: 'all 0.3s ease-in-out',
                                    },
                                    '@media (prefers-reduced-motion)': {
                                        transition: 'none',
                                        transform: 'none',
                                    },
                                }}
                            >
                                More
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Serivice
