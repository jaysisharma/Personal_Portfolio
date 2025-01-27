import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const HeroContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(0, 188, 212, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const GradientText = styled(motion(Typography))`
  background: linear-gradient(45deg, #00bcd4, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const CodeBlock = styled(motion(Box))`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Fira Code', monospace;
  opacity: 0.8;
  font-size: 1.2rem;
  color: #00bcd4;
  white-space: pre;
  text-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.02);
    transition: all 0.3s ease;
  }
`;

const StyledButton = styled(motion(Button))`
  background: linear-gradient(45deg, #00bcd4, #2196f3);
  color: white;
  padding: 10px 25px;
  border-radius: 25px;
  text-transform: none;
  font-size: 1.1rem;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.2);
  &:hover {
    background: linear-gradient(45deg, #2196f3, #00bcd4);
    box-shadow: 0 6px 20px rgba(0, 188, 212, 0.3);
  }
`;

export default function Hero() {
  return (
    <HeroContainer id="home">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography 
              variant="h6" 
              color="primary" 
              gutterBottom
              sx={{ 
                fontWeight: 500,
                letterSpacing: 1.2,
              }}
            >
              Hello, I'm
            </Typography>
          </motion.div>
          
          <GradientText 
            variant="h1" 
            gutterBottom
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </GradientText>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typography 
              variant="h4" 
              color="text.secondary" 
              gutterBottom
              sx={{ 
                fontWeight: 300,
                letterSpacing: 1.1,
              }}
            >
              & DevOps Engineer
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph 
              sx={{ 
                maxWidth: 600,
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              Specializing in MERN stack development and modern DevOps practices.
            </Typography>
          </motion.div>

          <StyledButton
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            href="#contact"
          >
            Get in touch
          </StyledButton>
        </motion.div>
      </Container>

      <CodeBlock
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {`const developer = {
  frontend: ['React', 'Next.js', 'Material-UI'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  devops: ['Docker', 'Kubernetes', 'CI/CD'],
  passion: 'Building scalable solutions'
};`}
      </CodeBlock>
    </HeroContainer>
  );
}
