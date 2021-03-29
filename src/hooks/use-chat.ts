import { useEffect, useRef, useState } from 'react';
import socketIO from 'socket.io-client';
import { IChatMessages, IImageMessage, ITextMessage, OnlineUserListType, UsernameType } from '@/components/chat/types';
import { SOCKET_SERVER_URL } from '@/constants';
import { UseChatHookType } from './types';

export function useChat(usernameFromProps: string): UseChatHookType {
  const [messages, setMessages] = useState<IChatMessages>([]);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUserListType>([]);
  const [typers, setTypers] = useState<string[]>([]);
  const socketRef = useRef<SocketIOClient.Socket>();

  useEffect(() => {
    socketRef.current = socketIO(`${SOCKET_SERVER_URL}=${usernameFromProps}`, { transports: ['websocket'] });

    socketRef.current.on('disconnect', () => {
      setMessages([]);
    });

    socketRef.current.on('connect_error', (error: Error) => {
      console.log({ error });
    });

    socketRef.current.on('user-connected', (username: string) => {
      if (username !== usernameFromProps) {
        setOnlineUsers((users: OnlineUserListType) => [...users, username]);
      }
    });

    socketRef.current.on('user-disconnected', (username: string) => {
      const updatedUsers: OnlineUserListType = onlineUsers.filter((user) => user !== username);
      setOnlineUsers(updatedUsers);
    });

    socketRef.current.on('is-typing', (typers) => {
      const typersList = Object.keys(typers).filter((typer) => typers[typer] && typer !== usernameFromProps);
      setTypers(typersList);
    });
    socketRef.current.on('message', (message: ITextMessage | IImageMessage) => {
      setMessages((messages: IChatMessages) => [...messages, message]);
    });

    return () => {
      socketRef.current.disconnect();
      socketRef.current.removeAllListeners();
    };
  }, [usernameFromProps]);

  const sendMessage = (messageBody: string) => {
    socketRef.current.emit('text-message', messageBody);
  };

  const sendImage = (url: string, alt: string) => {
    socketRef.current.emit('image-message', {
      url,
      alt
    });
  };
  const sendIsTyping = (isTyping: boolean) => {
    socketRef.current.emit('typing', isTyping);
  };

  return { messages, sendIsTyping, sendImage, sendMessage, typers };
}
