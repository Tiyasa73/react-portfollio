import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} sx={{
      bgcolor: "primary.main", color: "white", textAlign: "center", p: 2, mt: 4
    }}>
      <Typography variant="body2">© {new Date().getFullYear()} My Portfolio. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
