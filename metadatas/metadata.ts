import { Metadata } from "next";

export const metadataTags: Metadata = {
    title: "Yuma Ueda | AI Developer",
    description: "Yuma Ueda is an AI developer in Osaka, Japan, specializing in custom model development, LLM fine-tuning and autonomous AI agents.",
    keywords: ["AI developer","AI engineer","machine learning engineer","AI agent development","LLM","large language models","fine-tuning","RAG","model development","MLOps","PyTorch","Osaka","Japan","freelance","portfolio"],
    publisher: "Yuma Ueda",
    authors: [{name: "Yuma Ueda",url: "https://github.com/conka8"}],
    robots:"index, follow",
    icons: {
        icon: "/assets/icon.png",
        apple: "/assets/icon.png"
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "https://www.meisken.dev",
        languages: {
            en: "en-US",
            zh: "zh-HK"
        }
    },
    category: 'portfolio',
    metadataBase: new URL('https://www.meisken.dev'),
    openGraph: {
        siteName: "Yuma Ueda | AI Developer",
        type: "website",
        title: "Yuma Ueda | AI Developer",
        description: 'Yuma Ueda is an AI developer in Osaka, Japan, specializing in custom model development, LLM fine-tuning and autonomous AI agents.',
        images: [{
            url: "/assets/thumbnail.png",
            type: "image/png",
            width: "1920",
            height: "1080",
        }],
        url: "https://www.meisken.dev",
        locale: "Osaka, Japan",
        emails: "yumaueda509@gmail.com",
    },
    twitter: {
        site: "@Yuma Ueda",
        creator: "@Yuma Ueda",
        card: 'summary_large_image',
        title: "Yuma Ueda | AI Developer",
        description: "Yuma Ueda is an AI developer in Osaka, Japan, specializing in custom model development, LLM fine-tuning and autonomous AI agents.",
        images: "/assets/thumbnail.png",
    }
};