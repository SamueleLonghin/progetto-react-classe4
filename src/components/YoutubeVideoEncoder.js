export default function YoutubeVideoEncoder({id = "-1wcilQ58hI"}) {
    return <>
        <h2>Video YT</h2>
        <iframe width="1003" height="564" src={'https://www.youtube.com/embed/' + id + "?autoplay=1"}
                title="Starship Flight Test" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;autoplay"
                allowFullScreen></iframe>
    </>
}