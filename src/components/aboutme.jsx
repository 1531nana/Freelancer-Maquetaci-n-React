function AboutMe() {
  return (
    <section className="AboutComponent">
      <h2 className="titleAbout">ABOUT</h2>
      <div className="starComponent">
        <hr className="rayita"/>
            <p className="fa-solid fa-star"></p>
        <hr className="rayita"/>
      </div>
      <section className="boxAbout">
        {/* <section className="sectionImg">
                        <img src="" className="logoAbout" alt="starLine" />
                     </section> */}
        <p className="textOne">
          Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional LESS stylesheets for easy
          customization.
        </p>
        <p className="textTwo">
          Whether you're a student looking to showcase your work, a professional
          looking to attract clients, or a graphic artist looking to share your
          projects, this template is the perfect starting point!
        </p> 
      </section>
      <button type="submit" className="AboutBtn">
        <i class="fa-solid fa-download"></i> Download Theme
    </button>
    </section>
  );
}

export { AboutMe };
