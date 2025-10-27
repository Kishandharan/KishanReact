import { useState } from "react";

function App(){
    let [activeTab, setActiveTab] = useState("home");
    return (
        <>
            <div className="bg-black h-20 flex-row fixed w-full">
                <div className="bg-black w-24 text-center text-white mt-5 mr-1 absolute h-10 text-bold font-bold text-2xl ml-5 hover:bg-gray-500 p-1" onClick={ () => setActiveTab("home") }>Home</div>
                <div className="bg-black w-24 text-center text-white mt-5 mr-2 absolute h-10 text-bold font-bold text-2xl ml-5 hover:bg-gray-500 p-1" onClick={ () => setActiveTab("about") }>About</div>
                <div className="bg-black w-24 text-center text-white mt-5 mr-   3 absolute h-10 text-bold font-bold text-2xl ml-5 hover:bg-gray-500 p-1" onClick={ () => setActiveTab("contact") }>Contact</div>
            </div>
        </>
    );
}

export default App
