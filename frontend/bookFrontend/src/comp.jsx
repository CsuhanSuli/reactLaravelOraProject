const Comp = (props) =>
    {
        return(
            <article>
                <h1>{props.name}</h1><p>{props.authour}</p><p>{props.releaseYear}</p><p>{props.wordCount}</p>
            </article>
        )
    }
export default Comp