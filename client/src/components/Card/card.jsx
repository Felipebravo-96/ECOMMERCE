import React, { useState } from "react";
import s from "./card.module.scss"
import BookDetail from '../BookDetail/bookDetail';

// const Card = ({name}) => {
const Card = () => {

    // esto es para deplegar el detlle de la tarjeta 
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }


    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart(["hola me agregaron al estado cart"]);
    }

    console.log(cart)

    return (


        <div className={s.containerCard} >

            <img onClick={handleToggle} src="https://img.freepik.com/free-psd/book-cover-mockup_125540-572.jpg?w=2000" alt="book" width="216px" height="216px" />
            <div className={s.cart} >
                <div className={s.info}>
                    <h3>$ 25.00</h3>
                    {/* <h3>{name}</h3> */}
                    <h4 >the book volume 1</h4>
                </div>
                <figure onClick={handleClick} className={s.info2}>
                    <i class="fas fa-cart-plus fa-lg"></i>

                </figure>
            </div>


            {toggle && <BookDetail />}
          

        </div>


    )
}

export default Card;
