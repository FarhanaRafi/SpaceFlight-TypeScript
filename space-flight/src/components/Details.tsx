import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ISpace } from '../interfaces/ISpace';
import { useState } from "react";
import { format } from 'date-fns'


const Details = () => {
    const params = useParams()
    const[news, setNews] = useState<ISpace>()
    const fetchDetails = async() =>{
        try{
            let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + params.id)
            if(res.ok) {
                let spaceNews = await res.json()
                setNews(spaceNews)
                console.log(spaceNews)
            }else{
               console.log("error") 
            }
        }catch(error){
            console.log(error)
        }
    }
  
useEffect(()=>{
    fetchDetails()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return (
       
        
        <div>
           {news?  
        
          <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">{news.newsSite}</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{news.title}</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={news.imageUrl}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                 
                  <span className="ml-2">{news.url}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
          <p>
              <strong>
              {format(new Date(news.publishedAt), 'do MMMM yyyy')}
              </strong>
              </p>
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
               {news.summary}
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
          :""}
        </div>
    );
};

export default Details;