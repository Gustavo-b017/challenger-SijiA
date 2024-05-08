import FotoBanner from '../Img/banner.png';

export default function Banner() {
  return (
    <div className="banner-box">
        <img src={FotoBanner} class="img-fluid" alt="banner"></img>
    </div>
  )
}