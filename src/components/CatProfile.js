import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FadeInLeftDiv, FadeInRightDiv, FadeInUpDiv } from './Cats'



function CatProfile() {
  const [cat, setCat] = React.useState(null)
  const { catId } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://api.thecatapi.com/v1/breeds/${catId}`)
        setCat(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    
  }, [catId])


  return (
    <section className="section">
      <div>
        {cat &&
                <><div key={cat.id} className="columns">
                  <div className="column" id="column">
                    <FadeInLeftDiv>
                      <div className="card-image" id="catprofileimage">
                        <figure className="image is-4by4" id="catprofileimage">
                          <img id="catprofileimage" src={cat.image}></img>
                        </figure>
                      </div>
                    </FadeInLeftDiv>
                  </div>
                </div>
                <div className="column" id="catprofileright">
                  <FadeInRightDiv>
                    <h2 className="catattributes" id="catheader"><strong>{cat.name}</strong></h2>
                    <p className="catattributes">{cat.description}</p>
                    <h4 className="catattributes"><strong>Origin:</strong></h4>
                    <p className="catattributes">{cat.origin}</p>
                    <h4 className="catattributes"><strong>Life Span:</strong></h4>
                    <p className="catattributes">{cat.life_span} Years</p>
                    <h4 className="catattributes"><strong>Temperament:</strong></h4>
                    <p className="catattributes">{cat.temperament}</p>
                  </FadeInRightDiv>
                </div>
                <section className="section" id="profilecontent">
                  <FadeInUpDiv>
                    <div className="card">
                      <p>Bottom Table</p>
                    </div>
                  </FadeInUpDiv>
                </section></>
        }
      </div>
    </section>
  )
}

export default CatProfile