import styles from './Product.module.css';
import Image from 'next/image';
import Author from '@/components/Author';
import { useState } from 'react';

export default function Product({
    code,
    img,
    bookName,
    edition,
    authors
}) {
    return (<>
        <div className={styles['book-containera']}>
            <div className={styles['book-selection']}>
                <Image src={`/books/${img}`} width={200} height={300} alt={bookName} className={styles['book-image']} />
                <p className={styles['course-name']}>{code} </p>
                <p className={styles['edition']}>Edition: {edition}</p>
                <p className={styles['book-name']}>{bookName}</p>
                {
                    authors && authors.map((value, index) =>{
                        return <>
                        <Author key={index} author={value} />
                        </>
                    })
                }
            </div>
        </div>
    </>
    )
}