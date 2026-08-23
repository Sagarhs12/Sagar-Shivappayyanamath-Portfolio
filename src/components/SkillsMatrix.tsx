import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, Server, Layers, Cloud, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]);

  const categories = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Languages & Frameworks', 'Data & Analytics'];

  const filteredSkills = SKILLS.filter((s) => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  });

  const getCodeSnippet = (skillName: string) => {
    switch (skillName) {
      case 'Python':
        return `# Asynchronous AI Pipeline & Fast Telemetry
import asyncio
from fastapi import FastAPI, UploadFile
import numpy as np

app = FastAPI(title="Edge AI Telemetry Service")

@app.post("/api/predict")
async def predict_sample(file: UploadFile):
    image_bytes = await file.read()
    tensor = preprocess_input(image_bytes)
    prediction = await model_infer(tensor)
    return {"status": "SUCCESS", "confidence": float(prediction.score)}`;
      case 'Machine Learning':
        return `# Supervised Pipeline & Predictive Modeling
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score

model = RandomForestClassifier(n_estimators=100, max_depth=12, random_state=42)
model.fit(X_train, y_train)

preds = model.predict(X_test)
print(classification_report(y_test, preds))`;
      case 'Artificial Intelligence':
        return `# Azure AI Foundry & Agent Orchestration
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

client = AIProjectClient(
    credential=DefaultAzureCredential(),
    project_connection_string="<AZURE_AI_CONN_STRING>"
)
agent = client.agents.create_agent(
    model="gpt-4o",
    name="DevOps-Assistant",
    instructions="Automate cloud diagnostics, pipeline triage, and telemetry analysis."
)`;
      case 'Data Analytics':
        return `# Telemetry Aggregation & Exploratory Analytics
import pandas as pd
import numpy as np

df = pd.read_sql("SELECT timestamp, model_accuracy, latency_ms FROM pipeline_metrics", conn)
summary = df.groupby(pd.Grouper(key='timestamp', freq='1D')).agg({
    'model_accuracy': ['mean', 'std'],
    'latency_ms': ['mean', 'max']
})
print("Telemetry Statistical Breakdown:\n", summary)`;
      case 'SQL':
      case 'MySQL':
        return `-- High-performance Database Query Optimization
SELECT 
    p.project_name,
    COUNT(d.deployment_id) AS total_deployments,
    AVG(d.duration_sec) AS avg_duration_sec,
    SUM(CASE WHEN d.status = 'SUCCESS' THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS pass_rate_pct
FROM projects p
JOIN deployments d ON p.id = d.project_id
WHERE d.created_at >= NOW() - INTERVAL 30 DAY
GROUP BY p.id, p.project_name
ORDER BY pass_rate_pct DESC;`;
      case 'React.js':
      case 'JavaScript / TypeScript':
        return `// Modern React + TypeScript Component Architecture
import React, { useState, useEffect } from 'react';

interface MetricDisplayProps {
  systemId: string;
  refreshRateMs?: number;
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({ systemId, refreshRateMs = 5000 }) => {
  const [telemetry, setTelemetry] = useState<{ status: string; uptime: string } | null>(null);

  useEffect(() => {
    const fetchTelemetry = async () => {
      const res = await fetch(\`/api/telemetry/\${systemId}\`);
      const data = await res.json();
      setTelemetry(data);
    };
    fetchTelemetry();
  }, [systemId]);

  return <div className="p-4 rounded-xl bg-[#121220] border border-orange-500/30">{telemetry?.status}</div>;
};`;
      case 'Node.js':
        return `// Enterprise Express API Service
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
  res.json({ status: 'HEALTHY', timestamp: new Date().toISOString() });
});

app.listen(3000, () => console.log('Microservice active on port 3000'));`;
      case 'Git':
        return `# Advanced Git CI Workflow Automation
# Clean feature branch rebase & semantic commit
git checkout -b feature/model-telemetry-v2
git add src/ models/
git commit -m "feat(ai): integrate real-time inference latency logger"
git push origin feature/model-telemetry-v2
# Trigger automated CI checks and PR review`;
      case 'Docker':
        return `# Production Multi-Stage Dockerfile for AI Microservice
FROM python:3.11-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-slim as runner
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`;
      case 'DevOps':
      case 'CI/CD':
        return `// Jenkinsfile - IBM CEP Automated Multi-Stage Cloud Pipeline
pipeline {
    agent any
    stages {
        stage('Audit & Lint') {
            steps { sh 'npm run lint && python -m flake8' }
        }
        stage('Test Suite') {
            steps { sh 'pytest tests/ --cov=src' }
        }
        stage('Container Build') {
            steps { sh 'docker build -t sagar/ai-pipeline:latest .' }
        }
        stage('Deploy to Cloud') {
            steps { sh 'docker run -d -p 80:8000 sagar/ai-pipeline:latest' }
        }
    }
}`;
      case 'Computer Vision':
        return `# Medical Radiography & Grad-CAM Heatmap Synthesis
import cv2
import tensorflow as tf
import numpy as np

def generate_gradcam(img_path, model, last_conv_layer_name):
    img = cv2.imread(img_path)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    resized = cv2.resize(img_rgb, (224, 224))
    
    # Compute gradient activation mapping
    grad_model = tf.keras.models.Model(
        [model.inputs], [model.get_layer(last_conv_layer_name).output, model.output]
    )
    return grad_model`;
      case 'Cloud Computing':
        return `# Oracle Cloud Infrastructure & Azure Architecture
# OCI CLI Compute Instance Provisioning
oci compute instance launch \
    --availability-domain "UuOw:AP-HYDERABAD-1-AD-1" \
    --compartment-id "$OCI_COMPARTMENT_ID" \
    --shape "VM.Standard.E4.Flex" \
    --shape-config '{"ocpus": 2, "memoryInGBs": 16}' \
    --image-id "$UBUNTU_IMAGE_ID" \
    --subnet-id "$VCN_SUBNET_ID" \
    --assign-public-ip true`;
      default:
        return `# High-performance technical execution with ${skillName}
SELECT 
    pipeline_id,
    AVG(execution_duration_ms) as avg_latency,
    COUNT(status = 'SUCCESS') as successful_runs
FROM ci_cd_telemetry_logs
GROUP BY pipeline_id
ORDER BY avg_latency ASC;`;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#08080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-widest uppercase">
              <span>⚡ TOOLS & TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              SOFTWARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">SKILLS</span> & MATRIX
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    : 'bg-[#12121e] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid: Badges Grid on Left, Live Interactive Terminal Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Skills Badge Tiles */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`group relative p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#161628] border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.25)]'
                      : 'bg-[#0e0e18] border-neutral-800/80 hover:border-orange-500/40 hover:bg-[#121222]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-orange-400/90 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-orange-300 transition-colors leading-tight">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Progress Meter Bar */}
                  <div className="mt-3 pt-2 border-t border-neutral-800/80">
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Code & CLI Sandbox Terminal */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0a0a14] border border-orange-500/40 overflow-hidden shadow-2xl space-y-4">
            
            {/* Terminal Window Chrome */}
            <div className="bg-[#121220] px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-neutral-400 ml-2">
                  sagar@workspace:~/{selectedSkill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                </span>
              </div>
              <span className="text-[10px] font-mono text-orange-400 font-bold">
                PROMPT SANDBOX
              </span>
            </div>

            {/* Selected Skill Overview Header */}
            <div className="px-5 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-display font-bold text-white">
                    {selectedSkill.name}
                  </h3>
                  <span className="text-xs font-mono text-orange-400">
                    {selectedSkill.category}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-mono font-bold">
                  {selectedSkill.level}% Proficiency
                </div>
              </div>
              <p className="text-xs text-neutral-300 mt-2 font-light leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            {/* Live Syntax Code Snippet */}
            <div className="p-4 mx-4 rounded-xl bg-[#050508] border border-neutral-800/90 font-mono text-xs text-orange-200/90 overflow-x-auto">
              <pre className="text-[11px] leading-relaxed font-mono">
                <code>{getCodeSnippet(selectedSkill.name)}</code>
              </pre>
            </div>

            {/* Terminal Status Bar */}
            <div className="px-5 pb-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-3">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Ready for production deployment
              </span>
              <span className="text-neutral-500">UTF-8 / Node 22 / Python 3.11</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
