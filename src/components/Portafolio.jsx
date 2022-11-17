import cabin from '../assets/cabin.png'
import cake from '../assets/cake.png'
import circus from '../assets/circus.png'
import game from '../assets/game.png'
import safe from '../assets/safe.png'
import submarine from '../assets/submarine.png'

export const Portafolio = () => {
    return (
    <div className='portafolio'>
        <h1 className='portafolio_title'>PORTFOLIO</h1>
        {/* <div className='start'>
            <hr />
                <p className="fa-solid fa-star-portafolio"></p>
            <hr />
      </div> */}
      <div className='start3'>
      <hr className="rayita2"/>
      <p className="fa-solid fa-star start2"></p>
      <hr className="rayita2"/>
      </div>
        <div className='portafolio_img'>
            <img src={cabin} alt="" className='portafolio_img'/>
            <img src={cake} alt="" className='portafolio_img'/>
            <img src={circus} alt="" className='portafolio_img' />
            <img src={game} alt="" className='portafolio_img' />
            <img src={safe} alt="" className='portafolio_img'/>
            <img src={submarine} alt="" className='portafolio_img'/>
        </div>
    </div> )
}