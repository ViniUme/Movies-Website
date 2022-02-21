import style from "../../styles/ListArea.module.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';;

export default function ListArea({info}){
    return(
        <>
        <h3 className={style.title}>{info.title}</h3>
        
        <div className={style.list_div}>

            <div>
                <NavigateBeforeIcon />
            </div>
            <div>
                <NavigateNextIcon />
            </div>

            <div className={style.imgs_div}>

                {info.list.results.map((item , key) => {
                    return(
                        <img alt="" className={style.img} key={key} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    )

                })}

            </div>
        </div>
        </>
    )
}