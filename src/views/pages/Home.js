import React from 'react';
import Slider from "react-slick";

//Atoms
import TitlePage from '../atoms/TitlePage';
import Icon from '../atoms/icons/Index';
import TitleSection from '../atoms/TitleSection';
import ListItem from '../atoms/ListItem';
import ExpertItem from '../atoms/ExpertItem';
import ProjectItem from '../atoms/ProjectItem';

//Datas
import {competences} from '../../constants/competences';
import {staticExpertises} from '../../constants/staticExpertises';
import {staticProjects} from '../../constants/staticProjects';

const Home = () => {
    const settingsSlider = {
        infinite: false,
        dots:false,
        arrows: false,
        slidesToShow: 1.2,
        slidesToScroll: 1
      };
    return (
        <div className={'home-page'}>

            {/* 
            |-------------
            |   Banner 
            |-------------
            */}
            <section className="banner container-dft">
                {/*
                    # Title Page component 
                    # Contain Title
                    # contentText (facultative)
                */}
                <TitlePage 
                    titleFirst={'We create <br/> & build'} 
                    titleSecond={'Digital solution'} 
                    contentText={'AD Agency est une agence digitale full services : qui intervient sur l’ensemble des expertises necessaire au bon déroulement de vos projets : conseils, UX design, UI design, developpement, maintenance...'}
                />

                <Icon name="Smile" width={300}/>
            </section>


            {/* 
            |----------------
            |   Compétences 
            |----------------
            */}
            <section className="competences section">
                
                <div className="container-dft">

                    {/*
                        # Titles component 
                        # Contain Titles | Italic text
                    */}
                    <TitleSection 
                        title = {'Nos competences'}
                        subtitle = {'qui nous tiennent à coeur'}
                    />

                    {/* 
                    |   Competences list 
                    |----------------------
                    */}
                    <div className="competences-container">
                        {competences.map( item => {
                            return(
                                <ListItem 
                                    class = {"small-item"}
                                    key = {item.id}
                                    id = {item.id + 1}
                                    name = {item.name}
                                    content = {item.content}
                                />
                            )
                        })}
                    </div>

                    {/* 
                    |   Competences list for mobile
                    |----------------------
                    */}
                    <Slider {...settingsSlider}>
                        {competences.map( item => {
                            return(
                                <ListItem 
                                    key = {item.id}
                                    id = {item.id + 1}
                                    name = {item.name}
                                    content = {item.content}
                                />
                            )
                        })}
                    </Slider>
                </div>
            </section>


            {/* 
            |----------------
            |   Champs d'action 
            |----------------
            */}
            <section className="action container-dft section">

                <div className="action-content">
                    {/*
                        # Titles component 
                        # Contain Titles | Italic text
                    */}
                    <TitleSection 
                        title = {"Nos champs d'actions"}
                        subtitle = {'Parce qu’en plus d’être gentils, nous sommes pluridisciplinaires'}
                    />

                    <p>
                    Nous intervenons sur tous types de besoins : plateforme 
                    de marque, e-commerce, application métiers, customer care, plateforme collaboratives, réseaux sociaux, applications mobiles...<br/> 
                    Vous ne vous retrouvez pas dans cette description ?
                    Pas de soucis, nous adorons les challenges !
                    </p>
                </div>

                <div className="action-icon">
                    {staticExpertises.map( item => {
                        return(
                            <ExpertItem 
                                key = {item.id}
                                icon = {item.icon}
                                title = {item.title}
                            />
                        )
                    })}
                </div>
            </section>


            {/* 
            |----------------
            |   Derniers projets 
            |----------------
            */}
            <section className="projects container-dft section">
                {/*
                    # Titles component 
                    # Contain Titles | Italic text
                */}
                <TitleSection 
                    title = {"Nos derniers projets"}
                    subtitle = {'Nos petites fiertés'}
                />

                <div className="lasts-projects">
                    {staticProjects.filter(project => project.id <= 4 ).map( item => {
                        return(
                            <ProjectItem 
                                key = {item.id}
                                id = {item.id}
                                img = {item.img}
                                title = {item.title}
                                type = {item.type}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Home;