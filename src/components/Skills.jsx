import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';
import styled from '@emotion/styled';

const SkillCard = styled(Paper)`
  padding: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(Box)`
  font-size: 3rem;
  margin-bottom: 15px;
  color: ${props => props.color};
`;

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 8, background: '#111' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom align="center" color="primary">
            Skills & Technologies
          </Typography>
          <Typography variant="body1" paragraph align="center" color="text.secondary">
            Expertise in both development and deployment technologies
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={3} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard elevation={3}>
                    <IconWrapper color={skill.color}>
                      <skill.icon />
                    </IconWrapper>
                    <Typography variant="h6" gutterBottom>
                      {skill.name}
                    </Typography>
                  </SkillCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
