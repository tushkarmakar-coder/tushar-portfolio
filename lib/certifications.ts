import fs from 'fs';
import path from 'path';

export interface Certification {
  title: string;
  issuer: string;
  fileName: string;
  filePath: string;
  badge?: string;
  id?: string;
  date?: string;
  type: 'pdf' | 'image';
}

const MAPPING: Record<string, { name: string; badge?: string }> = {
  "Promptengineering": { name: "Prompt Engineering for ChatGPT" },
  "IncidentManage": { name: "Incident Management" },
  "GenAIBeg": { name: "Generative AI Beginner", badge: "Beginner.png" },
  "GenAIFund": { name: "Generative AI Fundamentals", badge: "Fundamental.png" },
  "GenAIPrac": { name: "Generative AI Practitioner", badge: "Practitioner.png" },
};

export async function getCertifications(): Promise<Certification[]> {
  const certsDir = path.join(process.cwd(), 'public', 'data', 'certificates');
  const badgeBaseUrl = '/data/badge/GEN-AI/';

  if (!fs.existsSync(certsDir)) {
    console.warn(`Certificates directory not found at ${certsDir}`);
    return [];
  }

  const files = fs.readdirSync(certsDir);
  
  const certs: Certification[] = files.map(file => {
    const ext = path.extname(file).toLowerCase();
    const type: 'pdf' | 'image' = ext === '.pdf' ? 'pdf' : 'image';
    
    let title = file.split('.')[0]; // Default
    let badge: string | undefined = undefined;

    for (const [key, info] of Object.entries(MAPPING)) {
      if (file.includes(key)) {
        title = info.name;
        if (info.badge) {
          badge = `${badgeBaseUrl}${info.badge}`;
        }
        break;
      }
    }

    // Try to extract ID if present in previous hardcoded data logic
    // (In actual filenames provided, there weren't IDs, but I'll keep the structure)
    
    return {
      title,
      issuer: "Infogain",
      fileName: file,
      filePath: `/data/certificates/${file}`,
      badge,
      type,
      // For now, these are static as they aren't in the filename
      date: "2025-2026", 
    };
  });

  return certs;
}
