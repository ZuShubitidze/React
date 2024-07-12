import css from './Router.css'
import image from './AdultEren.jpg'

const MainPage = () => {
  return(
    <div id='MainPageHeader'>
      <h2>Eren Yeager</h2>
      <img src={image} alt="Eren" />
    </div>
  )
}

export default MainPage