import { Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
interface PlayerProps {
    src: string
}

function Player({ src}: PlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleEnded = () => {
        setIsPlaying(false);
    }
    useEffect(() => {

    }, [audioRef])
    return (
        <>
            <audio ref={audioRef} onEnded={handleEnded} src={src}></audio>
            <button onClick={toggleAudio}>
                {
                    isPlaying ? <Pause /> : <Play />
                }
            </button>

        </>


    )
}

export default Player