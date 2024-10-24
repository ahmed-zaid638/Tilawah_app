import Player from "./Player"
// https://podcasts.qurancentral.com/abdul-basit/abdul-basit-64-surah-114.mp3

function Quran() {
  return (
    <div className="flex gap-1">
      <Player src={'https://podcasts.qurancentral.com/abdul-basit/abdul-basit-64-surah-114.mp3'} />
      <div>تشغيل الصوت</div>
    </div>
  )

}

export default Quran