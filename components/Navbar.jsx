import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from "next/link"
const Navbar = () => {
    const quantity=useSelector((state)=>state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                   <Image src="/img/telephone.png" alt="telephone" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href='/' passHref>
                    <li className={styles.listItem}>Home</li>
                    </Link>
                    
                    <li className={styles.listItem}>Our Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src='/img/logo.png' alt='logo'  height='100px' width='200px'/>
                    <li className={styles.listItem}>Reviews</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src='/img/cart.png' alt='cart' width='30px' height='30px'/>
                       <div className={styles.counter}>{quantity}</div>
                    </div>
               </div>
            </Link>
        </div>
    )
}

export default Navbar
