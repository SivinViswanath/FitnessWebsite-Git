import React from 'react'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import Header from '../../components/Header'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis accusantium
      aspernatur eos, cum laboriosam qui sed unde nemo voluptate aliquam commodi.
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story Image" />
        </div>
        <div className='about__section-content'>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium porro 
            iusto rem, sint totam voluptatum itaque voluptates harum commodi reiciendis, 
            qui, vero impedit quod fugiat omnis ut autem delectus iure!hugus hijsn jqujq
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum facere 
            quae, soluta modi saepe eveniet praesentium? Exercitationem quas ut iste, veritatis, 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptatibus, quaerat 
            earum suscipit quis eum molestiae.
          </p>
        </div> 
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className='about__section-content'>
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium porro 
            iusto rem, sint totam voluptatum itaque voluptates harum commodi reiciendis, 
            qui, vero impedit quod fugiat omnis ut autem delectus iure!hugus hijsn jqujq
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum facere 
            quae, soluta modi saepe eveniet praesentium? Exercitationem quas ut iste, veritatis, 
            dolores dicta temporibus necessitatibus cumque quibusdam eaque excepturi!
          </p>
        </div> 
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision Image" />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Mission Image" />
        </div>
        <div className='about__section-content'>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium porro 
            iusto rem, sint totam voluptatum itaque voluptates harum commodi reiciendis, 
            qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum facere 
            quae, soluta modi saepe 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptatibus, quaerat 
          </p>
        </div> 
      </div>
    </section>
    </>
  )
}

export default About
