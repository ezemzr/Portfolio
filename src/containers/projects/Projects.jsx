import React, { useEffect } from 'react';
import '../../styles/containers/_projects.scss'
import image from '../../assets/apps.png'
import Project from '../../components/Project';

import project1img from '../../assets/proyects/WhatsApp Image 2023-02-12 at 13.08.36.jpeg'
import project2img from '../../assets/proyects/WhatsApp Image 2023-02-12 at 13.26.15.jpeg'
import project3img from '../../assets/proyects/WhatsApp Image 2023-02-12 at 13.30.55.jpeg'
import project4img from '../../assets/proyects/WhatsApp Image 2023-02-12 at 15.06.50.jpeg'

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';


const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.3
    })
    const animation = useAnimation()

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.4
                }
            })
        }
        if(!inView) {
            animation.start({x:'-100vw'})
        }
    }, [inView])

    return (
        <div ref={ref} className='projects__section padding_section' id='projects'>
            <motion.div className='projects__grid' animate={animation}>
                <Project image={project4img} gh_code='https://github.com/ezemzr/Proyecto-React-Minzer' deploy='https://proyecto-react-minzer.vercel.app/' title='Apple Store' description='Ecommerce creada con react en dos semanas y con base de datos en firebase'/>
                {/* <Project image={""} gh_code='https://github.com/JMSafadi/pokedux' deploy='https://pokedux-app.web.app/' title='Pokedux' description='Aplicacion consumiendo pokeAPI que muestra Pokemons de distintos tipos. Podes filtrar y escoger tus favoritos. Estado controlado con Redux.'/> */}
                {/* <Project image={""} gh_code='https://github.com/JMSafadi/petgram-app' deploy='https://jmsafadi.github.io/ecommerce-app/' title='Juma Sports' description='E-commerce de ropa deportiva. Integracion de Paypal API para pagos, React Helmet para el SEO y Google Maps API para ver ubicacion del envio.'/> */}
            </motion.div>
            <motion.div className='projects__content' animate={animation}>
                <div className='projects__title__container'>
                    <div className='title__detail'></div>
                    <h3 className='projects__title'>Mis proyectos</h3>
                    <img src={image} alt='image' className='projects__image'/>
                </div>
            </motion.div>
            <motion.div className='projects__grid' animate={animation}>
                <Project image={project1img} gh_code='https://github.com/ezemzr/JavaScript.Bar.git' deploy='https://drinksmzr.netlify.app/' title='Venta de Alcohol' description='Una ecommerce de venta de alcohol y su interfaz con el usuario. Uno de mis primeros proyectos usando javascript, CSS y HTML'/>
                <Project image={project2img} gh_code='https://github.com/ezemzr/DesarrolloWeb.BB.git' deploy='https://badbunnymzr.netlify.app/' title='BadBunny Page' description='En esta pagina vas a poder ver y saber mas de bad bunny. Fue mi primera pagina web y la hice con HTML Y CSS'/>
                <Project image={project3img} gh_code='https://github.com/ezemzr/Real-State' title='Bienes Raices' description='Aqui podras encontrar pagina hecha con html, css y javascript. Tiene DARKMODE'/>
            </motion.div>
        </div>
    );
}

export default Projects;
