import React from 'react';
import '../../styles/containers/_skills.scss'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.png'
import git from '../../assets/git.png'
import redux from '../../assets/redux.svg'
import type from "../../assets/Typescript_logo_2020.svg"
import node from "../../assets/Mi proyecto (6).png"
import sql from "../../assets/sql.png"
import mui from '../../assets/material-ui.svg'

const Skills = () => {
    return (
        <div className='skills section__padding section__margin' id='skills'>
            <div className='skills__logos'>
            <img src={sql} alt='sql' className='sql'/>
                <img src={type} alt='type' className='type'/>
                <img src={node} alt='node' className='node'/>
                <img src={html} alt='html' className='html'/>
                <img src={css} alt='css' className='css'/>
                <img src={sass} alt='sass' className='sass'/>
                <img src={javascript} alt='javascript' className='javascript'/>
                <img src={react} alt='react' className='react'/>
                <img src={redux} alt='redux' className='redux'/>
                <img src={git} alt='git' className='git'/>
            </div>
            <div className='skills__title-section'>
                <div className='title__detail gradient__background'></div>
                <h3 className='skills__title'>Tecnologías</h3>
            </div>
        </div>
    );
}

export default Skills;
