import style from '../../styles/Footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <h5 className={style.info}>Movies data is taken from <a href="https://www.themoviedb.org/?language=pt-BR" className={style.link}>The Movie Data Base</a></h5>
            <h5 className={style.info}>Navigate icons is taken from <a href="https://mui.com/" className={style.link}>Mui library</a></h5>
        </footer>
    )
}