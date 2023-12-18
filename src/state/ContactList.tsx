import { useState } from "react"

const ContactList:React.FC = () => {
    const [name,setName] = useState<string>('');

    const [contact,setContact] = useState<string[]>([]);

    const AddToContact = () => {
        setContact([...contact,name])
        console.log(name)
    }
  return (
    <div>
        <h1>
            Contact List
        </h1>
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Search"/>
            <button onClick={AddToContact}>
                Add Contact
            </button>
        </div>
        <div>
            <ul>
                {
                    contact.map((c:string,_index:number)=>{
                        return <li key={_index}>{c}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default ContactList