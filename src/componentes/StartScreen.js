export default function StartScreen(props) {
    const { hidden, function1, function2 } = props;
    return (
        <main className={"startScreen" + hidden} >
            <img className="startImage" src="./assets/logo.png" alt="startImage" />
            <p className="startTitle" >ZapRecall</p>
            <button className="startButton" onClick={() => {
                function1(" hidden");
                function2("");
            }} >Iniciar Recall!</button>
        </main>
    )
}