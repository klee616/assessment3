import styles from './Footer.modules.css'
import layout from '@/styles/Layout.module.css'

export default function Footer(){
    return (
        <>
        <footer className={`${layout['row']}`}>
<div className={`${layout['col-lg-12']} ${layout['col-md-12']} ${layout['col-sm-12']}`}>
    &copy; Kam Shing Lee, A01329056
</div>
        </footer>
        </>
    )
}