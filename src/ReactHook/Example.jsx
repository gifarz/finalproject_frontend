import React, {useState, useEffect} from 'react';

// export function Example(){
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`
//     })

//     return(
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 2)}>
//                 Click me!
//             </button>
//         </div>
//     )
// }

// function FriendStatus(props){
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//     }

//     useEffect(() => {
//         ChatAPI.subscribeTobeFr
//     })
// }

export function Example(props){
    const [nama, setNama] = useState("john");

    useEffect(() => {
        document.title = nama; // judul page yang terdapat di browser akan sama
    })

    function handleNamaChange(e){
        setNama(e.target.value);
    }

    return(
        <section>
            <input 
                value={nama}
                onChange={handleNamaChange}
            />
        </section>
    )
}
