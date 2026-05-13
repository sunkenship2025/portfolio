/* Central source of truth — pulled from the resume. */

export const profile = {
    name: 'Sai Pranav Reddy',
    firstName: 'Sai Pranav',
    role: 'Software Engineering Intern Candidate',
    tagline: 'I build production software in Java, Python, and C++. CS & AI student at Mahindra University.',
    location: 'Hyderabad, India',
    education: {
        school: 'Mahindra University, Hyderabad',
        degree: 'B.Tech. in Computer Science & Artificial Intelligence',
        years: 'Aug 2023 – Expected May 2027',
        rollNo: 'SE23UARI025',
        coursework: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'DBMS',
            'Operating Systems',
            'Computer Networks',
            'Software Engineering',
            'Machine Learning',
            'Deep Learning',
        ],
    },
    contact: {
        phone: '+91 6309414582',
        emailPersonal: 'saipranav.me@gmail.com',
        emailCollege: 'se23uari025@mahindrauniversity.edu.in',
        github: 'https://github.com/sunkenship2025',
        githubHandle: 'github.com/sunkenship2025',
        linkedin: 'https://linkedin.com/in/saipranav-ch-3659b1184',
        linkedinHandle: 'linkedin.com/in/saipranav-ch',
    },
    aboutParagraphs: [
        "I'm a third-year CS & AI student at Mahindra University, Hyderabad, who likes the part of engineering where ideas turn into something real that someone uses every day.",
        "Across one freelance engagement and three internships I've shipped a live diagnostics backend in Python/FastAPI, customer-ranking pipelines for a national retail group, and time-series ML experiments for an applied-ML lab in Hamburg. The throughline: clean software engineering — OOP, layered architecture, version control, tests — applied to messy real-world data.",
        "Outside of class I was selected to the top 200 of 130,000 applicants for the Centific Residential Hackathon (top 0.15%) and led a four-person team to a 1st-prize finish at a national blockchain hackathon.",
    ],
    researchInterests: [
        {
            title: 'Applied Machine Learning on real-world data',
            body: 'Time-series sensor data, retail customer behaviour, IoT traffic — interested in models that survive the messiness of production, not just the cleanness of benchmarks.',
        },
        {
            title: 'Software systems for ML',
            body: 'Putting models behind clean APIs, sub-100 ms inference services, reproducible pipelines, and the engineering rigour that separates a notebook from a product.',
        },
        {
            title: 'Backend engineering',
            body: 'REST APIs, relational schemas, auth, containerisation — the load-bearing infrastructure beneath every interesting application.',
        },
    ],
    skills: [
        {
            group: 'Languages',
            items: ['Java', 'Python', 'C', 'C++', 'SQL'],
        },
        {
            group: 'Backend & Frameworks',
            items: ['Spring Boot', 'FastAPI', 'Flask', 'REST APIs', 'JWT Auth'],
        },
        {
            group: 'Databases & Tools',
            items: ['PostgreSQL', 'MySQL', 'SQLite', 'Git', 'GitHub', 'Linux', 'Docker', 'Postman', 'IntelliJ IDEA'],
        },
        {
            group: 'Machine Learning',
            items: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'Pandas', 'NumPy', 'LightGBM'],
        },
        {
            group: 'Engineering Principles',
            items: ['OOP', 'Data Structures & Algorithms', 'Design Patterns', 'Unit Testing', 'Code Review', 'Agile / SDLC'],
        },
    ],
    experience: [
        {
            company: 'Sobhana Polyclinics & Diagnostics',
            role: 'Freelance Software Developer — Backend & Data Systems',
            years: '2025 – Present',
            impact: 'Built a Python/FastAPI backend with PostgreSQL now used in daily clinical operations — diagnostic reports, workflow tracking, ingestion & anomaly flagging.',
        },
        {
            company: 'Colruyt Group India',
            role: 'Data Science Intern',
            years: 'Dec 2025 – Jan 2026',
            impact: 'Shipped production-grade Python pipelines for customer ranking; presented results to non-technical stakeholders.',
        },
        {
            company: 'University of Hamburg',
            role: 'Research Intern — Applied ML',
            years: 'Jul 2025 – Oct 2025',
            impact: 'Reusable Python pipelines for large-scale time-series sensor data; designed controlled experiments comparing classical ML and deep learning.',
        },
    ],
    achievements: [
        {
            title: 'Centific Residential Hackathon — Top 200 of 130,000',
            body: 'Selected (top 0.15%) for an invite-only 2-week in-person engineering hackathon.',
        },
        {
            title: '1st Prize, National Blockchain Hackathon',
            body: 'Led a four-person team to ship a tokenised real-estate platform in 36 hours; owned backend + smart-contract integration.',
        },
    ],
}

export const projects = [
    {
        slug: 'iot-device-identification',
        name: 'IoT Device Identification System',
        year: '2025',
        role: 'Solo build — end-to-end',
        summary:
            'Real-time classification of IoT devices across 27 classes from network traffic — built from data ingestion to a sub-100 ms FastAPI inference service.',
        outcomes: [
            '88.84% accuracy with Histogram Gradient Boosting',
            'Outperformed CNN / LSTM baselines by 22–31% on tabular features',
            'Validated on ≈20,000 samples',
            'Sub-100 ms REST inference latency',
        ],
        stack: ['Python', 'FastAPI', 'Scikit-learn', 'REST APIs', 'Docker'],
        github: 'https://github.com/sunkenship2025',
        accent: 'ochre',
    },
    {
        slug: 'inventory-task-management-api',
        name: 'Inventory & Task Management REST API',
        year: '2024',
        role: 'Solo build — backend & infra',
        summary:
            'Multi-user backend in Java + Spring Boot with a clean controller-service-repository architecture, JWT auth, role-based authorisation, and a containerised deploy.',
        outcomes: [
            'JWT auth with role-based authorisation',
            'Request validation + global exception handling',
            'JUnit unit tests across services',
            'Containerised with Docker',
        ],
        stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST', 'JWT', 'Docker', 'JUnit'],
        github: 'https://github.com/sunkenship2025',
        accent: 'indigo',
    },
    {
        slug: 'premium-wine-ranking',
        name: 'Premium Wine Buyer Ranking — Colruyt Group',
        year: '2025–26',
        role: 'Data Science Intern',
        summary:
            'End-to-end ML pipeline ranking customers by purchase propensity on real retail data with severe class imbalance (≈5% positives).',
        outcomes: [
            '≈13% lift vs. Logistic Regression (ElasticNet) baseline',
            'Behaviour-driven feature engineering',
            'Stability analysis to validate deployment readiness',
            'Presented findings to non-technical stakeholders',
        ],
        stack: ['Python', 'Pandas', 'Scikit-learn', 'LightGBM'],
        github: 'https://github.com/sunkenship2025',
        accent: 'crimson',
    },
]
