import styles from './Product.module.css';
import Image from 'next/image';

export default function Product({
    code='test',
    img='/books/c-how-to-program.png',
    bookName = 'BookName',
    key
}) {

    return (<>
        <div  key={index} className={styles['book-containera']}>
            <div className={styles['book-selection']}>
                <Image src={img} width={200} height={300} />
                <p className={styles['course-name']}>{code}</p>
                <p className={styles['book-name']}>{bookName}</p>
            </div>
        </div>
    </>
    )
}