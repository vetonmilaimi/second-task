import { useState } from 'react';

import classes from './Toggle.module.css';

const Toggle = () => {
    const [toggle, setToggle] = useState(false);


    const toggleHandler = () => {
        setToggle(!toggle);
    }



    const icon = toggle ? 'fas fa-sort-up' : 'fas fa-sort-down';

    return (
        <div>
            <div className={classes.question} onClick={toggleHandler}>
                <p>Why park a domain name is Parkname?</p>
                <i className={icon}></i>
            </div>
            {toggle && <div className={classes.answer} onClick={toggleHandler}><p>Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve succes.</p></div>}
        </div>
    );
};

export default Toggle;