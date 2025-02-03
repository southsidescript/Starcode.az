import Image from "next/image";
const ServerImage = (props) => {

    return(
  <Image
    src={props.src}
    width={props.width}
    height={props.height}
    alt={props.alt}
  />
    )
}

export default ServerImage;