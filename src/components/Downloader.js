import {useEffect, useState} from "react";
import {useFirstRender} from "./useFirstRender";

export default function Downloader({url = "http://echo.samuelelonghin.it"}) {
    const [rawSource, setRawSource] = useState('')
    const [source, setSource] = useState(url)
    const [content, setContent] = useState('')

    // Si esegue solo all'inizio
    useFirstRender(() => {
        console.log("Effect - inizio")
        setContent("Valore di inizio")
    })

    // Si esegue al cambiamento di source
    useEffect(() => {
        console.log("Effect - source")
        fetch(source)
            .then(t => t.text())
            .then(v => setContent(v))
            .catch(e => {
                console.error(e)
                setContent("C'è stato un problema nel download")
            })
    }, [source])

    const handleChange = event => {
        setRawSource(event.target.value)
        console.log(rawSource)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSource(rawSource)
        setRawSource('')
        alert(source)
    }

    return <>
        <h2>Pagina di download di un sito</h2>
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={handleChange}/>
            <input type={'submit'}/>
        </form>
        <br/>
        {content}
    </>
}