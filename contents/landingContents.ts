import { SupportedLanguages } from "./supportedLanguagesData"


export type LandingContents = Record<SupportedLanguages, {
    hero: {
        headline: [string, string, string],
        headlineTypingSpeed: number,
        description: string,
        backgroundVideo: {
            videoSrc: string
        },
        contact: {
            github: string,
            mail: string
        }
    },
    "what-i-do": {
        heading: string,
        description: string,
        "3d-hover-card": {
            caption: string,
            imgSrc: string
        },
        "image-parallax": {
            caption: string,
            imgSrc: string
        },
        "parallax-scrolling": {
            caption: string,
            description: string,
            imgSrcs: [string, string, string],
            imgsCaptions: [string, string, string]
        }
    },
    "full-screen-transition": {
        heading: [string, string],
        imgSrcs: [string, string]
    },
    "projects": {
        heading: string,
        description: string,
        projects: {
            caption: string
            description: string,
            videoSrc: string,
            languages: string[],
            projectLink: string
        }[],
    },
    "services": {
        heading: string,
        description: string,
        services: [
            {
                caption: string,
                description: string
            },
            {
                caption: string,
                description: string
            },
            {
                caption: string,
                description: string
            },
            {
                caption: string,
                description: string
            },
        ]
    },
    "get-in-touch": {
        heading: string,
        contacts: [
            {
                type: string,
                contact: string
            }
        ],
        "hand-image-src": string
    },
    "lets-talk-button": {
        name: string,
        link: string
    }
}>

