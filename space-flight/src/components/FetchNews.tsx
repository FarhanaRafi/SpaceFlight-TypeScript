import  { useEffect, useState } from 'react';
import SpaceComponent from './SpaceComponent';
import { ISpace } from '../interfaces/ISpace';
import { Container, Row, Col } from 'react-bootstrap';

const FetchNews = () => {

    const[news, setNews] = useState<ISpace[]>([])

    const fetchCards = async() =>{
        try{
            let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
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

    useEffect(() => {
        fetchCards()
    },[])

    return (
      
        
        <Container>
            <Row>
                <Col>
                <h2>News</h2>
                </Col>
            </Row>
            <Row>
                {news.map((n)=>{
                    return(
                    <Col xs={12} md={4} lg={3} className="text-dark">
                        <SpaceComponent space={n}/>
                    </Col>)
                })}
            </Row>
        </Container>
    );
};

export default FetchNews;