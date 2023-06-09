import { NavLink } from 'react-router-dom'
import YouTube from './YouTube.jsx'
import css from './css/Preview.module.css'

export default function Preview ({ videoId, userId, author, title, videoUrl, createdAt }) {
    const createdDate = new Date(createdAt).toLocaleDateString('en-CA', {day:"numeric", month:"long", year:"numeric"})

    return (
        <div className={css.Preview}>
            <NavLink to={`/video/${videoId}`}>
                <YouTube type='thumbnail' videoUrl={videoUrl}/>
            </NavLink>
            <div className={css.videoInfo}>
                <span className={css.channelIconContainer}>
                    <NavLink className={css.profileLink} to={`/profile/${userId}`}>
                        <div className={css.channelIcon}>
                            {author[0]}
                        </div>
                    </NavLink>
                </span>
                <div className={css.videoInfoText}>
                    <div className={css.title}><NavLink to={`/video/${videoId}`}>{title}</NavLink></div>
                    <div className={css.channelAndDate}>
                        <span className={css.channelName}>{author}</span>
                        <span> • </span>
                        <span className={css.date}>{createdDate}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
