function Football(){
    
    return (
        <Goal isGoal={true}/>
    )
}

function Goal(props:any) {
    return props.isGoal ? <HitGoal /> : <Missed />
    
}

function Missed(){
    return <h1>Missed!</h1>
}

function HitGoal(){
    return <h1>Hit goal!</h1>
}

export default Football;