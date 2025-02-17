import styles from '@/styles/global.module.scss'

const ClassicButton = ({children}) => {

    return (
        <button className={styles.starcode_start}>{children}</button>
    )

}

export default ClassicButton;