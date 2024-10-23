import { Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
// toggle function

function Player() {
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
            <audio ref={audioRef} onEnded={handleEnded} src="https://podcasts.qurancentral.com/abdul-basit/abdul-basit-64-surah-114.mp3"></audio>
            <button onClick={toggleAudio}>
                {
                    isPlaying ? <Pause /> : <Play />
                }
            </button>

        </>


    )
}

export default Player