function Car(props:any)
{
    const {color} = props;
    const myStyle = {
        color: color,
        fontSize: "16px",
      };
    return(
        <h2 style={myStyle}>Hi, I am a {props.color} car</h2>
    )
}



export { Car }