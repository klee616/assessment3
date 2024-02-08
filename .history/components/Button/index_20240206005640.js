import styles from './Button.module.css'

export default function Button(
    displayName='Button'
){
    return (
        <>
        <button>${displayName}</button>
        </>
    )
}