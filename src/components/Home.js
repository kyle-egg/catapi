import { Link } from 'react-router-dom'
import { FadeInDiv } from './Cats'

function Home() {

  return (
    <section className="hero is-fullheight" id="home">
      <div className="hero-body" id="home-body">
        <FadeInDiv>
          <div className="ccontainer has-text-centered" id="home-title-container">
            <p className="title" id="header">
              SEARCH FOR YOUR FAVOURITE CAT BREEDS!
            </p>
          </div>
        </FadeInDiv>
        <div>
          <FadeInDiv>
            <Link to='/cats/'>
              <button className="button is-dark" id="shopping-button"
                onClick="/cats">
                <strong>START SEARCHING!</strong>
              </button>
            </Link>
          </FadeInDiv>
        </div>
      </div>
    </section>
  )
}
export default Home 