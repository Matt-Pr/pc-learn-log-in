import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#f9fafc", py: 4, mt: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 تمامی حقوق محفوظ است.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            طراحی و توسعه توسط <Link href="#" underline="hover">گروه توسعه‌دهندگان</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
