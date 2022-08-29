import classes from './Images.module.css'
import SimpleImageSlider from "react-simple-image-slider";

function Image(props){
  const images = [
    { url: props.img },
    { url: props.img },
  ];
    return(
        <div className={classes.scrollableimg}>
        <SimpleImageSlider
          width={350}
          height={350}
          images={images}
          showBullets={true}
          showNavs={true}
          
        />
      </div>
    )
}
export default Image