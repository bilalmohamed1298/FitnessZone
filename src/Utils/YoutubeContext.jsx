import axios from "axios";
import { createContext, useEffect, useState} from "react";

export let YoutubeContext = createContext([]);

export function YoutubeContextProvider ({children}){

   const [youtubeData,setYoutubeData] =  useState([])

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7931943df5mshd164a9d33e8d152p11abf3jsn4f86e8c06817',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

const fetchYoutubeAPI = async ()=>{

        const youtubeAPI = await axios.request('https://youtube-search-and-download.p.rapidapi.com/channel/about',options);
        console.log(youtubeAPI.data);
        setYoutubeData(youtubeAPI.data)
}
useEffect(()=>{
    fetchYoutubeAPI()
},[])

    return(
    <YoutubeContext.Provider
        value={{youtubeData}}
    >
     {children}
    </YoutubeContext.Provider>
    );

}