import React from "react";

interface childProps {
    color: string;
    onClick: () => void;     //function that takes no arguments and returns nothing
    children: React.ReactNode;  // Getting children
}

// const Child = ({color}:childProps) => {
//   return (
//     <div>{color}</div>
//   )
// }

const Child:React.FC<childProps> = ({color,onClick,children})=> {  //defining function component in  typescript as React.FC<props>
    return (
        <div>
            {color}
            <button onClick={onClick}>
                Click me
            </button>
            {children}
        </div>
    )
}

export default Child