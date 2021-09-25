import { useSession, signIn, signOut } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import Button from './Button'
import styles from '../styles/Header.module.css'

export default function Header() {
    const [session, loading] = useSession()
    const router = useRouter()
    return (
        <header id={styles.header}>
            <div id={styles.logo}>
                <img src="/planwisely.svg" />
                <h1>planwisely</h1>
            </div>
            {!session && <p id={styles.loginAlert}>Change anything. <Button className={styles.signInButton} onClick={() => signIn('google')}>Sign in</Button> to save</p>}
            <div>
                <Button><i aria-hidden className={styles.headerIcon + " fas fa-pen"} /></Button>
                <Button onClick={() => router.push('/settings', undefined, { shallow: true })}><i aria-hidden className={styles.headerIcon + " fas fa-cog"} /></Button>
                <Button onClick={() => session ? signOut('google') : signIn('google')}><i aria-hidden className={styles.headerIcon + session ? " fas fa-sign-in-alt" : " fab fa-google"} /></Button>
            </div>
        </header>
    )
}