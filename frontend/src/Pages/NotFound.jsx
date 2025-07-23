import React from 'react'
import { Link } from 'react-scroll';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <>
      <Section className="notFound" >
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>LOOKS LIKE YOU'RE THE LOST</h1>
          <p>We can't seem to find you the page you are looking for</p>
          <Link to={'/'}>
           Back to Home{" "} 
           <span>
            <HiOutlineArrowNarrowRight/>
            </span>
           </Link>
        </div>

      </Section>
    </>
  )
}

export default NotFound
