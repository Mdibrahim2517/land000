import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../../../../assets/logo3.png";

function Footer() {
    return (
        <Box className="bg-[#010851] px-4 py-4 max-w-screen-2xl mx-auto" sx={{ color: 'white' }}>
            <Box className="my-12 flex flex-col md:flex-row gap-12 animate__animated animate__zoomIn">
                <Box className="md:w-1/2 space-y-6">
                    <Link href="/" className="text-2xl font-semibold flex items-center space-x-3 text-white" sx={{ textDecoration: 'none' }}>
                        <img src={logo} alt="" className="w-20 inline-block items-center" />
                        <Typography variant="h4" className="text-white">Thee Castable</Typography>
                    </Link>
                    <Typography className="md:w-1/2" variant="body1" fontSize={'15px'}>
                        Guidance’s Business prioritizes robust security<br />
                        for your Generative AI usage.<br />
                        Our Traceless security mode guarantees data<br />
                        privacy by never utilizing or storing your businesses' data.
                    </Typography>
                </Box>

                <Box className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-10 items-start">
                    <Box className="space-y-3 mt-5">
                        <Typography variant="h6">Platform</Typography>
                        <Box className="space-y-3">
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Careers</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Privacy policy</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Terms of service</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>FAQ</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Plans</Link>
                        </Box>
                    </Box>

                    <Box className="space-y-3 mt-5">
                        <Typography variant="h6">Learn more</Typography>
                        <Box className="space-y-3">
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Rewrite</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>AI writing</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Blog</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Help center</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>AI content detector</Link>
                        </Box>
                    </Box>

                    <Box className="space-y-3 mt-5">
                        <Typography variant="h6">Guidance’s</Typography>
                        <Box className="space-y-3">
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Chrome extension</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Microsoft Edge extension</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Wordtune for iOS</Link>
                            <Link href="/" className="block hover:text-gray-300" sx={{ textDecoration: 'none', color: 'white' }}>Wordtune for business</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <hr />
            <Box className="flex flex-col sm:flex-row gap-6 sm:items-center justify-between my-8 animate__animated animate__zoomInLeft">
                <Typography variant="body2" sx={{ color: 'white' }}>All Rights Reserved © Thee Castable 2025</Typography>
                <Box className="flex items-center space-x-5 ">
                    <IconButton href="/" className="text-3xl cursor-pointer" sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        <FaInstagram />
                    </IconButton>
                    <IconButton href="/" className="text-3xl cursor-pointer" sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        <FaFacebookF />
                    </IconButton>
                    <IconButton href="/" className="text-3xl cursor-pointer" sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        <FaTwitter />
                    </IconButton>
                    <IconButton href="/" className="text-3xl cursor-pointer" sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton href="/" className="text-3xl cursor-pointer" sx={{ color: 'white', '&:hover': { color: 'white' } }}>
                        <FaYoutube />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
