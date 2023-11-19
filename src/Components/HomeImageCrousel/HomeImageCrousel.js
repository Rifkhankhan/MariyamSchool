import React, { useEffect } from 'react'
import styles from './HomeImageCrousel.module.css'
import   './HomeImageCrousel.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../Actions/MovieAction'
import slide1 from '../../Images/slide1.png'
import slide2 from '../../Images/slide2.png'
import slide3 from '../../Images/slide3.png'
import slide4 from '../../Images/slide4.png'
import slide5 from '../../Images/slide5.png'

function HomeImageCrousel({type}) {
	const dispatch = useDispatch()

  const items = useSelector(state => state.netflixAuth.items)
	
  // const movies = []
  const movies = [slide1,slide2,slide3,slide4,slide5]

	useEffect(()=> {
	  dispatch(getItems())
	},[dispatch])


  const settings = {
    infinite: true,
    dots: true ,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };


 
  return (<section className={styles.container}>
     <Slider {...settings}>
          {movies.map((item) => (
            <div key={movies.indexOf(item)} className={styles.sub_container}>
              {/* <div className='netflix-imageCarouselComponent-container-desc'>
                  <h1>{item.name}</h1>
                  <p>{item.desc}</p>
              </div> */}
              <img className={styles.image} src={item}  />
            </div>
          ))}
        </Slider>
  </section>);
  
}

export default HomeImageCrousel
