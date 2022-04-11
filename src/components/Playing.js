import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import { Songs } from '../Context'
import 'react-h5-audio-player/lib/styles.css';
export default function Playing() {
    const { song, handleSetSong } = React.useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    } 
    const handleClickPrevious = () => {
        handleSetSong(song.id - 1)
    } 
    return (
    <div>
       <AudioPlayer className="player-music" src={song.url} layout="stacked-reverse"
       showSkipControls={true} showJumpControls={false} 
       onClickNext={handleClickNext}
       onClickPrevious={handleClickPrevious}
       />
    </div>
  )
}
