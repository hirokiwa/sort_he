import React ,{useState, useEffect} from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
// import ccorrect_sound from '../../audio/current.mp3';

interface game_type{
    point:number
    setPoint:React.Dispatch<React.SetStateAction<number>>
}

const Game = (props:game_type):JSX.Element => {
    const [character_type, setCharacter_type] = useState<number>(999)
    // const [point, setPoint] = useState<number>(0)
    const navigate = useNavigate()
    const [time, setTime] = useState(30);

    useEffect(() => {

        const id = setInterval(() => {
                setTime(t => t - 1);
            }, 1000);
        return () => clearInterval(id);
      
    }, []);

    useEffect(()=>{
        if(time <= 0){
            navigate('/result',{state: {point: props.point}})
        }
    })
    // if(time <= 0){
    //     navigate('/result',{state: {point: point}})
    // }

    const make_question = ():void =>{
        const random:number = Math.floor( Math.random() * 2);
        setCharacter_type(random)
    }

    const correct = ():void =>{
        props.setPoint(props.point + 1)
        make_question()
    }
    
    const incorrect = ():void =>{
        props.setPoint(props.point - 1)
        make_question()
    }

    const hiragana = ():void =>{
        character_type === 0 ? correct() : incorrect()
    }
    
    const katakana = ():void =>{
        character_type === 1 ? correct() : incorrect()
    }

    // useEffect(make_question);

    // make_question()

    return (
    <div className="Game">
        <div>score {props.point}</div>
        <div>{character_type === 0 ? "へ" : "ヘ"}</div>
        <button onClick={hiragana}>ひらがな</button>
        <button onClick={katakana}>カタカナ</button>
        <div>{time}</div>
    </div>
    );
}

export default Game;
