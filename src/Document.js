import { useState } from "react";

export default function Document(props) {
    let title = props.title;
    let content = props.content;
    const [ disable, setDisable] = useState(true);
    
    const handleScroll = e => {
        const atBottom = Math.ceil(e.target.scrollTop + e.target.clientHeight) >= e.target.scrollHeight;

        if (atBottom) {
            setDisable(false);
        }
    };
    return (
        <>
        <div className="content" title={title} onScroll={handleScroll}
            style={
                {
                    overflowY: "scroll",
                    textOverflow: "clip",
                    height: "400px"
                }
            }
        >{content}</div>
        <button disabled={disable ? true : false}
                    >I Agree</button>
        </>
    );
}