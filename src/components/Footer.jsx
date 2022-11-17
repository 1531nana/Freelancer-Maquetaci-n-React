import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <section className="location">
            <h3> LOCATION </h3>
            <h6>3481 Melrose Place</h6>
            <h6>Beverly Hills, CA 90210</h6>
        </section>
        <section className="around">
            <h3> AROUND THE WEB </h3>
            <div className='icons'>
            <p className="fa-solid fa-star"></p>
            <p className="fa-solid fa-star"></p>
            <p className="fa-solid fa-star"></p>
            <p className="fa-solid fa-star"></p>
            <p className="fa-solid fa-star"></p>
            </div>
        </section>
        <section className="about">
            <h3> ABOUT FREENLACER </h3>
            <h6> Freelance is a free to use, open source </h6>
            <h6> Bootstrap theme created by Start </h6>
            <h6> Bootstrap </h6>
        </section>
    </div>
  )
}

export default Footer