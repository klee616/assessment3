import styles from './Author.module.css'

export default function Author(
    {
        author = '' }
) {
    console.log(`Line 7 : ${author}`);
    return (
        <>
            <p className={styles['author']}>{author}</p>
        </>
    )

}