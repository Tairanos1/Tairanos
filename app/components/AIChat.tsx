"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaBolt,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

import { getBotReply } from "../lib/matcher";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<
  "none" | "name" | "email" | "phone"
>("none");

const [leadData, setLeadData] = useState({
  name: "",
  email: "",
  phone: "",
});

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Welcome to Tairanos AI.\nAsk me anything about our AI services, websites, pricing or automation.",
    },
  ]);
useEffect(() => {
  const saved = localStorage.getItem("tairanos-chat");

  if (saved) {
    setMessages(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "tairanos-chat",
    JSON.stringify(messages)
  );
}, [messages]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const text = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);

    setMessage("");
if (leadStep !== "none") {

  if (leadStep === "name") {

    setLeadData((prev) => ({
      ...prev,
      name: text,
    }));

    setLeadStep("email");

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Thanks! 😊 Please provide your email address.",
      },
    ]);

    setTyping(false);
    return;
  }


  if (leadStep === "email") {

    setLeadData((prev) => ({
      ...prev,
      email: text,
    }));

    setLeadStep("phone");

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Great! 📱 Please provide your phone number.",
      },
    ]);

    setTyping(false);
    return;
  }


  if (leadStep === "phone") {

    const finalLead = {
  ...leadData,
  phone: text,
};

try {
  // Save locally
  const existingLeads = JSON.parse(
    localStorage.getItem("tairanos-leads") || "[]"
  );

  existingLeads.push({
    ...finalLead,
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(
    "tairanos-leads",
    JSON.stringify(existingLeads)
  );

  // Send to API
  await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(finalLead),
  });

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        "🎉 Thank you! Our team will contact you soon.",
    },
  ]);
} catch (error) {
  console.error("Lead submit failed:", error);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        "⚠️ Sorry, we couldn't submit your request. Please try again.",
    },
  ]);
}

setLeadStep("none");

setLeadData({
  name: "",
  email: "",
  phone: "",
});

setTyping(false);

return;
  }

}
    setTyping(true);

    setTimeout(() => {
      const history = messages.map((msg) => msg.content);

      const reply = getBotReply(
            text,
            history
   );
   if (
  reply.toLowerCase().includes("may i know your name")
) {
  setLeadStep("name");
}

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);

      setTyping(false);
    }, 800);
  };

  const quickAsk = (text: string) => {
    setMessage(text);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-cyan-500
        to-blue-600
        text-white
        shadow-2xl
        transition
        hover:scale-110
        "
      >
        {open ? <FaTimes size={22} /> : <FaRobot size={24} />}
      </button>

      <div
        className={`
        fixed
        bottom-28
        right-6
        z-50
        w-[380px]
        max-w-[94vw]
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#08111f]/95
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(6,182,212,.25)]
        transition-all
        duration-300

        ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }
      `}
      >
        <div className="border-b border-white/10 p-5 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500">
            <FaRobot size={24} />
          </div>

          <div>
            <h3 className="font-bold text-lg">
              Tairanos AI
            </h3>

            <p className="text-green-400 text-sm">
              ● Online
            </p>
          </div>

        </div>

        <div className="h-[350px] overflow-y-auto p-5 space-y-4">
{messages.length === 1 && (

  <div className="space-y-3">

    <p className="text-xs text-gray-400">
      Quick Questions
    </p>


    <button
      onClick={() =>
        setMessage("I need a website")
      }
      className="
      w-full
      rounded-xl
      bg-white/5
      px-4
      py-3
      text-left
      text-sm
      text-gray-200
      transition
      hover:bg-cyan-600
      "
    >
      🌐 I need a website
    </button>


    <button
      onClick={() =>
        setMessage("I need an AI chatbot")
      }
      className="
      w-full
      rounded-xl
      bg-white/5
      px-4
      py-3
      text-left
      text-sm
      text-gray-200
      transition
      hover:bg-cyan-600
      "
    >
      🤖 I need an AI chatbot
    </button>


    <button
      onClick={() =>
        setMessage("Tell me your pricing")
      }
      className="
      w-full
      rounded-xl
      bg-white/5
      px-4
      py-3
      text-left
      text-sm
      text-gray-200
      transition
      hover:bg-cyan-600
      "
    >
      💰 Pricing information
    </button>


    <button
      onClick={() =>
        setMessage("Show your portfolio")
      }
      className="
      w-full
      rounded-xl
      bg-white/5
      px-4
      py-3
      text-left
      text-sm
      text-gray-200
      transition
      hover:bg-cyan-600
      "
    >
      📂 Show portfolio
    </button>


  </div>

)}
          {messages.map((msg, index) => (

            <div
              key={index}
              className={`max-w-[85%] rounded-2xl p-4 whitespace-pre-line text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-blue-600"
                  : "bg-cyan-600"
              }`}
            >
              {msg.content}
            </div>

          ))}

          {typing && (

  <div
    className="
    flex
    items-center
    gap-2
    rounded-2xl
    bg-cyan-600
    p-4
    text-sm
    "
  >

    <span>
      🤖
    </span>

    <div className="flex gap-1">

      <span
        className="
        h-2
        w-2
        animate-bounce
        rounded-full
        bg-white
        "
      />

      <span
        className="
        h-2
        w-2
        animate-bounce
        rounded-full
        bg-white
        [animation-delay:150ms]
        "
      />

      <span
        className="
        h-2
        w-2
        animate-bounce
        rounded-full
        bg-white
        [animation-delay:300ms]
        "
      />

    </div>

  </div>

)}
          <div ref={bottomRef} />

        </div>

        <div className="border-t border-white/10 p-4">

          <p className="mb-3 text-xs text-gray-400">
            Quick Questions
          </p>

          <div className="mb-4 flex flex-wrap gap-2">

            <button
              onClick={() => quickAsk("What services do you provide?")}
              className="rounded-full bg-white/5 px-3 py-2 text-xs hover:bg-cyan-600"
            >
              <FaBolt className="mr-1 inline" />
              Services
            </button>

            <button
              onClick={() => quickAsk("Website pricing")}
              className="rounded-full bg-white/5 px-3 py-2 text-xs hover:bg-cyan-600"
            >
              <FaChartLine className="mr-1 inline" />
              Pricing
            </button>

            <button
              onClick={() => quickAsk("Website development")}
              className="rounded-full bg-white/5 px-3 py-2 text-xs hover:bg-cyan-600"
            >
              <FaGlobe className="mr-1 inline" />
              Website
            </button>

          </div>

          <div className="flex gap-3">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask Tairanos AI..."
              className="
              flex-1
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-sm
              outline-none
              focus:border-cyan-500
              "
            />

            <button
              onClick={sendMessage}
              className="
              rounded-xl
              bg-cyan-500
              px-4
              transition
              hover:bg-cyan-600
              "
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>

      </div>

    </>
  );
}