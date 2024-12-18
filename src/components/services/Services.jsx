import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Angular Application",
        description:
        "I specialize in Angular services, providing comprehensive solutions encompassing component architecture, routing, state management, HTTP interactions, and custom directives to optimize the performance, scalability, and user experience of your web applications.",
    },
    {
        id: 2,
        image: Image2,
        title: "React Application",
        description:
        "I provide advanced React services, leveraging cutting-edge techniques in component-based architecture, state management with Redux or Context API, efficient routing with React Router, optimized HTTP requests with Axios or Fetch, and custom hook development to elevate the performance, scalability, and user experience of your web applications.",
    },
    {
        id: 3,
        image: Image3,
        title: "Nodejs",
        description:
        "I deliver top-tier Node.js services, harnessing the power of asynchronous JavaScript, Express.js for robust server-side architecture, database integration with MongoDB or SQL databases, RESTful API development, WebSocket implementation for real-time communication, and scalable deployment solutions to propel your applications to new heights of performance and reliability.",
    },

];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services