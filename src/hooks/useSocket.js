import { useContext } from 'react';
import { SocketContext } from './SocketProvider';

const useSocket = () => {
    const socket = useContext(SocketContext);
    if (!socket) {
        console.error('useSocket must be used within a SocketProvider');
    }
    return socket;
};

export default useSocket;