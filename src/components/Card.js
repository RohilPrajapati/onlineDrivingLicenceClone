

const Card = ({props}) =>{
    // console.log(props);
    return (    
        <div className="card col-2 m-2 px-5 py-2 text-center">
            <img className="card_img mx-auto" src={props.name} alt={props.alt_text} />
            <div className="row align-item-center justify-content-center py-2">
                {props.text}
            </div>
        </div>
    );
}
export default Card