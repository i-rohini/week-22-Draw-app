import { useEffect, useState } from "react";
import { WS_URL } from "../config";


export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkMDE3NjI2Ny1mNjE5LTQwZDAtYjg2MS02NWU1NzcyOTU0MDUiLCJpYXQiOjE3NTI0MzAwOTV9.f-LXfeZY47yfWlFMPykaV8O81GlHvJKR3OFb2cJmbQ0`);
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    }
  },[])

  return {
    socket,
    loading
  }
}