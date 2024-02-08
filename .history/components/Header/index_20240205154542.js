import styles from './Header.module.css'
import layout from '@/styles/Layout.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <header className={layout['row']}>
                <div className={`${layout['col-lg-4']} ${layout['col-md-4']} ${layout['col-sm-4']}`}>
                    <Image 
                    src={./images/bcit_logo.png}
                    width={80}
                     height={80} />
                </div>

            </header>
        </>
    )
}