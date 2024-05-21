import FotoBanner from '../Img/banner.png';
import "./css/Banner.css"

export default function Banner() {
  return (
    <div className="banner-home">
      <img src={FotoBanner} className="img-fluid" alt="banner-home" width='100%'></img>
    </div>
  )
}