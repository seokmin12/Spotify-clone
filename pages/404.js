import styles from '../styles/PageNotFound.module.css'
import Image from 'next/image'
import logo from '../public/image/spotify_logo.svg'

export default function PageNotFound() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.NotFound}>
                    <Image src={logo} alt="logo"></Image>
                    <h1>|</h1>
                    <h1>404 Page Not Found</h1>
                </div>
                <div className={styles.GoHome}>
                    <a href="/" className={styles.HomeBtn}>Go Home</a>
                </div>
            </div>
        </div>
    )
}