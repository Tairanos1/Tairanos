import { knowledge } from "./knowledge";

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


export function getBotReply(
  message: string,
  previousMessages: string[] = []
): string {

  const input = normalize(message);

  const context =
    previousMessages
      .slice(-4)
      .join(" ")
      .toLowerCase();


  // Context based replies

  if (
    context.includes("website") &&
    (
      input.includes("restaurant") ||
      input.includes("food")
    )
  ) {
    return (
      "🍽️ Great! We can build a professional restaurant website with:\n\n" +
      "• Online menu\n" +
      "• Table booking system\n" +
      "• Customer inquiry form\n" +
      "• SEO optimization\n" +
      "• Mobile-friendly design"
    );
  }


  if (
    context.includes("website") &&
    (
      input.includes("shop") ||
      input.includes("store") ||
      input.includes("ecommerce")
    )
  ) {
    return (
      "🛒 Perfect! We can create an e-commerce website with:\n\n" +
      "• Product management\n" +
      "• Shopping cart\n" +
      "• Payment integration\n" +
      "• Order management"
    );
  }


  let bestMatch = "";
  let highestScore = 0;


  for (const item of knowledge) {

    let score = 0;


    for (const keyword of item.keywords) {

      const key = normalize(keyword);


      if (input.includes(key)) {
        score += 10;
      }


      key.split(" ").forEach((word) => {

        if (input.includes(word)) {
          score += 2;
        }

      });

    }


    if (score > highestScore) {
      highestScore = score;
      bestMatch = item.answer;
    }

  }


  if (highestScore > 0) {
    return bestMatch;
  }


  return (
    "🤖 I would love to help you.\n\n" +
    "You can ask me about:\n\n" +
    "• AI Chatbots\n" +
    "• Websites\n" +
    "• Automation\n" +
    "• SEO\n" +
    "• E-commerce\n" +
    "• Pricing\n" +
    "• Portfolio"
  );

}