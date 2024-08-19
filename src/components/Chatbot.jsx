import React, { useEffect,useRef } from "react";

const Chatbot = () => {
  const scriptLoadedRef = useRef(false); // Ref to track script loading

  useEffect(() => {
    // Only load the script if it hasn't been loaded already
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.setAttribute("chatbotId", "v9AB6UQzDHEmsSEoGNwk6");
      script.setAttribute("domain", "www.chatbase.co");
      script.defer = true;

      document.body.appendChild(script);

      scriptLoadedRef.current = true; // Mark the script as loaded

      return () => {
        document.body.removeChild(script); // Clean up the script when component unmounts
      };
    }
  }, []);


  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/v9AB6UQzDHEmsSEoGNwk6"
      width="100%"
      style={{ height: "700px", border: "none" }}
      title="Chatbot"
    ></iframe>
  );
};

export default Chatbot;
