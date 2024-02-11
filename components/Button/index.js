import styles from './Button.module.css'
import react, { forwardRef, useImperativeHandle }  from 'react';


export default function Botton({
    changeSortingString, name,value

}){

    function handleClick(event) {
        changeSortingString(event.target.name); // pass any argument to the callback
      }
    
    return (
        <>
            <button className={styles['sorting-button']} name={value} onClick={handleClick}>{name}</button>
        </>
    );

}
