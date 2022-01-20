import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"
const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>BEST PIZZA IN MONTRÉAL</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit quaerat ipsa recusandae, obcaecati dolorum doloremque,
                 dicta sapiente alias qui consequatur voluptatem, cupiditate facere
                  error! Inventore delectus nostrum non quos repellat.
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza)=>{
                   return  <PizzaCard key={pizza._id} pizza={pizza}/>
                })}
                
                
            </div>
        </div>
    )
}

export default PizzaList