export const landingContents: LandingContents = {
    "en": {
        hero: {
            headline: ["make it", "intelligent", "autonomous"],
            headlineTypingSpeed: 140,
            description: "I’m Yuma, an AI developer building custom models and autonomous AI agents that solve real business problems.",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
            },
            contact: {
                github: "https://github.com/conka8",
                mail: "mailto:yumaueda509@gmail.com"
            }
        },
        "what-i-do": {
            heading: "What I do",
            description: "I design, train and deploy AI—from fine-tuned models to agents that plan, use tools and get real work done.",
            "3d-hover-card": {
                caption: "AI agent development",
                imgSrc: "/assets/photos/agent-code-card.jpg"
            },
            "image-parallax": {
                caption: "Model training & fine-tuning",
                imgSrc: "/assets/photos/gpu-purple.jpg"
            },
            "parallax-scrolling": {
                caption: "From raw data to deployed intelligence.",
                description: "Every project follows a clear pipeline: understand the data, train and evaluate the model, then ship it behind a reliable API or agent workflow that keeps improving in production.",
                imgSrcs: ["/assets/photos/network-cables.jpg", "/assets/photos/gpu-rig.jpg", "/assets/photos/server-rack.jpg"],
                imgsCaptions: ["data", "train", "deploy"]
            }
        },
        "full-screen-transition": {
            heading: ["From models", "to agents"],
            imgSrcs: ["/assets/photos/code-ide.jpg", "/assets/photos/data-center.jpg"]
        },
        "projects": {
            heading: "Projects",
            description: "Selected AI projects—from coding agents and voice agents to computer vision and distributed model training.",
            projects: [
                {
                    caption: "Software Engineering AI Agent",
                    description: "An autonomous coding agent that reads a repo, patches bugs and runs tests to verify its fixes.",
                    videoSrc: "/assets/photos/projects/agent-code.jpg",
                    languages: ["Python", "LLM Agents", "Tool Use", "Bittensor SN62"],
                    projectLink: "https://github.com/conka8/sn62-agent"
                },
                {
                    caption: "Cricket Ball Tracking",
                    description: "A computer vision pipeline that detects and tracks the ball frame by frame in cricket footage.",
                    videoSrc: "/assets/photos/projects/cricket-ball.jpg",
                    languages: ["Python", "Computer Vision", "Object Detection", "Model Training"],
                    projectLink: "https://github.com/conka8/cricket_ball_tracking"
                },
                {
                    caption: "Voice ReAct Agent",
                    description: "A real-time voice assistant that reasons step by step and calls tools mid-conversation.",
                    videoSrc: "/assets/photos/projects/studio-mic.jpg",
                    languages: ["Python", "TypeScript", "OpenAI Realtime API", "LangChain"],
                    projectLink: "https://github.com/conka8/Voice-ReAct-Agent"
                },
                {
                    caption: "Distributed MoE Training Dashboard",
                    description: "A live leaderboard for a decentralized Mixture-of-Experts training network.",
                    videoSrc: "/assets/photos/projects/moe-code.jpg",
                    languages: ["React", "TypeScript", "Mixture of Experts", "Bittensor SN102"],
                    projectLink: "https://github.com/conka8/connito"
                }
            ],
        },
        "services": {
            heading: "Services",
            description: "I offer end-to-end AI services—from custom model development to autonomous agents that automate your workflows.",
            services: [
                {
                    caption: "AI Agent Development",
                    description: "I build autonomous agents with tool use, memory and multi-step planning that automate real business workflows—reliably and safely."
                },
                {
                    caption: "Model Development & Fine-tuning",
                    description: "I train and fine-tune models with PyTorch and Hugging Face, from LLM fine-tuning to custom classifiers, with rigorous evaluation before anything ships."
                },
                {
                    caption: "RAG & LLM Applications",
                    description: "I connect LLMs to your own data with retrieval-augmented generation and vector databases, so answers stay accurate and grounded."
                },
                {
                    caption: "MLOps & Deployment",
                    description: "I deploy models and agents as scalable APIs on cloud and GPU infrastructure, with monitoring, evaluation and cost optimization built in."
                },
            ]
        },
        "get-in-touch": {
            heading: "Get in touch",
            contacts: [
                {
                    type: "email",
                    contact: "yumaueda509@gmail.com"
                }],
            "hand-image-src": "/assets/hand.PNG"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "https://t.me/conka391"
        }
    },

    "zh": {
        hero: {
            headline: ["就在這", "讓AI思考", "讓AI行動"],
            headlineTypingSpeed: 200,
            description: "我是Yuma, 一名AI開發者, 專門開發自訂模型和自主AI代理, 解決真實的業務問題。",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
            },
            contact: {
                github: "https://github.com/conka8",
                mail: "mailto:yumaueda509@gmail.com"
            }
        },
        "what-i-do": {
            heading: "我做什麼的",
            description: "我設計、訓練並部署AI, 從微調模型到能夠規劃、使用工具並完成實際任務的智能代理.",
            "3d-hover-card": {
                caption: "AI代理開發",
                imgSrc: "/assets/photos/agent-code-card.jpg"
            },
            "image-parallax": {
                caption: "模型訓練與微調",
                imgSrc: "/assets/photos/gpu-purple.jpg"
            },
            "parallax-scrolling": {
                caption: "從原始數據到已部署的智能.",
                description: "每個項目都遵循清晰的流程: 理解數據, 訓練並評估模型, 然後透過可靠的API或代理工作流程上線, 並在生產環境中持續改進.",
                imgSrcs: ["/assets/photos/network-cables.jpg", "/assets/photos/gpu-rig.jpg", "/assets/photos/server-rack.jpg"],
                imgsCaptions: ["數據", "訓練", "部署"]
            }
        },
        "full-screen-transition": {
            heading: ["從模型", "到代理"],
            imgSrcs: ["/assets/photos/code-ide.jpg", "/assets/photos/data-center.jpg"]
        },
        "projects": {
            heading: "作品",
            description: "精選AI項目, 涵蓋編程代理、語音代理、電腦視覺以及分散式模型訓練",
            projects: [
                {
                    caption: "Software Engineering AI Agent",
                    description: "能閱讀代碼庫、修復錯誤並執行測試驗證修改的自主編程代理.",
                    videoSrc: "/assets/photos/projects/agent-code.jpg",
                    languages: ["Python", "LLM Agents", "Tool Use", "Bittensor SN62"],
                    projectLink: "https://github.com/conka8/sn62-agent"
                },
                {
                    caption: "Cricket Ball Tracking",
                    description: "在板球影片中逐幀偵測及追蹤球體的電腦視覺流程.",
                    videoSrc: "/assets/photos/projects/cricket-ball.jpg",
                    languages: ["Python", "Computer Vision", "Object Detection", "Model Training"],
                    projectLink: "https://github.com/conka8/cricket_ball_tracking"
                },
                {
                    caption: "Voice ReAct Agent",
                    description: "能逐步推理, 並在對話中即時調用工具的實時語音助手.",
                    videoSrc: "/assets/photos/projects/studio-mic.jpg",
                    languages: ["Python", "TypeScript", "OpenAI Realtime API", "LangChain"],
                    projectLink: "https://github.com/conka8/Voice-ReAct-Agent"
                },
                {
                    caption: "Distributed MoE Training Dashboard",
                    description: "去中心化混合專家 (MoE) 模型訓練網絡的實時排行榜.",
                    videoSrc: "/assets/photos/projects/moe-code.jpg",
                    languages: ["React", "TypeScript", "Mixture of Experts", "Bittensor SN102"],
                    projectLink: "https://github.com/conka8/connito"
                }
            ],
        },
        "services": {
            heading: "服務",
            description: "我提供端到端的AI服務, 從自訂模型開發到能自動化工作流程的自主代理.",
            services: [
                {
                    caption: "AI代理開發",
                    description: "我開發具備工具調用、記憶和多步規劃能力的自主代理, 可靠且安全地自動化真實的業務流程."
                },
                {
                    caption: "模型開發與微調",
                    description: "我使用 PyTorch 和 Hugging Face 訓練及微調模型, 從大型語言模型微調到自訂分類器, 並在上線前進行嚴格評估."
                },
                {
                    caption: "RAG 與 LLM 應用",
                    description: "我透過檢索增強生成 (RAG) 和向量數據庫, 把大型語言模型連接到你的數據, 讓回答準確且有根據."
                },
                {
                    caption: "MLOps 與部署",
                    description: "我把模型和代理部署為可擴展的API, 運行於雲端和GPU基礎設施上, 並內建監控、評估和成本優化."
                },
            ]
        },
        "get-in-touch": {
            heading: "聯絡方法",
            contacts: [
                {
                    type: "email",
                    contact: "yumaueda509@gmail.com"
                }
            ],
            "hand-image-src": "/assets/hand.PNG"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "https://t.me/conka391"
        }
    }
} as const
