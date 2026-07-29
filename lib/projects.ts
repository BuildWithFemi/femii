export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  role?: string;            // e.g. "AI Engineer"
  summary: string;          // short — shown on card
  description: string;      // long — shown on detail page
  icon: string;             // lucide icon name (kebab-case)
  thumbnail?: string;       // optional image path (shown on large card)
  accentColor: string;      // CSS color for card bg tint
  tags: string[];
  metrics: Metric[];
  problem: string;
  solution: string;
  githubUrl?: string;
  deployUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "my-right",
    title: "MyRight",
    role: "AI Engineer",
    summary: "A Smart ADR Platform for Nigeria that resolves disputes quickly, affordably, and without going to court.",
    description:
      "MyRight is an AI-powered Alternative Dispute Resolution (ADR) platform built for Nigeria. It helps individuals and businesses resolve conflicts quickly, affordably, and without the friction of going to court — through intelligent AI guidance and certified human mediators.",
    icon: "scale",
    thumbnail: "/projects/myrightthumbnail.jpg",
    accentColor: "rgba(18,28,22,1)",
    tags: ["React", "TypeScript", "Gemini API", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "Resolution time",  value: "−70%"  },
      { label: "Cost vs. court",   value: "−85%"  },
      { label: "Platform uptime",  value: "99.9%" },
    ],
    problem:
      "Nigeria's court system is slow, expensive, and inaccessible to most people. Minor disputes often go unresolved or escalate unnecessarily due to lack of affordable mediation options.",
    solution:
      "An AI-guided dispute intake flow powered by the Gemini API that classifies disputes, recommends resolution paths, and connects parties with certified mediators — all within a clean, accessible web interface.",
    githubUrl: "https://github.com/BuildWithFemi",
    deployUrl: "https://my-right-one.vercel.app/",
    featured: true,
  },
  {
    slug: "ml-crime-prediction",
    title: "ML Crime Prediction Model",
    role: "ML Engineer",
    summary: "A resource allocation problem disguised as a prediction problem. Helping law enforcement act before crimes happen.",
    description:
      "A machine learning system that predicts crime likelihood by location, time, and contextual factors — reframing crime prevention as a resource allocation challenge. Built to help law enforcement deploy officers proactively rather than reactively.",
    icon: "brain-circuit",
    thumbnail: "/projects/mlmodelthumbnail.jpg",
    accentColor: "rgba(22,18,30,1)",
    tags: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Streamlit"],
    metrics: [
      { label: "Prediction accuracy", value: "88.4%" },
      { label: "Features engineered", value: "42"    },
      { label: "Crime categories",    value: "15"    },
    ],
    problem:
      "Law enforcement agencies respond to crimes after they happen. Without predictive insight, patrol resources are spread thin and high-risk windows go unaddressed.",
    solution:
      "An XGBoost classification model trained on historical crime data with time, location, and demographic features. Deployed as an interactive Streamlit app for real-time risk scoring and hotspot visualization.",
    githubUrl: "https://github.com/BuildWithFemi",
    deployUrl: "https://fbi-crime-investigation-firstproject1.streamlit.app/",
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    summary: "Retrieval-augmented generation chatbot over private knowledge bases.",
    description:
      "An enterprise-grade RAG system that grounds LLM responses in verified private documents, cutting hallucinations dramatically and enabling domain-specific Q&A at scale.",
    icon: "message-square-code",
    accentColor: "rgba(20,35,30,1)",
    tags: ["Python", "LangChain", "Pinecone", "Next.js", "OpenAI"],
    metrics: [
      { label: "Hallucination rate", value: "−95%" },
      { label: "Response latency",   value: "188ms" },
      { label: "Docs indexed",       value: "50k+"  },
    ],
    problem:
      "Generic LLMs hallucinate when queried on private or domain-specific data, making them unreliable for enterprise use cases.",
    solution:
      "Hybrid search pipeline using Pinecone dense retrieval + BM25 sparse matching, re-ranked by a Cross-Encoder for maximum relevance before LLM synthesis.",
    deployUrl: "https://github.com/",
  },
  {
    slug: "dashboard",
    title: "Analytics Dashboard",
    summary: "Real-time operational dashboard for monitoring ML model performance.",
    description:
      "A full-stack analytics dashboard that streams live model metrics, data drift signals, and prediction distributions. Designed for ML teams that need instant observability into production models.",
    icon: "layout-dashboard",
    accentColor: "rgba(40,28,20,1)",
    tags: ["Next.js", "TypeScript", "Recharts", "FastAPI", "Redis"],
    metrics: [
      { label: "Refresh rate",  value: "< 1s"  },
      { label: "Data sources",  value: "8"     },
      { label: "Uptime",        value: "99.9%" },
    ],
    problem:
      "ML teams had no unified view of model health across environments — issues were caught days late, after silent degradation.",
    solution:
      "WebSocket-powered dashboard with configurable alert thresholds, drift detection charts, and exportable reports — deployed as a standalone service.",
    deployUrl: "https://github.com/",
  },
  {
    slug: "cv-detector",
    title: "Object Detector",
    summary: "Real-time object detection API fine-tuned for industrial inspection.",
    description:
      "A computer vision inference service built on a fine-tuned YOLO model for detecting surface defects in manufactured parts. Deployed as a low-latency REST API with a React monitoring UI.",
    icon: "scan-eye",
    accentColor: "rgba(20,30,45,1)",
    tags: ["Python", "YOLOv8", "FastAPI", "React", "OpenCV"],
    metrics: [
      { label: "mAP@0.5",       value: "91.3%" },
      { label: "Inference time", value: "24ms"  },
      { label: "Defect classes", value: "14"    },
    ],
    problem:
      "Manual visual inspection was slow, inconsistent, and couldn't scale to 24/7 production line throughput.",
    solution:
      "Fine-tuned YOLOv8 on a custom dataset of 12k annotated images, wrapped in a FastAPI service with batched GPU inference and a React UI for live camera feeds.",
    deployUrl: "https://github.com/",
  },
];
