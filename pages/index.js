import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/image/spotify_logo.svg'
import styles from '../styles/Home.module.css'
import SearchStyles from '../styles/SearchStyle.module.css'
import PlayListData from '../public/json/playlist.json'
import RealTimeTop5 from '../public/json/RealTimeTop5.json'
import { useState } from 'react'

export default function Home() {
  const [BtnActive, SetMenuClick] = useState("Home");
  const [isLoading, SetLoading] = useState(true)

  const MenuClick = (isActive) => {
    SetMenuClick(isActive)
  }

  const rendering = () => {
    const result = [];
    for (let i = 0; i < Object.keys(PlayListData).length; i++) {
        result.push(
          <div className={styles.Line} key={i}>
            <h1 className={styles.LineTitle}>{Object.keys(PlayListData)[i]}</h1>
            <div className={styles.LineList}>
              {PlayListData[Object.keys(PlayListData)[i]].map((data, index) => (
                <div className={styles.LinePlayList} key={index}>
                  <div className={styles.CoverImg}>
                    <img src={data['ImageUrl']} width={'100%'} height={'100%'} alt="cover_img"></img>
                    <div className={styles.PlayIcon}>
                      <i className="bi bi-play-fill" style={{color: '#000', fontSize: '30px', padding: '7px 7px 7px 12.5px'}}></i>
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

  const SearchList_rendering = () => {
    const result = [];
    RealTimeTop5.map((data, index) => (
      result.push(
        <div className={SearchStyles.SearchList} key={index}>
          <div className={SearchStyles.SongMain}>
            <div className={SearchStyles.cover_img}>
              <img src={data['AlbumCover']} width={60} height={60}></img>
            </div>
            <div className={SearchStyles.SongInfo}>
              <span className={SearchStyles.SongTitle}>
                {data['Title']}
              </span>
              <span className={SearchStyles.SongArtist}>
                {data['Artist']}
              </span>
            </div>
          </div>
          <div className={SearchStyles.SongIcon}>
            <i className="bi bi-heart"></i>
            <i className="bi bi-pip" style={{marginLeft: '10px'}}></i>
          </div>
        </div>
      )
    ))
    return result;
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <Head>
          <title>Spotify</title>
          <meta name="description" content="spotify clone" />
        </Head>
        <div className={styles.sidebar}>
          <div className={styles.Logo}>
            <Image src={logo} alt="logo" />
          </div>
          <ul>
            <li className={`${BtnActive == "Home" ? styles.active : styles.disabled} ${styles.MenuList}`} onClick={() => MenuClick("Home")}><i className="bi bi-house-door-fill" style={{paddingRight: '10px'}}></i>Home</li>
            <li className={`${BtnActive == "Search" ? styles.active : styles.disabled} ${styles.MenuList}`} onClick={() => MenuClick("Search")}><i className="bi bi-search" style={{paddingRight: '10px'}}></i>Search</li>
            <li className={`${BtnActive == "Library" ? styles.active : styles.disabled} ${styles.MenuList}`} onClick={() => MenuClick("Library")}><i className="bi bi-bookshelf" style={{paddingRight: '10px'}}></i>Library</li>
          </ul>
          <div className={styles.PlayLists}>
            <h4>PLAYLISTS</h4>
            <ul>
              <li className={styles.CreatePlaylist}><i className="bi bi-plus-square" style={{paddingRight: '10px'}}></i>Create a playlist</li>
              <li className={styles.playlist}>2022.06.15</li>
              <li className={styles.playlist}>2022.06.14</li>
              <li className={styles.playlist}>2022.06.13</li>
              <li className={styles.playlist}>2022.06.12</li>
            </ul>
          </div>
        </div>
        <div className={styles.container}>
          {
            BtnActive === "Home" ? 
              <ul style={{marginBottom: '200px'}}>
                {rendering()}
              </ul>
             : ( BtnActive === "Search" ?
              <div>
                <div className={SearchStyles.SearchSection}>
                  <input type='text' className={SearchStyles.SearchInput} placeholder="Search Title, Artist"></input>
                </div>
                <ul style={{margin: "50px auto 150px auto"}}>
                  <div className={SearchStyles.List}>
                    {SearchList_rendering()}
                  </div>
                </ul>
              </div>
              : ( BtnActive === "Library" ?
              <div style={{color: "#fff", textAlign: "center"}}>
                <h1>Library</h1>
              </div>
              : ""
              )
            )
          }
        </div>
      </div>
      <div className={styles.BottomPlayer}>
        <div className={styles.NowPlay}>
          <img src='https://image.bugsm.co.kr/album/images/500/176713/17671399.jpg' width={72} height={72} alt="cover_img"></img>
          <div className={styles.NowPlayTitle}>
            <span className={styles.MusicTitle}>That&apos;s Hilarious</span>
            <span className={styles.MusicArtist}>Charlie Puth</span>
          </div>
          <div className={styles.MusicIcons}>
            <i className="bi bi-heart"></i>
            <i className="bi bi-pip" style={{marginLeft: '10px'}}></i>
          </div>
        </div>
        <div className={styles.PlayBtn}>
          <div className={styles.playerBtn}>
            <i className="bi bi-skip-start-fill"></i>
            <i className="bi bi-play-circle" style={{padding: '0px 15px'}}></i>
            <i className="bi bi-skip-end-fill"></i>
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
