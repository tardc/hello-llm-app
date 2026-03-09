interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
        }`}
      >
        <div className="text-sm font-medium mb-1">
          {isUser ? "You" : "Assistant"}
        </div>
        <div className="whitespace-pre-wrap break-words">
          {message.content}
        </div>
      </div>
    </div>
  );
}
