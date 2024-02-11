import SmallCard from "./SmallCard";
import './home.css'
import { useEffect, useState } from "react";
import axios from "axios";
import store from "../store/store";
import { setData } from "../store/dataSlice";
import Header from './Header';
import Footer from './Footer';

let page = '1', contacts = '15';

function Home() {
  const [results,setresult] = useState([]);
  const [loading,setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchData = async (p, c) => {
    setLoading(true);
    page = p;
    contacts = c;

    try {
      const response = await axios.get(`https://randomuser.me/api/?&page=${page}&results=${contacts}&seed=abc`);
      const results = response.data["results"];

      setresult(results);
      store.dispatch(setData(results))

    } catch (err) {
     setErr(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{    
    fetchData(page,contacts);
  },[])

  if(loading){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      </div>
      
    )
  }

  if(err) {
    return <div> Error: {err.message}</div>
  }

  return (
    <>
      <Header loadData={fetchData}/>
      <main >

        {results.map((result) => (
            <SmallCard key={result.id.phone} name={result.name} gender={result.gender} photo={result.picture} country={result.location.country} id={results.indexOf(result)} />
        ))}

      </main>
      <Footer />
    </>
  )
}

export default Home;
