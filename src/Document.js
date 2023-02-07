export default function Document(props) {
    let title = props.title;
    let content = props.content;
  
    const handleScroll = e => {
        const atBottom = Math.ceil(e.target.scrollTop + e.target.clientHeight) >= e.target.scrollHeight;
        
        if(atBottom){
            document.querySelector('button').removeAttribute('disabled')
        }
    };


    return (
        <section>
        <h1 className="title">{title}</h1>
        <div className="content" onScroll={handleScroll}
            style={
                {
                    overflowY: "scroll",
                    textOverflow: "clip",
                    height: "400px"
                }
            }
        >{content}</div>
        <button disabled
                    >I Agree</button>
        </section>
    );
}