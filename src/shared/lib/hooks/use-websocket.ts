import { useEffect, useState, useRef } from 'react';

interface UseWebsocketOptions<T> {
  url: string
  onMessage?: (data: { data: T; type: string }) => void
  onError?: (event: Event) => void
  onOpen?: () => void
  onClose?: () => void
}

export const useWebsocket = <T>({
  url,
  onMessage,
  onError,
  onOpen,
  onClose,
}: UseWebsocketOptions<T>) => {
  const [isError, setIsError] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket(url)
    socketRef.current = socket

    socket.onopen = () => {
      setIsConnected(true)
      onOpen?.()
    }

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        onMessage?.(data)
      } catch (error) {
        console.error('WebSocket: Error parsing message', error)
      }
    }

    socket.onerror = (event) => {
      console.error('WebSocket error:', event)
      onError?.(event)
      setIsError(true)
    }

    socket.onclose = () => {
      setIsConnected(false)
      onClose?.()
    }

    return () => {
      socket.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const sendMessage = (message: object) => {
    if (socketRef.current && isConnected) {
      socketRef.current.send(JSON.stringify(message))
    } else {
      console.warn('WebSocket is not connected. Message not sent.')
    }
  }

  return { isConnected, isError, sendMessage }
}
