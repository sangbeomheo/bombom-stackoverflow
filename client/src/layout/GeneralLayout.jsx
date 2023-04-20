import { useLocation } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import styles from './GeneralLayout.module.scss'

export default function GeneralLayout({ children }) {
  const { pathname } = useLocation()

  if (pathname === '/login' || pathname === '/signup') {
    return (
      <>
        <Header />
        <div className={styles.signContainer}>{children}</div>
      </>
    )
  }

  if (pathname === '/ask') {
    return (
      <>
        <Header />
        <div className={styles.askContainer}>{children}</div>
        <Footer />
      </>
    )
  }

  if (pathname === '/mypage') {
    return (
      <>
        <Header />
        <div className={styles.userContainer}>
          <Nav />
          {children}
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Nav />
        <div className={styles.content}>
          {children}
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  )
}

function Aside() {
  return <aside className={styles.aside}>aside</aside>
}

function Footer() {
  return (
    <footer className={styles.footerOuter}>
      <div className={styles.footerInner}>footer</div>
    </footer>
  )
}