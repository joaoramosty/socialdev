import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo-dark-theme.svg';

export function Header(){
    return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logo Ignite" />
    </header>)
}