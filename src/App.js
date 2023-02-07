import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
    const [data, setData] = useState("");
    let title = "Terms and Conditions";

    const handleFetchData = async () => {
        const response = await fetch(`https://jaspervdj.be/lorem-markdownum/markdown.txt`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.text();
        if (responseData) {
            setData(responseData);
        }
    }

    useEffect(() => {
        handleFetchData();
    }, []);

    return (
        <div className="App">
            <Document
                title={title}
                content={data}
            />         
        </div>
    );
}

export default App;
