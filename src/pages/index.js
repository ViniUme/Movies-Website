import { useEffect , useState } from "react";
import Head from 'next/head';
import TMDB from "./api/TMDB";
import ListArea from "./components/ListArea";
import style from "../styles/Home.module.css";

export default function Index(){

  const [list , setList] = useState([])
  
  useEffect(() => {
    const LoadAll = async () => {
      let tmdb_res = await TMDB.GetListMovies();
      setList(tmdb_res);
    }

    LoadAll()
  },[])

  console.log(list);
  
  return(
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <section className={style.lists}>

        {list && list.map((item , key) => {
          return <ListArea key={key} />
        })}

      </section>

    </div>
  )
}