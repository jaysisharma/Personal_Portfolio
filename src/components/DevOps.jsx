import React from 'react';
import { 
  Box, 
  Container, 
  Typography 
} from '@mui/material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const TimelineCard = styled(motion(Box))`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  margin: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 188, 212, 0.3);
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  background: linear-gradient(45deg, #00bcd4, #2196f3);
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background: linear-gradient(180deg, #00bcd4, #2196f3);
  width: 2px;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const devOpsJourney = [
  {
    title: 'Containerization',
    description: 'Docker container orchestration, multi-stage builds, and optimization techniques.',
    tools: ['Docker', 'Docker Compose', 'Container Registry'],
  },
  {
    title: 'Container Orchestration',
    description: 'Kubernetes cluster management, deployment strategies, and service mesh implementation.',
    tools: ['Kubernetes', 'Helm', 'Istio'],
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Automated testing, building, and deployment pipelines with modern CI/CD tools.',
    tools: ['Jenkins', 'GitLab CI', 'GitHub Actions'],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Cloud infrastructure automation and configuration management.',
    tools: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    title: 'Monitoring & Logging',
    description: 'Comprehensive monitoring, logging, and alerting solutions.',
    tools: ['Prometheus', 'Grafana', 'ELK Stack'],
  },
];

export default function DevOps() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #00bcd4, #2196f3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 6,
            fontWeight: 600,
          }}
        >
          DevOps Journey
        </Typography>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Timeline position="alternate">
          {devOpsJourney.map((item, index) => (
            <TimelineItem key={item.title}>
              <TimelineSeparator>
                <StyledTimelineDot />
                {index !== devOpsJourney.length - 1 && <StyledTimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <TimelineCard
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      color: '#00bcd4',
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    color="text.secondary" 
                    paragraph
                    sx={{ 
                      fontSize: '1rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {item.tools.map((tool) => (
                      <motion.div
                        key={tool}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            background: 'rgba(0, 188, 212, 0.1)',
                            color: '#00bcd4',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            display: 'inline-block',
                            border: '1px solid rgba(0, 188, 212, 0.2)',
                          }}
                        >
                          {tool}
                        </Typography>
                      </motion.div>
                    ))}
                  </Box>
                </TimelineCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Container>
  );
}
