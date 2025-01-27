import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ProjectCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-5px);
  }
`;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN application with Redux state management, JWT authentication, and PayPal integration.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    live: '#'
  },
  {
    title: 'DevOps Pipeline',
    description: 'Automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for microservices deployment.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Chat App',
    description: 'WebSocket-based chat application with real-time messaging and file sharing capabilities.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Infrastructure as Code',
    description: 'AWS infrastructure provisioning using Terraform with automated scaling and monitoring.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['Terraform', 'AWS', 'Prometheus', 'Grafana'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8, background: '#0a0a0a' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom align="center" color="primary">
            Projects
          </Typography>
          <Typography variant="body1" paragraph align="center" color="text.secondary">
            A selection of my recent work in both development and DevOps
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Typography
                            key={tech}
                            variant="caption"
                            sx={{
                              bgcolor: 'rgba(0, 188, 212, 0.1)',
                              color: '#00bcd4',
                              px: 1,
                              py: 0.5,
                              borderRadius: 1
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ mt: 'auto', p: 2 }}>
                      <Button
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                      <Button
                        startIcon={<Launch />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
