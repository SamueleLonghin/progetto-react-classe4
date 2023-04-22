export default function Navigazione({setView}) {
    return <>
        <div>
            <button onClick={() => setView('classico')}>Classico</button>
            {/*<button onClick={() => setView('wizard')}>Wizard</button>*/}
            <button onClick={() => setView('video')}>Video</button>
        </div>
    </>
}