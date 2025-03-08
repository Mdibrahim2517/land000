import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import Env from '../env.json';

export const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    const SOCKET_URL = Env.ROOT;

    const socketInstance = useMemo(() => {
        return io(SOCKET_URL, {
            transports: ['websocket'],
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 2000,
        });
    }, [SOCKET_URL]);

    useEffect(() => {
        setSocket(socketInstance);

        socketInstance.on('connect', () => {
            console.log('Socket connected:', socketInstance.id);
        });

        socketInstance.on('disconnect', () => {
            console.warn('Socket disconnected');
        });

        socketInstance.on('connect_error', (err) => {
            console.error('Socket connection error:', err);
        });

        return () => {
            socketInstance.disconnect();
            console.log('Socket disconnected on cleanup');
        };
    }, [socketInstance]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;