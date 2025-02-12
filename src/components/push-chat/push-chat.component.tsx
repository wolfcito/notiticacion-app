'use client'
import { sendPushChatMessage } from "@/service/push-chat"
import { useState } from "react"

export function PushChat() {
  const [walletRecipient, setWalletRecipient] = useState('0x47b43F926D08c81646833290eD4156E7ccEC7503')
  const [content, setContent] = useState('')
  return (
    <div>
      <h1>Push Chat</h1>
      <input className="bg-black text-white" type="text" placeholder="Wallet recipient" value={walletRecipient} onChange={(e) => setWalletRecipient(e.target.value)} />
      <input className="bg-black text-white" type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => sendPushChatMessage({ walletRecipient, content })}> Send </button>
    </div>
  )
}