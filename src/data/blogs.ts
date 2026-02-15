import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Managing an Amazon EKS Cluster Using AWS CDK and SHI's Cloud Resource Property Manager",
    url: "https://aws.amazon.com/blogs/architecture/field-notes-managing-an-amazon-eks-cluster-using-aws-cdk-and-cloud-resource-property-manager/",
    date: "2020",
    tags: ["EKS", "CDK", "Kubernetes", "Architecture"],
    category: "EKS"
  },
  {
    id: 2,
    title: "Automating image compliance for Amazon EKS using Amazon Elastic Container Registry and AWS Security Hub",
    url: "https://aws.amazon.com/blogs/containers/automating-image-compliance-for-amazon-eks-using-amazon-elastic-container-registry-and-aws-security-hub/",
    date: "2021",
    tags: ["EKS", "ECR", "Security Hub", "Compliance", "Security"],
    category: "Security"
  },
  {
    id: 3,
    title: "Easy as one-two-three policy management with Kyverno on Amazon EKS",
    url: "https://aws.amazon.com/blogs/containers/easy-as-one-two-three-policy-management-with-kyverno-on-amazon-eks/",
    date: "2021",
    tags: ["EKS", "Kyverno", "Policy Management", "Security"],
    category: "Security"
  },
  {
    id: 4,
    title: "Scaling Browser Automation with Puppeteer on AWS Lambda with Container Image Support",
    url: "https://aws.amazon.com/blogs/architecture/field-notes-scaling-browser-automation-with-puppeteer-on-aws-lambda-with-container-image-support/",
    date: "2021",
    tags: ["Lambda", "Puppeteer", "Containers", "Automation"],
    category: "Automation"
  },
  {
    id: 5,
    title: "Autonomous ML-based detection and identification of root cause for incidents in microservices running on EKS",
    url: "https://aws.amazon.com/blogs/containers/autonomous-ml-based-detection-and-identification-of-root-cause-for-incidents-in-microservices-running-on-eks/",
    date: "Dec 2021",
    tags: ["EKS", "Machine Learning", "Observability", "AI/ML"],
    category: "AI/ML"
  },
  {
    id: 6,
    title: "Automate Ethereum node validator deployment on Amazon EC2 using AWS CDK",
    url: "https://aws.amazon.com/blogs/database/automate-ethereum-node-validator-deployment-on-amazon-ec2-using-aws-cdk/",
    date: "Mar 2022",
    tags: ["EC2", "CDK", "Ethereum", "Blockchain", "Web3"],
    category: "Blockchain"
  },
  {
    id: 7,
    title: "Harden Amazon EKS in minutes with Styra DAS Free and OPA",
    url: "https://aws.amazon.com/blogs/containers/harden-amazon-eks-in-minutes-styra-das-free-and-opa/",
    date: "Jun 2022",
    tags: ["EKS", "OPA", "Styra", "Security", "Policy"],
    category: "Security"
  },
  {
    id: 8,
    title: "Secure Bottlerocket deployments on Amazon EKS with Kubearmor",
    url: "https://aws.amazon.com/blogs/containers/secure-aws-bottlerocket-deployments-on-amazon-eks-with-kubearmor/",
    date: "Oct 2022",
    tags: ["EKS", "Bottlerocket", "KubeArmor", "Security"],
    category: "Security"
  },
  {
    id: 9,
    title: "Automate Avalanche node deployment using the AWS CDK: Part 1",
    url: "https://aws.amazon.com/blogs/database/part-1-automate-avalanche-node-deployment-using-the-aws-cdk/",
    date: "Mar 2024",
    tags: ["CDK", "Avalanche", "Blockchain", "Web3"],
    category: "Blockchain"
  },
  {
    id: 10,
    title: "Run a WAX Blockchain node using AWS CDK",
    url: "https://aws.amazon.com/blogs/database/run-a-wax-blockchain-node-using-aws-cdk/",
    date: "2024",
    tags: ["CDK", "WAX", "Blockchain", "Gaming", "Web3"],
    category: "Blockchain"
  },
  {
    id: 11,
    title: "Enhancing container security in Amazon EKS Auto Mode with KubeArmor",
    url: "https://aws.amazon.com/blogs/containers/enhancing-container-security-in-amazon-eks-auto-mode-with-kubearmor/",
    date: "2025",
    tags: ["EKS", "EKS Auto Mode", "KubeArmor", "Security", "Containers"],
    category: "Security"
  }
];

export const allTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).sort();

export const categories = ['All', 'EKS', 'Security', 'Automation', 'AI/ML', 'Blockchain'] as const;
