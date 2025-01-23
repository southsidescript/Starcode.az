import styles from "@/styles/global.module.scss";
import Bot from "@/app/Components/Bot/Bot";

const  Main = () => {

    const sentence = ['S','T','A','R','C',<span><img className={styles.starcode_heading_design} src="./react.png" alt="" /></span>,'D','E'];

    return (
        <div className={styles.starcode_main}>

            <div>
                <h1 className={styles.starcode_heading}>
                    {sentence.map((w, s) => <span key={s}>{w}</span>)}
                </h1>
            </div>

            <div className={styles.starcode_title}>
                Texnologiyalar dünyasını kəşf et — gələcəyini təmin et
            </div>


            <button className={styles.starcode_start}>Ilk addimini et</button>

            <Bot/>
        </div>
    )
}

export default Main;