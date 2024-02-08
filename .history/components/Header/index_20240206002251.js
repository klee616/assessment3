import styles from './Header.module.css'
import layout from '@/styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className={layout['row']}>
                <div className={`${layout['col-lg-4']} ${layout['col-md-4']} ${layout['col-sm-4']}`}>
                    <Image
                        src="/images/bcit_logo.png"
                        width={80}
                        height={80} />
                </div>
                <div className={`${layout['col-lg-8']} ${layout['col-md-8']} ${layout['col-sm-8']}`}>
                    <div className={styles['menu-container']}>
                        <ul className={styles['menu-list']}>
                            <li className={styles['menu-item']}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className={styles['menu-item']}>
                                <Link href='/'>Hours</Link>
                            </li>
                            <li className={styles['menu-item']}>
                                <Link href='/'>Merchandise</Link>
                            </li>
                        </ul>

                        <Link href='/'>
                                    <Image
                                        src="/images/shopping.png"
                                        width={80}
                                        height={80} />
                                </Link>
                    </div>
                </div>

            </header>
        </>
    )
}