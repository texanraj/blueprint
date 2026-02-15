import type { Achievement, Skill, Certification } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'strategic',
    title: 'Strategic Enablement',
    description: 'Driving enterprise transformation through strategic cloud adoption and AI implementation.',
    icon: 'TrendingUp',
    metrics: [
      '$2M+ in pipeline generated',
      'Ex. Ensono, New York Life, Bridgestone, Qualys',
      'Agentic AI on Bedrock',
      'Mainframe Modernization'
    ]
  },
  {
    id: 'workshop',
    title: 'Workshop Excellence',
    description: 'Delivering world-class technical workshops with exceptional customer satisfaction.',
    icon: 'Users',
    metrics: [
      '4.92/5.0 average CSAT',
      'GenAI Workshops',
      'EKS Auto Mode Workshops',
      'Agentic AI Hands-on Lab development'
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Recognized for groundbreaking solutions and innovative approaches to cloud challenges.',
    icon: 'Lightbulb',
    metrics: [
      '2x AWS Innovation Kickstarter',
      'PartnerFlix Selection',
      'SignalBoost Selection',
      'ASP Builder Quest Finalist'
    ]
  },
  {
    id: 'thought-leadership',
    title: 'Thought Leadership',
    description: 'Influencing the cloud community through content and technical expertise.',
    icon: 'Award',
    metrics: [
      'TFC Gold Member Status',
      '30k+ Global Viewers',
      '11 Technical Blog Publications',
      'Viral Technical Content on YT'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'Generative AI',
    items: ['Amazon Bedrock', 'Amazon Nova', 'Prompt Engineering', 'Agentic AI', 'RAG', 'SagemakerAI', 'Kiro'],
    icon: 'Brain'
  },
  {
    category: 'Containers',
    items: ['Amazon EKS', 'Amazon ECR', 'Kubernetes', 'Docker', 'EKS Auto Mode'],
    icon: 'Container'
  },
  {
    category: 'Infrastructure as Code',
    items: ['AWS CDK', 'Terraform', 'CloudFormation', 'Ansible(config)'],
    icon: 'Code'
  },
  {
    category: 'Security',
    items: ['KubeArmor', 'OPA', 'AWS Security Hub', 'Kyverno', 'Aqua/ Falco'],
    icon: 'Shield'
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    level: 'Early Adopter',
    icon: 'Brain'
  },
  {
    name: 'AWS Solutions Architect',
    level: 'Professional',
    icon: 'Cloud'
  },
  {
    name: 'AWS Solutions Architect',
    level: 'Associate',
    icon: 'Cloud'
  },
  {
    name: 'AWS Cloud Practitioner',
    level: 'Foundational',
    icon: 'Cloud'
  },
  {
    name: 'CKAD',
    level: 'Certified Kubernetes Application Developer',
    icon: 'Container'
  },
   {
    name: 'RHCE',
    level: 'Red Hat Certified Engineer',
    icon: 'Cloud'
  }
];
