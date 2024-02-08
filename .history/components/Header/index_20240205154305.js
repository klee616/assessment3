import styles from './Header.module.css'
import layout from '@/styles/Layout.module.css'

export default function Header(){
    return (
        <>
        <header className={layout['row']}>
            <div className={`${layout['col-lg-4']} ${layout['col-md-4']} ${layout['col-sm-4']}` }></div>
            
        </header>
        </>
    )
}