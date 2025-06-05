export interface ToolInterface {
  id: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  estimatedTime: string;
  difficulty: string;
  mainImage: string;
  materials: string[];
  steps: ToolStepInterface[];
  tips: string[];
  troubleshooting: ToolTroubleshootingInterface[];
}

export interface ToolStepInterface {
  title: string;
  description: string;
  duration: string;
  image?: string;
  warning?: string;
  tip?: string;
}

export interface ToolTroubleshootingInterface {
  problem: string;
  solution: string;
}
