export type ChatResponse = {
  reply: string;
};

const knowledge = [
  {
    keywords: ["hello", "hi", "hey", "হ্যালো", "হাই"],
    reply:
      "👋 Hello! Welcome to Tairanos. How can I help you today?",
  },

  {
    keywords: ["service", "services", "সেবা", "সার্ভিস"],
    reply:
      "We provide AI Chatbots, Website Development, Business Automation, Voice Agents, SEO Optimization and Custom AI Solutions.",
  },

  {
    keywords: ["price", "pricing", "cost", "package", "মূল্য"],
    reply:
      "Starter: ৳9,999\nBusiness: ৳24,999\nEnterprise: Custom Pricing.",
  },

  {
    keywords: ["website", "web"],
    reply:
      "We build fast, responsive and SEO-friendly business websites.",
  },

  {
    keywords: ["chatbot", "ai chatbot"],
    reply:
      "Our AI Chatbots automate customer support and generate leads 24/7.",
  },

  {
    keywords: ["automation"],
    reply:
      "Business automation helps you save time by automating repetitive work.",
  },

  {
    keywords: ["seo"],
    reply:
      "Our SEO service improves your Google ranking and online visibility.",
  },

  {
    keywords: ["portfolio", "project"],
    reply:
      "Our portfolio includes AI Chatbots, Smart Websites, Voice Agents, SEO and Automation projects.",
  },

  {
    keywords: ["contact", "email", "phone"],
    reply:
      "📧 Email: tairanos8@gmail.com\n📱 Phone: +8801341133374",
  },

  {
    keywords: ["location", "bangladesh"],
    reply:
      "We are based in Bangladesh and work with clients worldwide.",
  },

  {
    keywords: ["consultation"],
    reply:
      "Yes! We offer FREE consultation before starting any project.",
  },
];

export function getBotReply(message: string): ChatResponse {
  const text = message.toLowerCase();

  for (const item of knowledge) {
    for (const keyword of item.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        return {
          reply: item.reply,
        };
      }
    }
  }

  return {
    reply:
      "Sorry, I couldn't understand your question.\n\nYou can ask me about:\n• AI Chatbots\n• Website Development\n• Pricing\n• Business Automation\n• SEO\n• Contact Information",
  };
}