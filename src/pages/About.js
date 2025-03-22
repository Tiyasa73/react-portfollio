import { motion } from 'framer-motion';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Circle } from '@mui/icons-material';

export default function About() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
      
        <Grid item xs={12} md={6}>
          <motion.img 
            src="https://img.freepik.com/premium-photo/illustration-international-programmer-day-illustration-flat-vecto-generative-ai_945369-30642.jpg" 
            alt="About Me" 
            style={{ width: '100%', borderRadius: '12px' }}
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}>
            
            <Typography variant="h4" gutterBottom sx={{ fontStyle: 'italic', color: 'purple' }}>
              About Myself
            </Typography>

            
            <Box mb={4}>
              <Typography variant="h5" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'blue' }}>
                <Circle fontSize="small" /> Frontend Development
              </Typography>
              <Typography>
                I specialize in building user-friendly, responsive, and interactive web applications. 
                My expertise includes modern frontend technologies that create seamless experiences.
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h5" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'green' }}>
                <Circle fontSize="small" /> UI Design
              </Typography>
              <Typography>
                I have experience with UI libraries like <strong>MUI</strong> and <strong>Tailwind CSS</strong>. 
                These tools help in designing sleek, accessible, and highly customizable interfaces.
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h5" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'red' }}>
                <Circle fontSize="small" /> Programming Languages
              </Typography>
              <Typography>
                My core programming skills include <strong>JavaScript</strong> for dynamic web development 
                and <strong>Core Java</strong> for robust backend and software solutions.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}