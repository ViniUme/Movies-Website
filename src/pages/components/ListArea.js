import style from "../../styles/ListArea.module.css"

export default function ListArea({info}){
    return(
        <div className={style.list_div}>
            <h3 className={style.title}>{info.title}</h3>

            <div className={style.imgs_div}>

                {info.list.results.map((item , key) => {
                    return(
                        <img alt="" className={style.img} key={key} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    )

                })}

            </div>
        </div>
    )
}