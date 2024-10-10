import React, { useEffect } from 'react';

const ChatbotPage = () => {
  useEffect(() => {
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    botpressScript.async = true;
    document.body.appendChild(botpressScript);


    const botpressConfigScript = document.createElement('script');
    botpressConfigScript.src = 'https://mediafiles.botpress.cloud/8f3216db-30f5-4bb0-b684-21a200c4911a/webchat/v2.1/config.js';
    botpressConfigScript.async = true;
    document.body.appendChild(botpressConfigScript);

 
    const initializeChatbot = () => {
      if (window.botpressWebchat) {
        window.botpressWebchat.init({
          botId: 'c4dbd48b-7f8d-4364-807f-a2f5aac14e27',
          clientId: 'bp_pat_qn3u3LV4U0tz0z7QcXdJYC3fgyrVO54GVUAO',
          container: '#chatbot-container'
        });
      }
    };

    botpressScript.onload = initializeChatbot;
    botpressConfigScript.onload = initializeChatbot;

    return () => {
      document.body.removeChild(botpressScript);
      document.body.removeChild(botpressConfigScript);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Chatbot Page</h1>
      <div id="chatbot-container" style={{ width: '100%', height: '500px' }}></div>
    </div>
    
  );
};

export default ChatbotPage;


