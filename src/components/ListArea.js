import {useState} from 'react';
import style from "../styles/ListArea.module.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ListArea = ({info}) => {

    const [marginLeft , setMarginLeft] = useState(0)

    let title = info.title;

    return(
        <>
        <h3 className={style.title}>{title}</h3>
            
        <div className={style.list_div}>

            <div className={style.NavBefore} onClick={function Before(){
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


            <div className={style.NavNext} onClick={function Next(){
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

                    let img_link = `https://image.tmdb.org/t/p/w500${item.poster_path}`

                    return(
                        <img alt="" className={style.img} key={key} src={img_link} />
                    )

                })}

            </div>
        </div>
        </>
    )
}

export default ListArea;