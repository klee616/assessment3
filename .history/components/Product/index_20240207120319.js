import styles from './Product.module.css';

export default function Product({
    code='test',
    img='/books/c-how-to-program.png',
    bookName = 'BookName'
}) {

    return (<>
        <div className={styles['book-containera']}>
            <div className={styles['book-selection']}>
                <Image src="/books/c-how-to-program.png" width={200} height={300} />
                <p className={styles['course-name']}>Course</p>
                <p className={styles['book-name']}>{bookName}</p>
            </div>
        </div>
    </>
    )
}