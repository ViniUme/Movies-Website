import {useState} from 'react';
import style from "../../styles/ListArea.module.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function ListArea({info}){

    const [marginLeft , setMarginLeft] = useState(0)

    return(
        <>
        <h3 className={style.title}>{info.title}</h3>
        
        <div className={style.list_div}>

            <div className={style.NavBefore} onClick={() => {
                if(marginLeft <= 0){
                    return
                }
                else{
                    let marginCount = marginLeft - 166;
                    setMarginLeft(marginCount);
                }
            }}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>


            <div className={style.NavNext} onClick={() => {
                    let windowSize = window.innerWidth;
                    let listSize = info.list.results.length * 166;
                    console.log(windowSize);
                    if(marginLeft >= (listSize - windowSize)){
                        return
                    }
                    else{
                        let marginCount = marginLeft + 166;
                        setMarginLeft(marginCount);
                    }
                }}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className={style.imgs_div} style={{marginLeft: `-${marginLeft}px`}}>

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