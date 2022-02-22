import { useEffect , useState } from "react";
import Head from 'next/head';
import TMDB from "./api/TMDB";
import ListArea from "./components/ListArea";
import Footer from './components/Footer'
import style from "../styles/Home.module.css";

export default function Index(){

  const [list , setList] = useState([])
  const [randomMovie , setRandomMovie] = useState([])
  
  useEffect(() => {
    const LoadAll = async () => {
      let tmdb_res = await TMDB.GetListMovies();
      setList(tmdb_res);

      let randomNumber = Math.floor(Math.random() * (tmdb_res[0].list.results.length - 1));
      let idMovie = tmdb_res[0].list.results[randomNumber].id;
      let getMovie = await TMDB.GetRandomMovie(idMovie);
      setRandomMovie(getMovie);
    }

    LoadAll()
  },[])

  console.log(randomMovie);
  
  return(
    <main>
      <Head>
        <title>Home Page</title>
      </Head>

      <section className={style.lists}>

        {list && list.map((item , key) => {
          return <ListArea key={key} info={item} />
        })}

      </section>

      <Footer/>

    </main>
  )
}