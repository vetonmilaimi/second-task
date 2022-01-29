import Button from '../UI/Button';

import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <h1 className={classes.title}>{props.title}</h1>
            <h4 className={classes.price}>{`$${props.newPrice}/yr`}</h4>
            <p className={classes.paragraph}>Instead of {`$${props.oldPrice}/yr`}</p>
            <Button name="Buy Now" type="button" className={classes.btn} />
        </div>
    )
};

export default Card;