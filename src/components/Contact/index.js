import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState , useEffect, useRef} from 'react'
import {Loader} from 'react-loaders'
import emailjs from '@emailjs/browser'
import { Marker, TileLayer, MapContainer, Popup } from 'react-leaflet'


const Contact = () => {

    const [letterClass, setLetterClass] = useState ('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
           .sendForm (
            'gmail',
            'template_0uf86vm',
            refForm.current,
            'user_z-UCoQuAvspoM8NPC'
           )
           .then(
            () => {
                alert('Message succesfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
           )
    }

 return (
    <>
      <div className="container contact-page">
        <div className="text-zone text-contact">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
            I am interested in being hired by a company to be able to learn.However, if you have other request or question, don't hesitate to contact me using bellow form either.
            Check out my GitHub account to see my completed projects.
            </p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder='Name' required />
                        </li>
                        <li className="half">
                            <input type="email" 
                            name="email" 
                            placeholder='Email'
                             required />
                        </li>
                        <li>
                            <input type="text" 
                            name="subject"  
                            placeholder='Subject'
                            required/>
                        </li>
                        <li>
                            <textarea name="message" 
                             cols="21" rows="5"
                             placeholder='Message'
                             required>
                            </textarea>
                        </li>
                        <li>
                            <input type="submit" 
                            value="Send" 
                            className='flat-button'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='info-map'>
            JF Design (Juan Ferron)
            <br />
            Talavera de la Reina (Toledo) Spain
            <br />
            <span>proyectosferron@gmail.com</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[39.9605400,-4.8331900]} 
            zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              <Marker position={[-4.8331900, 39.9605400]}>
                <Popup>JF Design are near</Popup>

              </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    
    
    </>
 )
}


export default Contact