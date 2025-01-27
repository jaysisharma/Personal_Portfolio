import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 10px;
`;

const SocialButton = styled(Button)`
  margin: 10px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <Box id="contact" sx={{ py: 8, background: '#0a0a0a' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom align="center" color="primary">
            Get In Touch
          </Typography>
          <Typography variant="body1" paragraph align="center" color="text.secondary">
            Let's discuss your next project or career opportunities
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <ContactForm onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Send Message
                </Button>
              </ContactForm>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Connect With Me
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Feel free to reach out through any of these platforms
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <SocialButton
                    startIcon={<Email />}
                    href="mailto:your.email@example.com"
                    fullWidth
                  >
                    Email Me
                  </SocialButton>
                  <SocialButton
                    startIcon={<GitHub />}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    GitHub Profile
                  </SocialButton>
                  <SocialButton
                    startIcon={<LinkedIn />}
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    LinkedIn Profile
                  </SocialButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
