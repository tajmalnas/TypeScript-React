import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 24},
    { name: 'Michael', age: 18 },
    { name: 'John', age: 21}
]

const UserSearch :React.FC= () => {
    const [name,setName] = useState<string>('');
    const [result,setResult] = useState<{name:string,age:number} | undefined>(); //imp

    const search = () => {
        let checker:number = 0;
        for(let i=0;i<users.length;i++){
            if(users[i].name === name){
                setResult(users[i])
                checker = 1;
            }
        }
        if(checker === 0){
            setResult(undefined)
        }
    }

  return (
    <div>
        <h1>User Search</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Search"/>
        <button onClick={search}>Search</button>
        <div>
            <h3 draggable>User Details</h3>
            {
                result!==undefined? <div>
                    <p>Name: {result.name}</p>
                    <p>Age: {result.age}</p>
                </div> : <p>User not found</p>
            }
        </div>
    </div>
  )
}

export default UserSearch