import { useState } from 'react';

function App(){
    let [searchQuery, setSearchQuery] = useState("");
    
    return (<>
        <input onChange={(e) => setSearchQuery(e.target.value)} />
        {["a","p","l","e"].some((char) => searchQuery.toLowerCase().includes(char.toLowerCase()) | searchQuery === "") ? <p>Apple</p> : null}
        {["b","a","n"].some((char) => searchQuery.toLowerCase().includes(char.toLowerCase()) | searchQuery === "") ? <p>Banana</p> : null}
        {["s","t","r","a","w","b","y"].some((char) => searchQuery.toLowerCase().includes(char.toLowerCase()) | searchQuery === "") ? <p>Strawberry</p> : null}
        {["w","a","t","e","r","l","o","n"].some((char) => searchQuery.toLowerCase().includes(char.toLowerCase()) | searchQuery === "") ? <p>Watermelon</p> : null}
    </>);    
}

export default App
