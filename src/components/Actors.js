import React, {useState , useEffect} from 'react';
import { Icon, Button, Modal, Heading, Text, Paragraph } from '@innovaccer/design-system';
import "@innovaccer/design-system/css";
import '../styles/movie.css';
import MenuBar from './MenuBar';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Atom } from 'react-loading-indicators';
import useActors from '../hooks/useActors';

const Actors = () => {

    const {idActor} = useParams();
    console.log("ID ACTOR: ",idActor);
    const navigate = useNavigate();
    const {actor , loading, error} = useActors(idActor);

    if (!idActor) return;

    if(error){
        return <div>Error loading</div>
    }

    return(
        <div>
            <MenuBar/>
              <section>
                <div className="content">
                    <span>
                        <a className="home_link" onClick={() => navigate('/')}>HOME</a>
                    </span>
                    <span style={{ fontSize: "30px", marginLeft: "5px" }}>|</span>
                    <span style={{ marginLeft: "8px" }}>{"ACTOR"}</span>
                </div>
            </section>

            {loading ? (
                    
                    <div className='indic'> <Atom color="#3176cc" size="large" text="" textColor="#b70eb7"/></div>
            
            ) : (
                <div className="actors">
                
                <img className="actorImg" src={actor.profile}></img>

                <div className="actorDesc">
                    <Heading size="xl"style={{textAlign:"center", marginBottom:"30px"}}>{actor.name}</Heading>

                    <Paragraph>{actor.biography}</Paragraph>

                </div>
            </div>
               
            )}
        <Footer/>
        </div>
    );
}

export default Actors;