import { useEffect, useMemo, useRef, useState } from 'react';

const LiveChat = ({ embedded = false }) => {
  const [minimized, setMinimized] = useState(false);
  const [message, setMessage] = useState('');

  const initialMessages = useMemo(
    () => [
      {
        id: 'm1',
        role: 'agent',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        text: 'Hello! How can I assist you today?',
        time: '2:34 PM',
      },
      {
        id: 'm2',
        role: 'user',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
        text: 'I need information about wholesale pricing',
        time: '2:35 PM',
      },
      {
        id: 'm3',
        role: 'agent',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        text: "I'd be happy to help! Please sign in to access our B2B pricing portal.",
        time: '2:36 PM',
      },
    ],
    []
  );

  const [messages, setMessages] = useState(initialMessages);
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, minimized]);

  const toggleChat = () => setMinimized((v) => !v);

  const sendMessage = () => {
    const text = message.trim();
    if (!text) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    const userMessage = {
      id: `u-${now.getTime()}`,
      role: 'user',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      text,
      time,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage('');

    // simple auto-reply (keeps UI feeling alive)
    window.setTimeout(() => {
      const reply = {
        id: `a-${Date.now()}`,
        role: 'agent',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        text: 'Thanks! A support agent will respond shortly. If you need pricing, please login to view wholesale rates.',
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget (from live_chat.html) */}
      <div
        id="chat-widget"
        className={
          embedded
            ? 'w-full bg-white rounded-2xl border border-[#EEEEEE] overflow-hidden'
            : `fixed bottom-6 right-6 w-80 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-40 ${
                minimized ? 'minimized' : ''
              }`
        }
      >
        <button
          id="chat-header"
          type="button"
          className="w-full bg-primary text-primary-foreground p-4 flex items-center justify-between cursor-pointer"
          onClick={embedded ? undefined : toggleChat}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <i className="fas fa-headset text-xl"></i>
            </div>
            <div className="text-left">
              <h4 className="font-semibold">Live Support</h4>
              <p className="text-xs opacity-90">We're online</p>
            </div>
          </div>
          {!embedded && (
            <span id="chat-toggle-btn" aria-hidden="true">
              <i className={`fas ${minimized ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl`}></i>
            </span>
          )}
        </button>

        {(!minimized || embedded) && (
          <div id="chat-body" className="p-4">
            <div id="chat-messages" ref={listRef} className="space-y-3 mb-4">
              {messages.map((m) => {
                const isUser = m.role === 'user';
                return (
                  <div
                    key={m.id}
                    className={`flex items-start space-x-2 ${isUser ? 'flex-row-reverse' : ''}`}
                  >
                    <img
                      src={m.avatar}
                      className="w-8 h-8 rounded-full"
                      alt={isUser ? 'user' : 'support agent'}
                    />
                    <div
                      className={`p-3 rounded-xl max-w-[200px] ${
                        isUser
                          ? 'bg-primary text-primary-foreground rounded-tr-none'
                          : 'bg-muted rounded-tl-none'
                      }`}
                    >
                      <p className={`text-sm ${isUser ? '' : 'text-foreground'}`}>{m.text}</p>
                      <span
                        className={`text-xs mt-1 block ${isUser ? 'opacity-80' : 'text-secondary'}`}
                      >
                        {m.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border border-border bg-background outline-none focus:ring-2 focus:ring-primary text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage();
                }}
              />
              <button
                type="button"
                onClick={sendMessage}
                className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const LiveChatEmbed = () => {
  return <LiveChat embedded />;
};

export default LiveChat;

