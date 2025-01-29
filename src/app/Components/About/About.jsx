import styles from "@/styles/global.module.scss";
import Waves from "@/app/Anim/block/Backgrounds/Waves/Waves";
const About = () => {
    return (

        <section className={styles.starcode_about}>
             

            <div className={styles.starcode_about_head}>

                <div className={styles.starcode_about_head_heading}> Proqramlaşdırma modulları</div>

                <div className={styles.starcode_about_box}>
                    <span style={{'--i': 1}}><img src="./icons/html.png" alt=""/>   </span>
                    <span style={{'--i': 2}}><img src="./icons/css.png" alt=""/>   </span>
                    <span style={{'--i': 3}}><img src="./icons/javascript.png" alt=""/>   </span>
                    <span style={{'--i': 4}}><img src="./icons/github.png" alt=""/>   </span>
                    <span style={{'--i': 5}}><img src="./react.png" alt=""/>   </span>
                    <span style={{'--i': 6}}><img src="./icons/sass.png" alt=""/>   </span>
                    <span style={{'--i': 7}}><img src="./icons/obsidian-icon.png" alt=""/>   </span>
                    <span style={{'--i': 8}}><img src="./icons/gpt.png" alt=""/>   </span>
                </div>

            </div>


            <diV className={styles.starcode_about_modules}>


                <div className={styles.starcode_about_modules_card}>
                    <h3>Pulsuz</h3>
                    <p className={styles.starcode_about_modules_card_about}> Tanışlıq üçün ilk sınaq dərsi</p>
                    <p className={styles.starcode_about_modules_card_price}> 0 ₼</p>
                    <button className={styles.starcode_about_modules_card_btn}> Başla</button>
                </div>

                <div id="popular" className={styles.starcode_about_modules_card}>
                    <h3>Beginner</h3>
                    <p className={styles.starcode_about_modules_card_about}> 12-16 yaşlı uşaqlar üçün.Təlim müddəti:12
                        ay.</p>
                    <p className={styles.starcode_about_modules_card_price}> 150 ₼</p>
                    <button className={styles.starcode_about_modules_card_btn}> Başla</button>
                </div>

                <div id="hot" className={styles.starcode_about_modules_card}>
                    <h3>Pro</h3>
                    <p className={styles.starcode_about_modules_card_about}> 17 - 35 yaşlı şəxslər üçün. Təlim müddəti
                        18 aydır.</p>
                    <p className={styles.starcode_about_modules_card_price}> 180 ₼ <sup>
                        <del>200 ₼</del>
                    </sup></p>
                    <button className={styles.starcode_about_modules_card_btn}> Başla</button>
                </div>

                <div className={styles.starcode_about_modules_card}>
                    <h3>Personal modul</h3>
                    <p className={styles.starcode_about_modules_card_about}>
                        Bütün yaşlar üçün fərdi təlim.
                        Dərslər 1-ə 1 rejimində keçirilir.
                        Təlimin müddəti: 12 aydır
                    </p>
                    <p className={styles.starcode_about_modules_card_price}> 600 ₼</p>
                    <button className={styles.starcode_about_modules_card_btn}> Başla</button>
                </div>
            </diV>


        </section>


    )
}

export default About;