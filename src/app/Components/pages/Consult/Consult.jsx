import ClassicButton from "../../atoms/classicButton/classicButton"
import './Consult.scss'
import Link from "next/link"
const  Consult = () => {

    return(
        <section className="consult">

            <div className="consult_title">
                  <h2>Qərar verə bilmirsiz ?</h2>
                  <p>Menecerlə əlaqə saxlayın və ətraflı məsləhət alın</p>
            </div>
            
            <Link href={'https://wa.me/994508322244'}>
            <ClassicButton> Əlaqə saxla  </ClassicButton>
            </Link>
       

            
        </section>
    )
}

export default Consult;

