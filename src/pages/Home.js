import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const [color, setColor] = useState('green'); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('#F08395'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);
  const handleDownloadCV = () => {
    window.open('\Tiyasa_Resume.pdf', '_blank');  
  };
  return (
    <>
      <motion.div
        style={{
          padding: '4rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(45deg,rgb(17, 12, 12),rgb(45, 11, 89))',
          backgroundSize: '400% 400%',
        }}
        initial={{ backgroundPosition: '100% 100%' }}
        animate={{
          backgroundPosition: '0% 0%',
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://th.bing.com/th/id/R.4bda1e9b90ec687219ef7becf09eec30?rik=IkTpmD%2fWjy7nTA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f0QkAhn3.jpg&ehk=3x%2fH%2fwOWgSmV5atUakr3mPZUqYg3QtqQ3guqjcGOYVU%3d&risl=&pid=ImgRaw&r=0)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3, 
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20, 
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }} 
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: "#CC6CE7", 
                    display: 'inline-block',
                    fontWeight: "bold",
                  }}
                >
                  Web Developer
                </Typography>
              </motion.div>
              <Typography
                variant="h4" 
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#E37879', 
                  transition: 'color 1s', 
                  fontStyle: "italic"
                }}
              >
                I am Tiyasa
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: '#A8C311', 
                  fontSize: '1.2rem',
                }}
              >
                Passionate about building interactive and responsive websites using the latest technologies like React, MUI, and more.
              </Typography>

              <Button variant="contained" color="secondary"  onClick={handleDownloadCV}>
                Download my CV
              </Button>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton href="https://reactjs.org" target="_blank">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                    alt="React" 
                    width="60" 
                    height="60"
                  />
                </IconButton>

                <IconButton href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 64 64"
                  >
                    <path 
                      fill="#F7DF1E" 
                      d="M0 32c0-17.673 14.327-32 32-32s32 14.327 32 32-14.327 32-32 32S0 49.673 0 32zm51.2 0c0-10.643-8.557-19.2-19.2-19.2-4.718 0-9.086 1.666-12.55 4.488l-7.215 5.396v-7.64h-7.2v35.2h7.2v-17.6h7.27l.03-7.68h-7.3V32c0-4.264 3.474-7.2 7.68-7.2 4.707 0 8.47 3.763 8.47 8.8 0 2.262-1.774 4.99-4.72 5.14 3.11.236 4.78 2.34 4.78 4.96 0 3.332-2.658 6-6 6-3.544 0-6.4-2.856-6.4-6.4zm-16.66-6.48l4.81-3.488c2.644 2.179 4.73 5.055 4.73 9.088 0 6.72-5.44 12.16-12.16 12.16-6.64 0-12.16-5.44-12.16-12.16s5.52-12.16 12.16-12.16c2.302 0 4.462.648 6.15 1.75z"
                    />
                  </svg>
                </IconButton>

              
                <IconButton href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
                    alt="HTML" 
                    width="60" 
                    height="60"
                  />
                </IconButton>

            
                <IconButton href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" 
                    alt="CSS" 
                    width="60" 
                    height="60"
                  />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

      
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              <motion.img
                src="https://html.themeholy.com/webteck/demo/assets/img/hero/hero_img_21_1.png"
                alt="Web Development"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
