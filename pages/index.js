import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/image/spotify_logo.svg'
import styles from '../styles/Home.module.css'
import jsonData from '../public/playlist.json'

export default function Home() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < Object.keys(jsonData).length; i++) {
        result.push(
          <div className={styles.Line} key={i}>
            <h1 className={styles.LineTitle}>{Object.keys(jsonData)[i]}</h1>
            <div className={styles.LineList}>
              {jsonData[Object.keys(jsonData)[i]].map((data, index) => (
                <div className={styles.LinePlayList} key={index}>
                  <div className={styles.CoverImg}>
                    <img src={data['ImageUrl']} width="240" height="240"></img>
                    <div className={styles.PlayIcon}>
                      <i class="bi bi-play-fill" style={{color: '#000', fontSize: '30px', padding: '7px 7px 7px 12.5px'}}></i>
                    </div>
                  </div>
                  <div className={styles.PlayListDescSection}>
                    <h4>{data['title']}</h4>
                    <p className={styles.PlayListDesc}>{data['Description']}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
    }
    return result;
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <Head>
          <title>Spotify</title>
          <meta name="description" content="spotify clone" />

          <link rel="icon" href="../public/favicon.ico"></link>
        </Head>
        <div className={styles.sidebar}>
          <div className={styles.Logo}>
            <Image src={logo} alt="logo" />
          </div>
          <ul>
            <li className={`${styles.active} ${styles.MenuList}`}><i class="bi bi-house-door-fill" style={{paddingRight: '10px'}}></i>Home</li>
            <li className={`${styles.disabled} ${styles.MenuList}`}><i class="bi bi-search" style={{paddingRight: '10px'}}></i>Search</li>
            <li className={`${styles.disabled} ${styles.MenuList}`}><i class="bi bi-bookshelf" style={{paddingRight: '10px'}}></i>Library</li>
          </ul>
          <div className={styles.PlayLists}>
            <h4>PLAYLISTS</h4>
            <ul>
              <li className={styles.CreatePlaylist}><i class="bi bi-plus-square" style={{paddingRight: '10px'}}></i>Create a playlist</li>
              <li className={styles.playlist}>2022.06.15</li>
              <li className={styles.playlist}>2022.06.14</li>
              <li className={styles.playlist}>2022.06.13</li>
              <li className={styles.playlist}>2022.06.12</li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          <ul style={{marginBottom: '200px'}}>
            {rendering()}
          </ul>
        </div>
      </div>
      <div className={styles.BottomPlayer}>
        <div className={styles.NowPlay}>
          <img src='https://image.bugsm.co.kr/album/images/500/176713/17671399.jpg' style={{width: '72px', height: '72px'}}></img>
          <div className={styles.NowPlayTitle}>
            <span className={styles.MusicTitle}>That's Hilarious</span>
            <span className={styles.MusicArtist}>Charlie Puth</span>
          </div>
          <div className={styles.MusicIcons}>
            <i class="bi bi-heart"></i>
            <i class="bi bi-pip" style={{marginLeft: '10px'}}></i>
          </div>
        </div>
        <div className={styles.PlayBtn}>
          <div className={styles.playerBtn}>
            <i class="bi bi-skip-start-fill"></i>
            <i class="bi bi-play-circle" style={{padding: '0px 15px'}}></i>
            <i class="bi bi-skip-end-fill"></i>
          </div>
          <div className={styles.player}>
            <p>00:00</p>
            <div className={styles.ProgressBar}></div>
            <p>03:18</p>
          </div>
        </div>
      </div>
    </div>
  )
}
