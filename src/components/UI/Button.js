import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={classes.btn} type={props.type}>
            {props.name}
        </button>
    );
};

export default Button;