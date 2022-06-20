import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { fadeInDown, fadeInUp, fadeInLeft, fadeInRight, fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const fadeDownAnimation = keyframes`${fadeInDown}`
export const fadeInAnimation = keyframes`${fadeIn}`
export const fadeInLeftAnimation = keyframes`${fadeInLeft}`
export const fadeInRightAnimation = keyframes`${fadeInRight}`
export const fadeInUpAnimation = keyframes`${fadeInUp}`

export const FadeInUpDiv = styled.div`
  animation: 2s ${fadeInUpAnimation}`

export const FadeDownDiv = styled.div`
  animation: 2s ${fadeDownAnimation}`

export const FadeInDiv = styled.div`
  animation: 2s ${fadeInAnimation}`

export const FadeInLeftDiv = styled.div`
  animation: 2s ${fadeInLeftAnimation}`

export const FadeInRightDiv = styled.div`
  animation: 2s ${fadeInRightAnimation}`


function Cats() {
  const [cats, setCats] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.thecatapi.com/v1/breeds') 
      setCats(res.data)
    }
    getData()
    
  }, [ ])
  

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }


  const filterCats = () => {
    if (searchValue) {
      return cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchValue.toLowerCase())
      })
    } else {
      return cats
    }
  }

  return (
    <section className="section">
      <FadeDownDiv>
        <div className="catTop">
          <h1 className="title" id="headercat" >CAT BREEDS</h1>
          <div>
            <input 
              className='searchcats'
              placeholder='SEARCH'
              onChange={handleSearch}
              id="sub-header"
            />
          </div>
        </div>
      </FadeDownDiv>
      {cats &&
        <h5 id="info">{filterCats().length} CATS FOUND</h5>}
      <div className="columns">
        {cats && filterCats().map(cat => {
          return <div className="column"key={cat.id} id="column">
            <Link to={`/cats/${cat.id}`}>
              <FadeInDiv>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by4">
                      <img src={cat.image}></img>
                    </figure>
                  </div>
                  <div className="media-content">
                    <h2 id="header">{cat.name.toUpperCase()}</h2>
                  </div>
                </div>
              </FadeInDiv>
            </Link>
          </div> 
        })}
      </div>
    </section>
  )
}

export default Cats