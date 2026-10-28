import { SupportedLanguages } from "./supportedLanguagesData"


export type AboutContents = Record<SupportedLanguages, {
    hero: {
        headline: string,
        subheading: string,
        description: string,
        imgSrc: string
    },
}>

export const aboutContents: AboutContents = {
    "en": {
        hero: {
            headline: "AI & machine learning developer based in Osaka, Japan",
            subheading: "I build AI models and autonomous agents that turn complex problems into reliable, production-ready systems.",
            description: "As an AI developer, I work across the full lifecycle—data preparation, model training and fine-tuning, LLM integration and agent orchestration, through to deployment and monitoring. I care about AI that is not just impressive in a demo, but measurable, safe and dependable in production.",
            imgSrc: "/assets/photos/about-workspace.jpg"
        },
    },

    "zh": {
        hero: {
            headline: "AI 與機器學習開發者, 現居日本大阪",
            subheading: "我致力於開發AI模型和自主代理, 把複雜的問題變成可靠的生產級系統.",
            description: "作為一名AI開發者, 我參與AI的完整生命週期: 數據準備、模型訓練與微調、LLM整合與代理編排, 以至部署和監控. 我追求的不只是在演示中令人驚艷的AI, 而是在生產環境中可衡量、安全且可靠的系統。",
            imgSrc: "/assets/photos/about-workspace.jpg"
        },
    }
} as const