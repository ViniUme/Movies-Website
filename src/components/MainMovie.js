import style from '../styles/MainMovie.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function MainMovie( {info} ){
    if(info != null){

        let release = new Date(info.release_date);

        return(
            <section className={style.section} style={{
                background: `linear-gradient(0deg, #121212 10%, transparent 90%),
                linear-gradient(0deg, #00000050 0%, #00000050 100%),
                url(https://image.tmdb.org/t/p/original${info.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: 'top'
            }}>
                <div className={style.content}>

                    <h5 className={style.name}>{info.title}</h5>
                    
                    <div className={style.row}>
                        <h5 className={style.vote}>{info.vote_average} Score</h5>
                        <h5>{release.getFullYear()}</h5>
                    </div>

                    <div className={style.buttons}>
                        <button className={style.watch}><PlayArrowIcon/> Watch now</button>
                        <button className={style.add}><PlaylistAddIcon/> Add to list</button>
                    </div>

                </div>
            </section>
        )
    }
    else{
        return(
            <section className={style.section}>

            </section>
        )
    }
}