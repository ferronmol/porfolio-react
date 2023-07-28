import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState , useEffect} from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders'



const About = () =>  {

    const [letterClass, setLetterClass] = useState ('text-animate')

    useEffect(() => {
        const timer = setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone text-about">
                <br />
                <h1>
                    <AnimatedLetters
                       letterClass={letterClass}
                       strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                       idx={15}
                       />
                </h1>
                <p>I'm student of 2º Web Development Technician.</p>
                <p>I'm searching work.I'm looking for a company that gives me an opportunity.</p>
                <p>I'm constantly working to improve my skills.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>

                </div>
            </div>
        
        </div>
        <Loader type="pacman" />
        </>
  )
}
 
export default About