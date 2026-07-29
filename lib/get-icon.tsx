import {
  Cpu,
  MessageSquareCode,
  LayoutDashboard,
  ScanEye,
  Code2,
  Layers,
  Globe,
  Database,
  BrainCircuit,
  FlaskConical,
  Scale,
  type LucideProps,
} from "lucide-react";
import type { FC } from "react";

const iconMap: Record<string, FC<LucideProps>> = {
  "cpu":                  Cpu,
  "message-square-code":  MessageSquareCode,
  "layout-dashboard":     LayoutDashboard,
  "scan-eye":             ScanEye,
  "code-2":               Code2,
  "layers":               Layers,
  "globe":                Globe,
  "database":             Database,
  "brain-circuit":        BrainCircuit,
  "flask-conical":        FlaskConical,
  "scale":                Scale,
};

export function getIcon(name: string): FC<LucideProps> {
  return iconMap[name] ?? Cpu;
}
