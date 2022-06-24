import React from "react"
import Hero from "components/pages/about/Hero"
import TestimonialContent from "components/pages/about/Testimonials"
import Image from "next/image"
import myImage from "../../public/image.jpg"
import { Container } from "@chakra-ui/react"

const About = () => {
  return (
    <div>
      <Hero />
      {/*<img src={myImage.src} alt="" />*/}
      <Container>
        <Image
          width={400}
          height={300}
          layout="responsive"
          src="https://images.pexels.com/photos/11789773/pexels-photo-11789773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Container>
      <TestimonialContent />
    </div>
  )
}

export default About
