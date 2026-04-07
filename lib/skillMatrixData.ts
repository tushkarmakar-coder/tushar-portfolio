export const skillMatrixData: Record<string, Record<string, { impact: string, usage: string[] }>> = {
  "Incident Management": {
    "Incident Management": {
      impact: "Owned high-severity P1/P2 incidents maintaining 95%+ SLA and reducing MTTR by ~25%",
      usage: [
        "End-to-end incident lifecycle handling",
        "Major incident bridge coordination",
        "RCA-driven problem management",
        "Production stability improvement"
      ]
    },
    "Major Incident Management": {
      impact: "Led cross-functional bridge calls restoring critical outages within ~2 hours",
      usage: ["Cross-team coordination", "Executive communication", "Restoration strategy", "Outage minimization"]
    },
    "P1/P2 Triage": {
      impact: "Rapidly diagnosed and assigned priority to incoming high-severity alerts",
      usage: ["Alert validation", "Priority assignment", "Initial stakeholder alert", "Quick mitigation"]
    },
    "Problem Management": {
      impact: "Eliminated 20–30% of recurring incidents through structured problem logging",
      usage: ["Trend analysis", "Known Error Database (KEDB) updates", "Workaround documentation", "Permanent fix tracking"]
    },
    "Root Cause Analysis (RCA)": {
      impact: "Investigated post-incident triggers to ensure zero recurrence of identical P1s",
      usage: ["5 Whys analysis", "Log deep-dives", "Timeline reconstruction", "Corrective action planning"]
    },
    "SLA Management": {
      impact: "Consistently achieved 95%+ SLA compliance for all critical resolution metrics",
      usage: ["SLA threshold monitoring", "Escalation triggering", "Reporting and metrics", "Vendor SLA enforcement"]
    },
    "MTTR": {
      impact: "Reduced Mean Time To Resolve by ~25% using optimized triage protocols",
      usage: ["Resolution bottleneck identification", "Process optimization", "Knowledge base utilization", "Automated alert tuning"]
    },
    "MTTD": {
      impact: "Improved Mean Time To Detect ensuring faster critical path awareness",
      usage: ["Monitoring dashboard design", "Alert threshold tuning", "Proactive anomaly detection", "Log aggregation"]
    },
    "Production Support": {
      impact: "Served as sole SPOC for 4+ years stabilizing high-pressure enterprise environments",
      usage: ["L2/L3 application support", "System health checks", "Release monitoring", "Downtime prevention"]
    }
  },
  "Technical Skills": {
    "SQL": {
      impact: "Accelerated root cause identification using direct backend database querying",
      usage: ["Complex JOIN analysis", "Data validation", "State verification", "Custom reporting"]
    },
    "REST API Testing": {
      impact: "Diagnosed integration failures between microservices causing cross-platform incidents",
      usage: ["Postman payload testing", "API failure debugging", "Endpoint monitoring", "Latency profiling"]
    },
    "JSON": {
      impact: "Identified malformed data payloads leading to transactional drop-offs",
      usage: ["Payload schema validation", "Data parsing", "Log transcription", "API mock testing"]
    },
    "Backend Log Analysis": {
      impact: "Uncovered hidden stack traces before they manifested into full outages",
      usage: ["Server log grep/search", "Error code tracking", "Timeline correlation", "Anomaly identification"]
    },
    "Oracle B2C Cloud": {
      impact: "Supported enterprise SaaS instances serving millions of end-user requests",
      usage: ["Console administration", "Workflow debugging", "Config management", "User state tracking"]
    }
  },
  "Tools": {
    "ServiceNow (Basic)": {
      impact: "Managed incident workflows dynamically prioritizing based on enterprise impact",
      usage: ["Ticket lifecycle management", "CMDB reference", "SLA tracking", "Escalation workflows"]
    },
    "JIRA": {
      impact: "Synchronized operations with Agile dev teams for permanent bug fixes",
      usage: ["Defect tracking", "Sprint planning", "Kanban visualization", "Bug report detailing"]
    },
    "Cherwell": {
      impact: "Governed service requests and maintained 100% data integrity for incident records",
      usage: ["Incident logging", "Asset correlations", "Resolution documentation", "Change management tracking"]
    }
  }
};
