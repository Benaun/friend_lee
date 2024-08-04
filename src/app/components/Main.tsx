'use client'

import { useEffect, useRef } from "react"
import { io } from "socket.io-client"
import { formateDate } from "../assets/formateDate"

interface IProps {
    secretKey: string
}

const Main = ({ secretKey }: IProps) => {

    const interval = useRef<ReturnType<typeof setInterval> | null>(null);
    const socket = io('http://localhost:4200')

    useEffect(() => {
        socket.connect()
        socket.on('connect', () => {
            console.log(`Your ID: ${socket.id}`)
        })
        socket.on('responseEvent', (data) => {
            console.log(`${data}, time: ${formateDate(Date.now())}`)
        })

        interval.current = setInterval(() => {
            socket.emit('sendEvent', secretKey)
        }, 5000);

        return () => {
            if (interval.current) clearInterval(interval.current)
            socket.disconnect()
        }
    }, [socket, secretKey])
    return (
        <div >
            <h1 className="text-3xl">Main Page</h1>
        </div>
    );
}
export default Main