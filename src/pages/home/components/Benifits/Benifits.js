import { React, useState } from 'react'
import g1 from "../../../../assets/g1.gif"
import g2 from "../../../../assets/g2.gif"
import g3 from "../../../../assets/g3.gif"
import { fadeIn } from '../../../../utils/constants'
import { Box, Typography } from '@mui/material'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { FaUserCircle } from "react-icons/fa";
import { Avatar, Paper } from "@mui/material";
function Benifits() {
    const [visibility, setVisibility] = useState({
        grid1: false,
        grid2: false,
        grid3: false,
    });

    const toggleContent = (grid) => {
        setVisibility((prev) => ({
            ...prev,
            [grid]: !prev[grid],
        }));
    };
    const feedbacks = [
        { user: "Ibrahim", feedback: "Great platform!" },
        { user: "kalith", feedback: "spot on!" },
        { user: "Samiq", feedback: "I love the user-friendly." },
        { user: "Ansar", feedback: "easy to use." },
        { user: "Vishnu", feedback: "Helped me gain" },
        { user: "fahath", feedback: "Amazing experience" },
        { user: "Abilash", feedback: "The AI-driven suggestions" },
        { user: "Manoj", feedback: "Best career guidance " },
        { user: "Riyas", feedback: "Highly recommended for students" },
        { user: "Noufal", feedback: "The assessment results" },
        { user: "Jazib", feedback: "Easy to navigate" },
        { user: "Adhil", feedback: "I feel more confident" }
    ];

    return (
        <>
            <Box
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="my-24 md:px-14 px-4 max-w-screen-2x1 mx-auto mt-4">
                <Box
                    id="Feature"
                    sx={{
                        textAlign: 'center',
                        px: 5,
                        mb: 10,
                        '& .MuiTypography-root': {
                            animation: 'fadeUp 2s',
                        }
                    }}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '3.75rem',
                            fontWeight: 'bold',
                            mb: 6,
                            mt: 10,
                            animation: 'zoomIn 1s',
                            color: '#010851'
                        }}
                    >
                        Do more, <span className="cursive animate__animated animate__pulse">faster</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'text.secondary',
                            lineHeight: '0.2',
                            animation: 'zoomIn 1s',
                        }}
                    >
                        Get to know Guidance’s GenAI platform
                    </Typography>
                </Box>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="lg:w-1/4 " data-aos="fade-up" data-aos-duration="2000">
                        <h3 className="text-2xl text-primary font-bold lg:w-1/2 mb-3 animate__animated animate__zoomIn">
                            Answer a few questions, let our AI-powered models go to work and tell you more
                        </h3>
                        <p className="pp text-base text-tartiary animate__animated animate__zoomIn">Our models can create your skills, inherent abilities, interests and values.
                            Overall a personalized roadmap for your professional control
                        </p>
                    </div>

                    <div className="w-full lg:w-3/4 animate__animated animate__zoomIn">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-8" data-aos="fade-up" data-aos-duration="1000">
                            {/* Grid 1 */}
                            <div
                                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
                                onClick={() => toggleContent("grid1")}
                            >
                                <div className="text-center">
                                    <h1 className="text-xl text-primary px-5 mt-5 flex items-center justify-center">
                                        Our Data Model
                                        {visibility.grid1 ? (
                                            <FaArrowUp className="ml-2 text-2xl" />
                                        ) : (
                                            <FaArrowDown className="ml-2 text-2xl" />
                                        )}
                                    </h1>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${visibility.grid1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-base mt-5">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Grid 2 */}
                            <div
                                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16"
                                onClick={() => toggleContent("grid2")}
                            >
                                <div className="text-center">
                                    <h1 className="text-xl text-primary px-5 mt-5 flex items-center justify-center">
                                        Our Projection Model
                                        {visibility.grid2 ? (
                                            <FaArrowUp className="ml-2 text-2xl" />
                                        ) : (
                                            <FaArrowDown className="ml-2 text-2xl" />
                                        )}
                                    </h1>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${visibility.grid2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-base mt-5">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Grid 3 */}
                            <div
                                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
                                onClick={() => toggleContent("grid3")}
                            >
                                <div className="text-center">
                                    <h1 className="text-xl text-primary px-5 mt-5 flex items-center justify-center">
                                        Our Prompt Model
                                        {visibility.grid3 ? (
                                            <FaArrowUp className="ml-2 text-2xl" />
                                        ) : (
                                            <FaArrowDown className="ml-2 text-2xl" />
                                        )}
                                    </h1>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${visibility.grid3 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-base mt-5">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Box>
            <Box sx={{ bgcolor: "#dfdcff", color: "Black", p: 3, borderRadius: 2, boxShadow: 3, mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                    User Feedback
                </Typography>

                {/* If more than one feedback, show slider */}
                {feedbacks.length > 1 ? (
                    <Box
                        sx={{
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            display: "flex",
                            gap: 2,
                            px: 2,
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": { display: "none" }
                        }}
                    >
                        {feedbacks.map((item, index) => (
                            <Paper
                                key={index}
                                sx={{
                                    p: 3,
                                    minWidth: 250,
                                    maxWidth: 300,
                                    textAlign: "center",
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center" // ✅ Centers all content including the icon
                                }}
                            >
                                <Avatar sx={{ bgcolor: "grey.400", width: 56, height: 56, mb: 1, mx: "auto" }}>
                                    <FaUserCircle size={40} />
                                </Avatar>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.user}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    {item.feedback}
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                ) : (
                    // If only one feedback, center it
                    <Box display="flex" justifyContent="center">
                        <Paper
                            sx={{
                                p: 3,
                                width: 300,
                                textAlign: "center",
                                boxShadow: 3,
                                borderRadius: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center" // ✅ Centers all content including the icon
                            }}
                        >
                            <Avatar sx={{ bgcolor: "grey.400", width: 56, height: 56, mb: 1, mx: "auto" }}>
                                <FaUserCircle size={40} />
                            </Avatar>
                            <Typography variant="h6" fontWeight="bold">
                                {feedbacks[0].user}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mt={1}>
                                {feedbacks[0].feedback}
                            </Typography>
                        </Paper>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default Benifits
