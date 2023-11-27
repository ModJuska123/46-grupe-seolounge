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
                <li key={item.id}>{item.id}, {item.userId}, {item.title}</li>
                ))}
            </ul>
        </div>
        </div>
    );
}
//Ref: https://www.google.com/search?sca_esv=585436030&rlz=1C1OKWM_enLT970LT970&sxsrf=AM9HkKn5p36OoHOBvD0ZvNk7R8hIyrUaQg:1701013767633&q=how+to+use+fetch+in+react&tbm=vid&source=lnms&sa=X&ved=2ahUKEwjLuoKLguKCAxVlSPEDHfcbBCQQ0pQJegQICxAB&biw=1280&bih=889&dpr=1#fpstate=ive&vld=cid:a1e4a7c2,vid:27f3B1qndW8,st:11