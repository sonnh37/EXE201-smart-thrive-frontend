import replay from "/public/replay.svg";
import play from "/public/play.svg";
import pause from "/public/pause.svg";
import video1 from "/public/video1.mp4";
import video2 from "/public/video2.mp4";
import video3 from "/public/video3.mp4";
import video4 from "/public/video4.mp4";
import arrowRight from "/public/arrowRight.svg";

export const HightLightVideo1 = video1;
export const HightLightVideo2 = video2;
export const HightLightVideo3 = video3;
export const HightLightVideo4 = video4;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;
export const arrowRightImg = arrowRight;
export const CategoryItem = [
    {
        name: "Development",
        path: "?category=development",
        subLv1: [
            {
                name: "Web Development",
                path: "?category=development&courseType=web-development",
                subLv2: [
                    {
                        name: "JavaScript",
                        path: "?category=development&courseType=web-development&topic=javascript",
                    },
                    {
                        name: "React JS",
                        path: "?category=development&courseType=web-development&topic=react-js",
                    },
                    {
                        name: "Angular",
                        path: "?category=development&courseType=web-development&topic=angular",
                    },
                    {
                        name: "CSS",
                        path: "?category=development&courseType=web-development&topic=css",
                    },
                    {
                        name: "Next.js",
                        path: "?category=development&courseType=web-development&topic=next-js",
                    },
                    {
                        name: "HTML",
                        path: "?category=development&courseType=web-development&topic=html",
                    },
                    {
                        name: "ASP.NET Core",
                        path: "?category=development&courseType=web-development&topic=asp-net-core",
                    },
                    {
                        name: "Node.Js",
                        path: "?category=development&courseType=web-development&topic=node-js",
                    },
                ],
            },
            {
                name: "Data Science",
                path: "?category=development&courseType=data-science",
                subLv2: [
                    {
                        name: "Machine Learning",
                        path: "?category=development&courseType=data-science&topic=machine-learning",
                    },
                    {
                        name: "Python",
                        path: "?category=development&courseType=data-science&topic=python",
                    },
                    {
                        name: "Artificial Intelligence (AI)",
                        path: "?category=development&courseType=data-science&topic=artificial-intelligence",
                    },
                    {
                        name: "Deep Learning",
                        path: "?category=development&courseType=data-science&topic=deep-learning",
                    },
                    {
                        name: "Generative AI",
                        path: "?category=development&courseType=data-science&topic=generative-ai",
                    },
                    {
                        name: "LangChain",
                        path: "?category=development&courseType=data-science&topic=langchain",
                    },
                    {
                        name: "Natural Language Processing (NLP)",
                        path: "?category=development&courseType=data-science&topic=nlp",
                    },
                    {
                        name: "R (programming language)",
                        path: "?category=development&courseType=data-science&topic=r",
                    },
                ],
            },
            {
                name: "Mobile Development",
                path: "?category=development&courseType=mobile-development",
                subLv2: [
                    {
                        name: "Google Flutter",
                        path: "?category=development&courseType=mobile-development&topic=google-flutter",
                    },
                    {
                        name: "iOS Development",
                        path: "?category=development&courseType=mobile-development&topic=ios-development",
                    },
                    {
                        name: "Android Development",
                        path: "?category=development&courseType=mobile-development&topic=android-development",
                    },
                    {
                        name: "React Native",
                        path: "?category=development&courseType=mobile-development&topic=react-native",
                    },
                    {
                        name: "Dart (programming language)",
                        path: "?category=development&courseType=mobile-development&topic=dart",
                    },
                    {
                        name: "Swift",
                        path: "?category=development&courseType=mobile-development&topic=swift",
                    },
                    {
                        name: "Kotlin",
                        path: "?category=development&courseType=mobile-development&topic=kotlin",
                    },
                    {
                        name: "Mobile App Development",
                        path: "?category=development&courseType=mobile-development&topic=mobile-app-development",
                    },
                    {
                        name: "SwiftUI",
                        path: "?category=development&courseType=mobile-development&topic=swiftui",
                    },
                ],
            },
            {
                name: "Programming Languages",
                path: "?category=development&courseType=programming-languages",
                subLv2: [
                    {
                        name: "Python",
                        path: "?category=development&courseType=programming-languages&topic=python",
                    },
                    {
                        name: "Java",
                        path: "?category=development&courseType=programming-languages&topic=java",
                    },
                    {
                        name: "C# (programming language)",
                        path: "?category=development&courseType=programming-languages&topic=csharp",
                    },
                    {
                        name: "C++ (programming language)",
                        path: "?category=development&courseType=programming-languages&topic=cplusplus",
                    },
                    {
                        name: "React JS",
                        path: "?category=development&courseType=programming-languages&topic=react-js",
                    },
                    {
                        name: "C (programming language)",
                        path: "?category=development&courseType=programming-languages&topic=c",
                    },
                    {
                        name: "Go (programming language)",
                        path: "?category=development&courseType=programming-languages&topic=go",
                    },
                    {
                        name: "Spring Framework",
                        path: "?category=development&courseType=programming-languages&topic=spring-framework",
                    },
                    {
                        name: "Rust (programming language)",
                        path: "?category=development&courseType=programming-languages&topic=rust",
                    },
                ],
            },
            {
                name: "Game Development",
                path: "?category=development&courseType=game-development",
                subLv2: [
                    {
                        name: "Unreal Engine",
                        path: "?category=development&courseType=game-development&topic=unreal-engine",
                    },
                    {
                        name: "Unity",
                        path: "?category=development&courseType=game-development&topic=unity",
                    },
                    {
                        name: "Game Development Fundamentals",
                        path: "?category=development&courseType=game-development&topic=game-dev-fundamentals",
                    },
                    {
                        name: "C# (programming language)",
                        path: "?category=development&courseType=game-development&topic=csharp",
                    },
                    {
                        name: "3D Game Development",
                        path: "?category=development&courseType=game-development&topic=3d-game-development",
                    },
                    {
                        name: "Godot",
                        path: "?category=development&courseType=game-development&topic=godot",
                    },
                    {
                        name: "C++ (programming language)",
                        path: "?category=development&courseType=game-development&topic=cplusplus",
                    },
                    {
                        name: "Unreal Engine Blueprints",
                        path: "?category=development&courseType=game-development&topic=unreal-engine-blueprints",
                    },
                    {
                        name: "2D Game Development",
                        path: "?category=development&courseType=game-development&topic=2d-game-development",
                    },
                ],
            },
            {
                name: "Database Design & Development",
                path: "?category=development&courseType=database-design-development",
                subLv2: [
                    {
                        name: "SQL",
                        path: "?category=development&courseType=database-design-development&topic=sql",
                    },
                    {
                        name: "MySQL",
                        path: "?category=development&courseType=database-design-development&topic=mysql",
                    },
                    {
                        name: "Database Management Systems (DBMS)",
                        path: "?category=development&courseType=database-design-development&topic=dbms",
                    },
                    {
                        name: "SQL Server",
                        path: "?category=development&courseType=database-design-development&topic=sql-server",
                    },
                    {
                        name: "PostgreSQL",
                        path: "?category=development&courseType=database-design-development&topic=postgresql",
                    },
                    {
                        name: "Apache Kafka",
                        path: "?category=development&courseType=database-design-development&topic=apache-kafka",
                    },
                    {
                        name: "Oracle SQL",
                        path: "?category=development&courseType=database-design-development&topic=oracle-sql",
                    },
                    {
                        name: "MongoDB",
                        path: "?category=development&courseType=database-design-development&topic=mongodb",
                    },
                    {
                        name: "Database Programming",
                        path: "?category=development&courseType=database-design-development&topic=database-programming",
                    },
                ],
            },
            {
                name: "Software Testing",
                path: "?category=development&courseType=software-testing",
                subLv2: [
                    {
                        name: "Selenium WebDriver",
                        path: "?category=development&courseType=software-testing&topic=selenium-webdriver",
                    },
                    {
                        name: "Microsoft PlayWright",
                        path: "?category=development&courseType=software-testing&topic=microsoft-playwright",
                    },
                    {
                        name: "Automation Testing",
                        path: "?category=development&courseType=software-testing&topic=automation-testing",
                    },
                    {
                        name: "Java",
                        path: "?category=development&courseType=software-testing&topic=java",
                    },
                    {
                        name: "Postman",
                        path: "?category=development&courseType=software-testing&topic=postman",
                    },
                    {
                        name: "ISTQB Certified Tester Foundation Level (CTFL)",
                        path: "?category=development&courseType=software-testing&topic=ctfl",
                    },
                    {
                        name: "Selenium Testing Framework",
                        path: "?category=development&courseType=software-testing&topic=selenium-testing-framework",
                    },
                    {
                        name: "API Testing",
                        path: "?category=development&courseType=software-testing&topic=api-testing",
                    },
                ],
            },
            {
                name: "Software Engineering",
                path: "?category=development&courseType=software-engineering",
                subLv2: [
                    {
                        name: "Data Structures",
                        path: "?category=development&courseType=software-engineering&topic=data-structures",
                    },
                    {
                        name: "Algorithms",
                        path: "?category=development&courseType=software-engineering&topic=algorithms",
                    },
                    {
                        name: "Software Architecture",
                        path: "?category=development&courseType=software-engineering&topic=software-architecture",
                    },
                    {
                        name: "Certified Kubernetes Application Developer (CKAD)",
                        path: "?category=development&courseType=software-engineering&topic=ckad",
                    },
                    {
                        name: "Coding Interview",
                        path: "?category=development&courseType=software-engineering&topic=coding-interview",
                    },
                    {
                        name: "Microservices",
                        path: "?category=development&courseType=software-engineering&topic=microservices",
                    },
                    {
                        name: "Arduino",
                        path: "?category=development&courseType=software-engineering&topic=arduino",
                    },
                    {
                        name: "Java Algorithms",
                        path: "?category=development&courseType=software-engineering&topic=java-algorithms",
                    },
                ],
            },
            {
                name: "Software Development Tools",
                path: "?category=development&courseType=software-development-tools",
                subLv2: [
                    {
                        name: "Docker",
                        path: "?category=development&courseType=software-development-tools&topic=docker",
                    },
                    {
                        name: "Git",
                        path: "?category=development&courseType=software-development-tools&topic=git",
                    },
                    {
                        name: "Kubernetes",
                        path: "?category=development&courseType=software-development-tools&topic=kubernetes",
                    },
                    {
                        name: "Prompt Engineering",
                        path: "?category=development&courseType=software-development-tools&topic=prompt-engineering",
                    },
                    {
                        name: "GitHub",
                        path: "?category=development&courseType=software-development-tools&topic=github",
                    },
                    {
                        name: "JIRA",
                        path: "?category=development&courseType=software-development-tools&topic=jira",
                    },
                    {
                        name: "Confluence",
                        path: "?category=development&courseType=software-development-tools&topic=confluence",
                    },
                    {
                        name: "CI/CD",
                        path: "?category=development&courseType=software-development-tools&topic=ci-cd",
                    },
                    {
                        name: "Terraform",
                        path: "?category=development&courseType=software-development-tools&topic=terraform",
                    },
                ],
            },
            {
                name: "No-Code Development",
                path: "?category=development&courseType=no-code-development",
                subLv2: [
                    {
                        name: "Generative AI (GenAI)",
                        path: "?category=development&courseType=no-code-development&topic=genai",
                    },
                    {
                        name: "WordPress",
                        path: "?category=development&courseType=no-code-development&topic=wordpress",
                    },
                    {
                        name: "Bubble Visual Programming",
                        path: "?category=development&courseType=no-code-development&topic=bubble",
                    },
                    {
                        name: "Microsoft Power Apps",
                        path: "?category=development&courseType=no-code-development&topic=power-apps",
                    },
                    {
                        name: "Microsoft Power Platform",
                        path: "?category=development&courseType=no-code-development&topic=power-platform",
                    },
                    {
                        name: "Microsoft Power Automate",
                        path: "?category=development&courseType=no-code-development&topic=power-automate",
                    },
                    {
                        name: "Web Design",
                        path: "?category=development&courseType=no-code-development&topic=web-design",
                    },
                    {
                        name: "Microsoft Copilot",
                        path: "?category=development&courseType=no-code-development&topic=ms-copilot",
                    },
                    {
                        name: "Custom GPTs/GPT Builder",
                        path: "?category=development&courseType=no-code-development&topic=custom-gpt",
                    },
                ],
            },
        ],
    },
    {
        name: "Business",
        path: "?category=business",
        subLv1: [
            {
                name: "Entrepreneurship",
                path: "?category=business&courseType=entrepreneurship",
                subLv2: [
                    {
                        name: "Business Fundamentals",
                        path: "?category=business&courseType=entrepreneurship&topic=business-fundamentals",
                    },
                    {
                        name: "Entrepreneurship Fundamentals",
                        path: "?category=business&courseType=entrepreneurship&topic=entrepreneurship-fundamentals",
                    },
                    {
                        name: "Startup",
                        path: "?category=business&courseType=entrepreneurship&topic=startup",
                    },
                    {
                        name: "Business Plan",
                        path: "?category=business&courseType=entrepreneurship&topic=business-plan",
                    },
                    {
                        name: "Freelancing",
                        path: "?category=business&courseType=entrepreneurship&topic=freelancing",
                    },
                ],
            },
            {
                name: "Communication",
                path: "?category=business&courseType=communication",
                subLv2: [
                    {
                        name: "Communication Skill",
                        path: "?category=business&courseType=communication&topic=communication-skill",
                    },
                    {
                        name: "Presentation Skill",
                        path: "?category=business&courseType=communication&topic=presentation-skill",
                    },
                    {
                        name: "Public Speaking",
                        path: "?category=business&courseType=communication&topic=public-speaking",
                    },
                    {
                        name: "Writing",
                        path: "?category=business&courseType=communication&topic=writing",
                    },
                    {
                        name: "Fiction Writing",
                        path: "?category=business&courseType=communication&topic=fiction-writing",
                    },
                    {
                        name: "Business Communication",
                        path: "?category=business&courseType=communication&topic=business-communication",
                    },
                    {
                        name: "Business Writing",
                        path: "?category=business&courseType=communication&topic=business-writing",
                    },
                    {
                        name: "Assertiveness",
                        path: "?category=business&courseType=communication&topic=assertiveness",
                    },
                    {
                        name: "Email Writing and Etiquette",
                        path: "?category=business&courseType=communication&topic=email-writing-etiquette",
                    },
                ],
            },
            {
                name: "Management",
                path: "?category=business&courseType=management",
                subLv2: [
                    {
                        name: "Product Management",
                        path: "?category=business&courseType=management&topic=product-management",
                    },
                    {
                        name: "Leadership",
                        path: "?category=business&courseType=management&topic=leadership",
                    },
                    {
                        name: "Management Skills",
                        path: "?category=business&courseType=management&topic=management-skills",
                    },
                    {
                        name: "ISO 9001",
                        path: "?category=business&courseType=management&topic=iso-9001",
                    },
                    {
                        name: "Business Strategy",
                        path: "?category=business&courseType=management&topic=business-strategy",
                    },
                    {
                        name: "Project Management",
                        path: "?category=business&courseType=management&topic=project-management",
                    },
                    {
                        name: "Quality Management",
                        path: "?category=business&courseType=management&topic=quality-management",
                    },
                    {
                        name: "Risk Management",
                        path: "?category=business&courseType=management&topic=risk-management",
                    },
                    {
                        name: "Manager Training",
                        path: "?category=business&courseType=management&topic=manager-training",
                    },
                ],
            },
            {
                name: "Sales",
                path: "?category=business&courseType=sales",
                subLv2: [
                    {
                        name: "Sales Skill",
                        path: "?category=business&courseType=sales&topic=sales-skill",
                    },
                    {
                        name: "B2B Sales",
                        path: "?category=business&courseType=sales&topic=b2b-sales",
                    },
                    {
                        name: "Customer Service",
                        path: "?category=business&courseType=sales&topic=customer-service",
                    },
                    {
                        name: "LinkedIn",
                        path: "?category=business&courseType=sales&topic=linkedin",
                    },
                    {
                        name: "Sales Management",
                        path: "?category=business&courseType=sales&topic=sales-management",
                    },
                    {
                        name: "Business Development",
                        path: "?category=business&courseType=sales&topic=business-development",
                    },
                    {
                        name: "Cold Calling",
                        path: "?category=business&courseType=sales&topic=cold-calling",
                    },
                    {
                        name: "Lead Generation",
                        path: "?category=business&courseType=sales&topic=lead-generation",
                    },
                    {
                        name: "Cold Email",
                        path: "?category=business&courseType=sales&topic=cold-email",
                    },
                ],
            },
            {
                name: "Business Strategy",
                path: "?category=business&courseType=business-strategy",
                subLv2: [
                    {
                        name: "IIBA Entry Certificate in Business Analysis (ECBA)",
                        path: "?category=business&courseType=business-strategy&topic=ecba",
                    },
                    {
                        name: "Environmental, Social and Governance (ESG)",
                        path: "?category=business&courseType=business-strategy&topic=esg",
                    },
                    {
                        name: "Management Consulting",
                        path: "?category=business&courseType=business-strategy&topic=management-consulting",
                    },
                    {
                        name: "Prompt Engineering",
                        path: "?category=business&courseType=business-strategy&topic=prompt-engineering",
                    },
                    {
                        name: "Artificial Intelligence (AI)",
                        path: "?category=business&courseType=business-strategy&topic=ai",
                    },
                    {
                        name: "The Open Group Certified: TOGAF Enterprise Architecture Foundation",
                        path: "?category=business&courseType=business-strategy&topic=togaf-foundation",
                    },
                    {
                        name: "Generative AI (GenAI)",
                        path: "?category=business&courseType=business-strategy&topic=genai",
                    },
                    {
                        name: "TOGAF",
                        path: "?category=business&courseType=business-strategy&topic=togaf",
                    },
                ],
            },
            {
                name: "Project Management",
                path: "?category=business&courseType=project-management",
                subLv2: [
                    {
                        name: "PMI Project Management Professional (PMP)",
                        path: "?category=business&courseType=project-management&topic=pmp",
                    },
                    {
                        name: "PMI PMBOK",
                        path: "?category=business&courseType=project-management&topic=pmbok",
                    },
                    {
                        name: "PMI Certified Associate in Project Management (CAPM)",
                        path: "?category=business&courseType=project-management&topic=capm",
                    },
                    {
                        name: "Agile",
                        path: "?category=business&courseType=project-management&topic=agile",
                    },
                    {
                        name: "Scrum",
                        path: "?category=business&courseType=project-management&topic=scrum",
                    },
                    {
                        name: "Professional Scrum Master (PSM)",
                        path: "?category=business&courseType=project-management&topic=psm",
                    },
                    {
                        name: "PMI Agile Certified Practitioner (PMI-ACP)",
                        path: "?category=business&courseType=project-management&topic=pmi-acp",
                    },
                    {
                        name: "Project Risk Management",
                        path: "?category=business&courseType=project-management&topic=project-risk-management",
                    },
                ],
            },
            {
                name: "Human Resources",
                path: "?category=business&courseType=human-resources",
                subLv2: [
                    {
                        name: "Recruiting and Hiring",
                        path: "?category=business&courseType=human-resources&topic=recruiting-hiring",
                    },
                    {
                        name: "HR Analytics",
                        path: "?category=business&courseType=human-resources&topic=hr-analytics",
                    },
                    {
                        name: "Employment Law",
                        path: "?category=business&courseType=human-resources&topic=employment-law",
                    },
                    {
                        name: "Corporate Learning and Development (L&D)",
                        path: "?category=business&courseType=human-resources&topic=learning-development",
                    },
                    {
                        name: "Scrum",
                        path: "?category=business&courseType=human-resources&topic=scrum",
                    },
                    {
                        name: "Society for Human Resource Management Certified Professional (SHRM-CP)",
                        path: "?category=business&courseType=human-resources&topic=shrm-cp",
                    },
                    {
                        name: "Conflict Management",
                        path: "?category=business&courseType=human-resources&topic=conflict-management",
                    },
                    {
                        name: "Emotional Intelligence",
                        path: "?category=business&courseType=human-resources&topic=emotional-intelligence",
                    },
                    {
                        name: "Interviewing Skills",
                        path: "?category=business&courseType=human-resources&topic=interviewing-skills",
                    },
                ],
            },
        ],
    },
    {
        name: "Finance & Accounting",
        path: "?category=finance-accounting",
        subLv1: [
            {
                name: "Accounting & Bookkeeping",
                path: "?category=finance-accounting&courseType=accounting-bookkeeping",
                subLv2: [
                    {
                        name: "Accounting",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=accounting",
                    },
                    {
                        name: "Bookkeeping",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=bookkeeping",
                    },
                    {
                        name: "QuickBooks",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=quickbooks",
                    },
                    {
                        name: "Financial Accounting",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=financial-accounting",
                    },
                    {
                        name: "Finance Fundamentals",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=finance-fundamentals",
                    },
                    {
                        name: "TallyPrime (Tally.ERP)",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=tallyprime",
                    },
                    {
                        name: "Uniform CPA Examination",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=uniform-cpa-examination",
                    },
                    {
                        name: "International Financial Reporting Standards (IFRS)",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=ifrs",
                    },
                    {
                        name: "Xero",
                        path: "?category=finance-accounting&courseType=accounting-bookkeeping&topic=xero",
                    },
                ],
            },
            {
                name: "Compliance",
                path: "?category=finance-accounting&courseType=compliance",
                subLv2: [
                    {
                        name: "Anti-Money Laundering (AML)",
                        path: "?category=finance-accounting&courseType=compliance&topic=aml",
                    },
                    {
                        name: "Criminology",
                        path: "?category=finance-accounting&courseType=compliance&topic=criminology",
                    },
                    {
                        name: "Internal Controls",
                        path: "?category=finance-accounting&courseType=compliance&topic=internal-controls",
                    },
                    {
                        name: "Fraud Analytics",
                        path: "?category=finance-accounting&courseType=compliance&topic=fraud-analytics",
                    },
                    {
                        name: "Compliance Management",
                        path: "?category=finance-accounting&courseType=compliance&topic=compliance-management",
                    },
                    {
                        name: "Trade and Commerce",
                        path: "?category=finance-accounting&courseType=compliance&topic=trade-commerce",
                    },
                    {
                        name: "Risk Management",
                        path: "?category=finance-accounting&courseType=compliance&topic=risk-management",
                    },
                    {
                        name: "Internal Auditing",
                        path: "?category=finance-accounting&courseType=compliance&topic=internal-auditing",
                    },
                    {
                        name: "Compliance (IT)",
                        path: "?category=finance-accounting&courseType=compliance&topic=compliance-it",
                    },
                ],
            },
            {
                name: "Cryptocurrency & Blockchain",
                path: "?category=finance-accounting&courseType=cryptocurrency-blockchain",
                subLv2: [
                    {
                        name: "Cryptocurrency",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=cryptocurrency",
                    },
                    {
                        name: "Blockchain",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=blockchain",
                    },
                    {
                        name: "Bitcoin",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=bitcoin",
                    },
                    {
                        name: "Binance",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=binance",
                    },
                    {
                        name: "Algorithmic Trading",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=algorithmic-trading",
                    },
                    {
                        name: "Day Trading",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=day-trading",
                    },
                    {
                        name: "Online Arbitrage",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=online-arbitrage",
                    },
                    {
                        name: "NFT (Non-Fungible Tokens)",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=nft",
                    },
                    {
                        name: "Bitcoin Trading",
                        path: "?category=finance-accounting&courseType=cryptocurrency-blockchain&topic=bitcoin-trading",
                    },
                ],
            },
            {
                name: "Economics",
                path: "?category=finance-accounting&courseType=economics",
                subLv2: [
                    {
                        name: "Macroeconomics",
                        path: "?category=finance-accounting&courseType=economics&topic=macroeconomics",
                    },
                    {
                        name: "Global Economics",
                        path: "?category=finance-accounting&courseType=economics&topic=global-economics",
                    },
                    {
                        name: "Stata",
                        path: "?category=finance-accounting&courseType=economics&topic=stata",
                    },
                    {
                        name: "Economics",
                        path: "?category=finance-accounting&courseType=economics&topic=economics",
                    },
                    {
                        name: "Econometrics",
                        path: "?category=finance-accounting&courseType=economics&topic=econometrics",
                    },
                    {
                        name: "Finance Fundamentals",
                        path: "?category=finance-accounting&courseType=economics&topic=finance-fundamentals",
                    },
                    {
                        name: "Statistics",
                        path: "?category=finance-accounting&courseType=economics&topic=statistics",
                    },
                    {
                        name: "Behavioral Economics",
                        path: "?category=finance-accounting&courseType=economics&topic=behavioral-economics",
                    },
                ],
            },
            {
                name: "Finance",
                path: "?category=finance-accounting&courseType=finance",
                subLv2: [
                    {
                        name: "Personal Finance",
                        path: "?category=finance-accounting&courseType=finance&topic=personal-finance",
                    },
                    {
                        name: "Investment Banking",
                        path: "?category=finance-accounting&courseType=finance&topic=investment-banking",
                    },
                    {
                        name: "Finance Fundamentals",
                        path: "?category=finance-accounting&courseType=finance&topic=finance-fundamentals",
                    },
                    {
                        name: "Banking",
                        path: "?category=finance-accounting&courseType=finance&topic=banking",
                    },
                    {
                        name: "Corporate Finance",
                        path: "?category=finance-accounting&courseType=finance&topic=corporate-finance",
                    },
                    {
                        name: "Chartered Financial Analyst (CFA)",
                        path: "?category=finance-accounting&courseType=finance&topic=cfa",
                    },
                    {
                        name: "Financial Analysis",
                        path: "?category=finance-accounting&courseType=finance&topic=financial-analysis",
                    },
                    {
                        name: "Financial Management",
                        path: "?category=finance-accounting&courseType=finance&topic=financial-management",
                    },
                ],
            },
            {
                name: "Finance Cert & Exam Prep",
                path: "?category=finance-accounting&courseType=finance-cert-exam-prep",
                subLv2: [
                    {
                        name: "Chartered Financial Analyst (CFA)",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=cfa",
                    },
                    {
                        name: "Certified Internal Auditor (CIA)",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=cia",
                    },
                    {
                        name: "Certified Financial Planner (CFP)",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=cfp",
                    },
                    {
                        name: "ANBIMA Certification",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=anbima-certification",
                    },
                    {
                        name: "Association of Chartered Certified Accountants (ACCA)",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=acca",
                    },
                    {
                        name: "GARP Financial Risk Management (FRM) Certification",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=frm",
                    },
                    {
                        name: "Financial Planning",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=financial-planning",
                    },
                    {
                        name: "Investing",
                        path: "?category=finance-accounting&courseType=finance-cert-exam-prep&topic=investing",
                    },
                ],
            },
            {
                name: "Financial Modeling & Analysis",
                path: "?category=finance-accounting&courseType=financial-modeling-analysis",
                subLv2: [
                    {
                        name: "Financial Analysis",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=financial-analysis",
                    },
                    {
                        name: "Financial Modeling",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=financial-modeling",
                    },
                    {
                        name: "Microsoft Excel",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=microsoft-excel",
                    },
                    {
                        name: "Investment Banking",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=investment-banking",
                    },
                    {
                        name: "Accounting",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=accounting",
                    },
                    {
                        name: "Finance Fundamentals",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=finance-fundamentals",
                    },
                    {
                        name: "Company Valuation",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=company-valuation",
                    },
                    {
                        name: "Financial Management",
                        path: "?category=finance-accounting&courseType=financial-modeling-analysis&topic=financial-management",
                    },
                ],
            },
        ],
    },
    {
        name: "IT & Software",
        path: "?category=it-software",
        subLv1: [
            {
                name: "IT Certifications",
                path: "?category=it-software&courseType=it-certifications",
                subLv2: [
                    {
                        name: "AWS Certified Cloud Practitioner",
                        path: "?category=it-software&courseType=it-certifications&topic=aws-cloud-practitioner",
                    },
                    {
                        name: "AWS Certified Solutions Architect-Associate",
                        path: "?category=it-software&courseType=it-certifications&topic=aws-solutions-architect-associate",
                    },
                    {
                        name: "CompTIA Security+",
                        path: "?category=it-software&courseType=it-certifications&topic=comptia-security-plus",
                    },
                    {
                        name: "CompTIA A++",
                        path: "?category=it-software&courseType=it-certifications&topic=comptia-a-plus",
                    },
                    {
                        name: "Amazon AWS",
                        path: "?category=it-software&courseType=it-certifications&topic=amazon-aws",
                    },
                    {
                        name: "Cisco Certified Network Associate (CCNA)",
                        path: "?category=it-software&courseType=it-certifications&topic=ccna",
                    },
                    {
                        name: "Information Security",
                        path: "?category=it-software&courseType=it-certifications&topic=information-security",
                    },
                    {
                        name: "CompTIA Network+",
                        path: "?category=it-software&courseType=it-certifications&topic=comptia-network-plus",
                    },
                    {
                        name: "AWS Certified Developer - Associate",
                        path: "?category=it-software&courseType=it-certifications&topic=aws-developer-associate",
                    },
                ],
            },
            {
                name: "Network & Security",
                path: "?category=it-software&courseType=network-security",
                subLv2: [
                    {
                        name: "Ethical Hacking",
                        path: "?category=it-software&courseType=network-security&topic=ethical-hacking",
                    },
                    {
                        name: "Cybersecurity",
                        path: "?category=it-software&courseType=network-security&topic=cybersecurity",
                    },
                    {
                        name: "Network Security",
                        path: "?category=it-software&courseType=network-security&topic=network-security",
                    },
                    {
                        name: "Kubernetes",
                        path: "?category=it-software&courseType=network-security&topic=kubernetes",
                    },
                    {
                        name: "Penetration Testing",
                        path: "?category=it-software&courseType=network-security&topic=penetration-testing",
                    },
                    {
                        name: "IT Networking Fundamentals",
                        path: "?category=it-software&courseType=network-security&topic=networking-fundamentals",
                    },
                    {
                        name: "CompTIA Network+",
                        path: "?category=it-software&courseType=network-security&topic=comptia-network-plus",
                    },
                    {
                        name: "CompTIA Security+",
                        path: "?category=it-software&courseType=network-security&topic=comptia-security-plus",
                    },
                    {
                        name: "Information Security",
                        path: "?category=it-software&courseType=network-security&topic=information-security",
                    },
                ],
            },
            {
                name: "Hardware",
                path: "?category=it-software&courseType=hardware",
                subLv2: [
                    {
                        name: "PLC",
                        path: "?category=it-software&courseType=hardware&topic=plc",
                    },
                    {
                        name: "Arduino",
                        path: "?category=it-software&courseType=hardware&topic=arduino",
                    },
                    {
                        name: "Electronics",
                        path: "?category=it-software&courseType=hardware&topic=electronics",
                    },
                    {
                        name: "Embedded Systems",
                        path: "?category=it-software&courseType=hardware&topic=embedded-systems",
                    },
                    {
                        name: "Microcontroller",
                        path: "?category=it-software&courseType=hardware&topic=microcontroller",
                    },
                    {
                        name: "Embedded C",
                        path: "?category=it-software&courseType=hardware&topic=embedded-c",
                    },
                    {
                        name: "Raspberry Pi",
                        path: "?category=it-software&courseType=hardware&topic=raspberry-pi",
                    },
                    {
                        name: "System Verilog",
                        path: "?category=it-software&courseType=hardware&topic=system-verilog",
                    },
                    {
                        name: "HIMI",
                        path: "?category=it-software&courseType=hardware&topic=himi",
                    },
                ],
            },
            {
                name: "Operating Systems & Servers",
                path: "?category=it-software&courseType=operating-systems-servers",
                subLv2: [
                    {
                        name: "Linux",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=linux",
                    },
                    {
                        name: "Linux Administration",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=linux-administration",
                    },
                    {
                        name: "Windows Server",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=windows-server",
                    },
                    {
                        name: "Active Directory",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=active-directory",
                    },
                    {
                        name: "Shell Scripting",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=shell-scripting",
                    },
                    {
                        name: "Linux Command Line",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=linux-command-line",
                    },
                    {
                        name: "PowerShell",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=powershell",
                    },
                    {
                        name: "Proxmox VE",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=proxmox-ve",
                    },
                    {
                        name: "Operating System",
                        path: "?category=it-software&courseType=operating-systems-servers&topic=operating-system",
                    },
                ],
            },
            {
                name: "Other IT & Software",
                path: "?category=it-software&courseType=other-it-software",
                subLv2: [
                    {
                        name: "DevOps",
                        path: "?category=it-software&courseType=other-it-software&topic=devops",
                    },
                    {
                        name: "ChatGPT",
                        path: "?category=it-software&courseType=other-it-software&topic=chatgpt",
                    },
                    {
                        name: "Python",
                        path: "?category=it-software&courseType=other-it-software&topic=python",
                    },
                    {
                        name: "Data Science",
                        path: "?category=it-software&courseType=other-it-software&topic=data-science",
                    },
                    {
                        name: "Generative AI (GenAI)",
                        path: "?category=it-software&courseType=other-it-software&topic=generative-ai",
                    },
                    {
                        name: "Microsoft Excel",
                        path: "?category=it-software&courseType=other-it-software&topic=microsoft-excel",
                    },
                    {
                        name: "Microsoft Azure",
                        path: "?category=it-software&courseType=other-it-software&topic=microsoft-azure",
                    },
                    {
                        name: "Terraform",
                        path: "?category=it-software&courseType=other-it-software&topic=terraform",
                    },
                    {
                        name: "Kubernetes",
                        path: "?category=it-software&courseType=other-it-software&topic=kubernetes",
                    },
                ],
            },
        ],
    },
    {
        name: "Marketing",
        path: "?category=marketing",
        subLv1: [
            {
                name: "Digital Marketing",
                path: "?category=marketing&courseType=digital-marketing",
                subLv2: [
                    {
                        name: "Marketing Strategy",
                        path: "?category=marketing&courseType=digital-marketing&topic=marketing-strategy",
                    },
                    {
                        name: "Internet Marketing",
                        path: "?category=marketing&courseType=digital-marketing&topic=internet-marketing",
                    },
                    {
                        name: "Google Analytics",
                        path: "?category=marketing&courseType=digital-marketing&topic=google-analytics",
                    },
                ],
            },
            {
                name: "Branding",
                path: "?category=marketing&courseType=branding",
                subLv2: [
                    {
                        name: "YouTube Audience Growth",
                        path: "?category=marketing&courseType=branding&topic=youtube-audience-growth",
                    },
                    {
                        name: "Business Branding",
                        path: "?category=marketing&courseType=branding&topic=business-branding",
                    },
                    {
                        name: "YouTube Marketing",
                        path: "?category=marketing&courseType=branding&topic=youtube-marketing",
                    },
                    {
                        name: "Brand Management",
                        path: "?category=marketing&courseType=branding&topic=brand-management",
                    },
                    {
                        name: "Personal Branding",
                        path: "?category=marketing&courseType=branding&topic=personal-branding",
                    },
                    {
                        name: "Marketing Strategy",
                        path: "?category=marketing&courseType=branding&topic=marketing-strategy",
                    },
                    {
                        name: "Product Management",
                        path: "?category=marketing&courseType=branding&topic=product-management",
                    },
                    {
                        name: "Career Development",
                        path: "?category=marketing&courseType=branding&topic=career-development",
                    },
                ],
            },
            {
                name: "Marketing Fundamentals",
                path: "?category=marketing&courseType=marketing-fundamentals",
                subLv2: [
                    {
                        name: "Marketing Strategy",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=marketing-strategy",
                    },
                    {
                        name: "Copywriting",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=copywriting",
                    },
                    {
                        name: "Marketing Psychology",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=marketing-psychology",
                    },
                    {
                        name: "Digital Marketing",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=digital-marketing",
                    },
                    {
                        name: "Digital Nomad",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=digital-nomad",
                    },
                    {
                        name: "Marketing Management",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=marketing-management",
                    },
                    {
                        name: "Event Planning",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=event-planning",
                    },
                    {
                        name: "Coaching and Consulting Business",
                        path: "?category=marketing&courseType=marketing-fundamentals&topic=coaching-consulting-business",
                    },
                ],
            },
        ],
    },
    {
        name: "Teaching & Academics",
        path: "/?category=teaching-academics",
        subLv1: [
            {
                name: "Engineering",
                path: "/?category=teaching-academics&courseType=engineering",
                subLv2: [
                    {
                        name: "Electrical Engineering",
                        path: "/?category=teaching-academics&courseType=engineering&topic=electrical-engineering",
                    },
                    {
                        name: "Electricity",
                        path: "/?category=teaching-academics&courseType=engineering&topic=electricity",
                    },
                    {
                        name: "Mechanical Engineering",
                        path: "/?category=teaching-academics&courseType=engineering&topic=mechanical-engineering",
                    },
                    {
                        name: "Spring Framework",
                        path: "/?category=teaching-academics&courseType=engineering&topic=spring-framework",
                    },
                    {
                        name: "Solar Energy",
                        path: "/?category=teaching-academics&courseType=engineering&topic=solar-energy",
                    },
                    {
                        name: "Civil Engineering",
                        path: "/?category=teaching-academics&courseType=engineering&topic=civil-engineering",
                    },
                    {
                        name: "Electronics",
                        path: "/?category=teaching-academics&courseType=engineering&topic=electronics",
                    },
                    {
                        name: "Automotive Engineering",
                        path: "/?category=teaching-academics&courseType=engineering&topic=automotive-engineering",
                    },
                    {
                        name: "Power Engineering",
                        path: "/?category=teaching-academics&courseType=engineering&topic=power-engineering",
                    },
                ],
            },
            {
                name: "Humanities",
                path: "/?category=teaching-academics&courseType=humanities",
                subLv2: [
                    {
                        name: "Philosophy",
                        path: "/?category=teaching-academics&courseType=humanities&topic=philosophy",
                    },
                    {
                        name: "Art History",
                        path: "/?category=teaching-academics&courseType=humanities&topic=art-history",
                    },
                    {
                        name: "Statistics",
                        path: "/?category=teaching-academics&courseType=humanities&topic=statistics",
                    },
                    {
                        name: "Critical Thinking",
                        path: "/?category=teaching-academics&courseType=humanities&topic=critical-thinking",
                    },
                    {
                        name: "Christianity",
                        path: "/?category=teaching-academics&courseType=humanities&topic=christianity",
                    },
                    {
                        name: "Creative Writing",
                        path: "/?category=teaching-academics&courseType=humanities&topic=creative-writing",
                    },
                    {
                        name: "English Literature",
                        path: "/?category=teaching-academics&courseType=humanities&topic=english-literature",
                    },
                ],
            },
            {
                name: "Math",
                path: "/?category=teaching-academics&courseType=math",
                subLv2: [
                    {
                        name: "Calculus",
                        path: "/?category=teaching-academics&courseType=math&topic=calculus",
                    },
                    {
                        name: "Algebra",
                        path: "/?category=teaching-academics&courseType=math&topic=algebra",
                    },
                    {
                        name: "Statistics",
                        path: "/?category=teaching-academics&courseType=math&topic=statistics",
                    },
                    {
                        name: "Linear Algebra",
                        path: "/?category=teaching-academics&courseType=math&topic=linear-algebra",
                    },
                    {
                        name: "Probability",
                        path: "/?category=teaching-academics&courseType=math&topic=probability",
                    },
                    {
                        name: "Trigonometry",
                        path: "/?category=teaching-academics&courseType=math&topic=trigonometry",
                    },
                    {
                        name: "Discrete Math",
                        path: "/?category=teaching-academics&courseType=math&topic=discrete-math",
                    },
                    {
                        name: "Pre-Calculus",
                        path: "/?category=teaching-academics&courseType=math&topic=pre-calculus",
                    },
                ],
            },
            {
                name: "Science",
                path: "/?category=teaching-academics&courseType=science",
                subLv2: [
                    {
                        name: "Physics",
                        path: "/?category=teaching-academics&courseType=science&topic=physics",
                    },
                    {
                        name: "Anatomy",
                        path: "/?category=teaching-academics&courseType=science&topic=anatomy",
                    },
                    {
                        name: "Chemistry",
                        path: "/?category=teaching-academics&courseType=science&topic=chemistry",
                    },
                    {
                        name: "Biology",
                        path: "/?category=teaching-academics&courseType=science&topic=biology",
                    },
                    {
                        name: "Medical Coding",
                        path: "/?category=teaching-academics&courseType=science&topic=medical-coding",
                    },
                    {
                        name: "General Chemistry",
                        path: "/?category=teaching-academics&courseType=science&topic=general-chemistry",
                    },
                    {
                        name: "Quantum Mechanics",
                        path: "/?category=teaching-academics&courseType=science&topic=quantum-mechanics",
                    },
                    {
                        name: "Certified Professional Coder (CPC)",
                        path: "/?category=teaching-academics&courseType=science&topic=cpc",
                    },
                    {
                        name: "Physiology",
                        path: "/?category=teaching-academics&courseType=science&topic=physiology",
                    },
                ],
            },
            {
                name: "Social Science",
                path: "/?category=teaching-academics&courseType=social-science",
                subLv2: [
                    {
                        name: "Psychology",
                        path: "/?category=teaching-academics&courseType=social-science&topic=psychology",
                    },
                    {
                        name: "Macroeconomics",
                        path: "/?category=teaching-academics&courseType=social-science&topic=macroeconomics",
                    },
                    {
                        name: "Counseling",
                        path: "/?category=teaching-academics&courseType=social-science&topic=counseling",
                    },
                    {
                        name: "Economics",
                        path: "/?category=teaching-academics&courseType=social-science&topic=economics",
                    },
                    {
                        name: "Criminology",
                        path: "/?category=teaching-academics&courseType=social-science&topic=criminology",
                    },
                    {
                        name: "Cognitive Behavioral Therapy (CBT)",
                        path: "/?category=teaching-academics&courseType=social-science&topic=cbt",
                    },
                    {
                        name: "Intelligence Analysis (security)",
                        path: "/?category=teaching-academics&courseType=social-science&topic=intelligence-analysis",
                    },
                    {
                        name: "Criminal Psychology",
                        path: "/?category=teaching-academics&courseType=social-science&topic=criminal-psychology",
                    },
                    {
                        name: "Psychotherapy",
                        path: "/?category=teaching-academics&courseType=social-science&topic=psychotherapy",
                    },
                ],
            },
            {
                name: "Language Learning",
                path: "/?category=teaching-academics&courseType=language-learning",
                subLv2: [
                    {
                        name: "English Language",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=english-language",
                    },
                    {
                        name: "German Language",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=german-language",
                    },
                    {
                        name: "Spanish Language",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=spanish-language",
                    },
                    {
                        name: "English Grammar",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=english-grammar",
                    },
                    {
                        name: "French Language",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=french-language",
                    },
                    {
                        name: "Japanese Language",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=japanese-language",
                    },
                    {
                        name: "English Conversation",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=english-conversation",
                    },
                    {
                        name: "English Vocabulary",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=english-vocabulary",
                    },
                    {
                        name: "Italian Language",
                        path: "/?category=teaching-academics&courseType=language-learning&topic=italian-language",
                    },
                ],
            },
            // Additional categories can be added similarly
        ],
    },
];
