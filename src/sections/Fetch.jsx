import { useEffect, useState } from "react";

export function Fetch() {

    const[data, setData] = useState([])
    
 
    const apiGet = (onClick) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
 } 
    
    
    useEffect(() => {
        apiGet();
    }, []);


    return (

        <div>
            My API <br />

            <button onClick={apiGet}>Fetch API</button>
            <br />
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div>
            <ul>
                {data.map((item) => (
                <li key={item.id}>{item.userId}, {item.title}</li>
                ))}
            </ul>
        </div>
        </div>
    );
}
