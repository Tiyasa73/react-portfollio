import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, TextField, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]); // To store added projects
  const [projectName, setProjectName] = useState(''); // Input field for project name
  const [projectLink, setProjectLink] = useState(''); // Input field for project link

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  // Save projects to localStorage whenever the projects array changes
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects]);

  // Add project function
  const addProject = () => {
    if (projectName && projectLink) {
      const newProject = { name: projectName, link: projectLink };
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      setProjectName(''); // Clear input field
      setProjectLink(''); // Clear input field
    } else {
      alert('Please provide both name and link for the project.');
    }
  };

  // Delete project function
  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <motion.div
      style={{
        padding: '4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg,rgb(17, 12, 12),rgb(56, 13, 111))', // Dark gradient background
        backgroundSize: '400% 400%', // Smooth gradient transition
      }}
      initial={{ backgroundPosition: '100% 100%' }} // Start with a different gradient position
      animate={{
        backgroundPosition: '0% 0%', // Animate to a new gradient position
      }}
      transition={{
        duration: 4,  // Time for full transition of gradient
        ease: 'easeInOut',
        repeat: Infinity, // Make it loop infinitely
        repeatType: 'reverse', // Reverse the gradient transition for dynamic effect
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200, textAlign: 'center' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#FF7A00',
              mb: 4,
              fontSize: '3rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              borderBottom: '5px solid #FF7A00', // Decorative border bottom
              display: 'inline-block',
              paddingBottom: '10px',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            See My Projects
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ mb: 4 }}>
            <TextField
              label="Project Name"
              variant="outlined"
              fullWidth
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Project Link"
              variant="outlined"
              fullWidth
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
            />
          </Box>

          <Button
            variant="contained"
            color="secondary"
            onClick={addProject}
            sx={{
              borderRadius: '30px',
              fontWeight: 'bold',
              padding: '10px 30px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#FF7A00',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Add Project
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {projects.length === 0 ? (
              <Typography variant="h6" sx={{ color: '#FF7A00', fontWeight: 'bold' }}>
                No projects added yet.
              </Typography>
            ) : (
              projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      padding: '2rem',
                      borderRadius: '10px',
                      background: '#2e2e2e',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FF7A00',
                        fontWeight: 'bold',
                        mb: 1,
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={project.link}
                      target="_blank"
                      sx={{
                        borderRadius: '30px',
                        padding: '10px 30px',
                        fontWeight: 'bold',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          backgroundColor: '#FF7A00',
                          color: '#fff',
                        },
                      }}
                    >
                      Open Project
                    </Button>
              
                    <IconButton
                      onClick={() => deleteProject(index)}
                      sx={{
                        color: '#FF7A00',
                        marginLeft: '10px',
                        '&:hover': {
                          color: '#ff1a1a',
                        },
                      }}
                    >
                      <span role="img" aria-label="delete">❌</span>
                    </IconButton>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Projects;
