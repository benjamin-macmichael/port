import { useEffect, useState } from 'react'
import {
  faReact,
  faGitAlt,
  faLinux,
  faNodeJs,
  faPython,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a highly motivated Information Systems student at Brigham Young
            University, eager to apply my skills and drive for excellence to
            challenging and diverse projects in an internship role.
          </p>
          <p>
            I am determined to achieve success through relentless effort and
            perseverance, and I eagerly seek opportunities to learn from
            experienced professionals and mentors to expand my skillset.
          </p>
          <p>
            Outside of my academic pursuits, I enjoy spending time with my
            family and friends, maintaining a healthy lifestyle through regular
            workouts, and watching the popular show Survivor. Additionally, I
            continuously seek to broaden my software development expertise by
            exploring new technologies and languages through online platforms.
          </p>
          <p>
            I possess strong interpersonal and communication skills alongside a
            robust technical skill set. My experience includes proficiency in:
            <br />
            <ul>
              <li>Full-stack development with JavaScript/Node.js/Express</li>
              <li>
                React.js for building dynamic and interactive user interfaces
              </li>
              <li>Web development using Python/Django</li>
              <li>ASP.NET Core MVC with C#</li>
              <li>Experience in setting up and managing ML pipelines</li>
              <li>Database management with MySQL and PostgreSQL</li>
              <li>
                Familiarity with cloud services such as AWS EC2, RDS, and EB
              </li>
            </ul>
            <br />
            These competencies enable me to effectively collaborate with teams
            and deliver high-quality solutions across various domains of
            software engineering. I am excited about the opportunity to
            contribute to innovative projects and make a meaningful impact in an
            internship role.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faMicrosoft} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
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
