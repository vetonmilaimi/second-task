import { Fragment, useState } from 'react';

import classes from './MoreToggle.module.css';

const MoreToggle = () => {
    const [mainToggle, setMainToggle] = useState(false);
    const [questionState, setQuestionState] = useState({
        firstQuestion: false,
        secondQuestion: false,
        thirdQuestion: false,
        fourthQuestion: false
    });

    const toggleHandler = () => {
        setMainToggle(!mainToggle);
        setQuestionState({
            secondQuestion: false,
            thirdQuestion: false,
            fourthQuestion: false,
            firstQuestion: false
        });
    }

    const firstQuestionToggleHandler = () => {
        setQuestionState({
            secondQuestion: false,
            thirdQuestion: false,
            fourthQuestion: false,
            firstQuestion: !questionState.firstQuestion
        });
    };
    const secondQuestionToggleHandler = () => {
        setQuestionState({
            firstQuestion: false,
            thirdQuestion: false,
            fourthQuestion: false,
            secondQuestion: !questionState.secondQuestion
        });
    };
    const thirdQuestionToggleHandler = () => {
        setQuestionState({
            firstQuestion: false,
            secondQuestion: false,
            fourthQuestion: false,
            thirdQuestion: !questionState.thirdQuestion
        });
    };

    const icon = mainToggle ? 'fas fa-sort-up' : 'fas fa-sort-down';
    const firstQuestionIcon = questionState.firstQuestion ? 'fa fa-sort-up' : 'fas fa-caret-right';
    const secondQuestionIcon = questionState.secondQuestion ? 'fa fa-sort-up' : 'fas fa-caret-right';
    const thirdQuestionIcon = questionState.thirdQuestion ? 'fa fa-sort-up' : 'fas fa-caret-right';

    const questions = mainToggle && (
        <Fragment>
            <div className={classes.questionsToggle} onClick={firstQuestionToggleHandler}>
                <p>How does Parkname seperate itself from other domain name parking companies? <i className={firstQuestionIcon}></i></p> <br />
                {questionState.firstQuestion && <p style={{ border: '1px solid #999', padding: '2px' }}>Your domains are a valuable online property. As in my investment, you want the most eficient, easy way to make sure your property.</p>}
            </div>
            <div className={classes.questionsToggle} onClick={secondQuestionToggleHandler}>
                <p>Is Parkname Parking actually free? <i className={secondQuestionIcon}></i></p> <br />
                {questionState.secondQuestion && <p style={{ border: '1px solid #999', padding: '2px' }}>Your domains are a valuable online property. As in my investment, you want the most eficient, easy way to make sure your property.</p>}
            </div>
            <div className={classes.questionsToggle} onClick={thirdQuestionToggleHandler}>
                <p>Is Parkname Parking actually free? <i className={thirdQuestionIcon}></i></p> <br />
                {questionState.thirdQuestion && <p style={{ border: '1px solid #999', padding: '2px' }}>Your domains are a valuable online property. As in my investment, you want the most eficient, easy way to make sure your property.</p>}
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            <div className={classes.toggles}>
                <div className={classes.mainToggle} onClick={toggleHandler}>
                    <div className={classes.right}>
                        <div className={classes.picture}>
                            <i className="far fa-user-circle"></i>
                        </div>
                        <div className={classes.title}>
                            <h1>About Us</h1>
                            <p>4 articles in this Topic</p>
                        </div>
                    </div>
                    <div className={classes.icon} >
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
            {questions}
        </Fragment>
    );
};

export default MoreToggle;