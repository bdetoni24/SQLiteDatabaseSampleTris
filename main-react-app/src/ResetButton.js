import './App.css';

export default function ResetButton(props){

    function newReset(){
        props.newReset()
    }

    
    return(
        <button id="resetButton" >reset</button>
    );
}