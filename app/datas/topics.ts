import {Cloud, Code, GitBranch, Terminal} from 'lucide-react'

 export const topics = [
    { 
      icon: Cloud, 
      name: "Cloud Infrastructure", 
      description: "Master AWS, Azure, and GCP with production-ready architectures",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: GitBranch, 
      name: "CI/CD Pipelines", 
      description: "Build automated workflows that ship code faster and safer",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Code, 
      name: "Container Tech", 
      description: "Deep dive into Docker, Kubernetes, and container orchestration",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Terminal, 
      name: "Infrastructure as Code", 
      description: "Automate everything with Terraform, Ansible, and modern IaC",
      color: "from-green-500 to-emerald-500"
    }
  ];
