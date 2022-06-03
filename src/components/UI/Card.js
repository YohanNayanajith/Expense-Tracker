import './Card.css';
const Card = (props) =>{

    const classes = 'card '+props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

// props.children use karanne wrapper custom components hariyata use karanna

export default Card;