import { motion } from 'framer-motion';
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export default function ContactPage() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
>
      <motion.img
        src="https://img.freepik.com/free-vector/technology-background-with-glowing-binary-code_23-2149160719.jpg"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.7,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            border: '2px solid white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
            Contact Me
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Name" variant="outlined" InputProps={{ style: { color: 'white' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Email" variant="outlined" InputProps={{ style: { color: 'white' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} InputProps={{ style: { color: 'white' } }} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
              Follow Me
            </Typography>
            <Box>
              <IconButton color="primary">
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton color="secondary">
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton color="primary">
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton color="info">
                <Twitter fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}