import style from '../../styles/MainMovie.module.css'

export default function MainMovie( {info} ){
    if(info != null){

        let release = new Date(info.release_date);
        console.log(info)

        return(
            <section className={style.section} style={{
                background: `linear-gradient(0deg, #091833 10%, transparent 90%),
                linear-gradient(90deg, #091833 30%, transparent 70%),
                url(https://image.tmdb.org/t/p/original${info.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
            }}>
                <div className={style.content}>
                    <h5 className={style.name}>{info.title}</h5>
                    <div className={style.row}>
                        <h5>{info.vote_average}</h5>
                        <h5>{release.getFullYear()}</h5>
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