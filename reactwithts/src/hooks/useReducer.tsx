import { use, useReducer } from "react";

const initialScore = [
    {
        id: 1,
        name: "John",
        score: 0
    },
    {
        id: 2,
        name: "Doe",
        score: 0
    }
]

const scoreReducer = (state: typeof initialScore, action: { type: string; id: number }) => {
    switch (action.type) {
        case 'INCREMENT':
            return state.map((player) => player.id === action.id ? { ...player, score: player.score + 1 } : player);
        default:
            return state;
    }
}

function MyReducerComponent() {
    const [players, dispatch] = useReducer(scoreReducer, initialScore);
     return (
        <>
            {players.map((player) => (<div key={player.id}>
                <label>
                    <button onClick={() => dispatch({type: "INCREMENT", id: player.id})}>+</button>
                </label>
                <span>{player.name} : {player.score}</span>
            </div>))}
        </>
    );
}

export default MyReducerComponent;