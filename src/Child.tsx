interface childProps {
    color: string;
}

// const Child = ({color}:childProps) => {
//   return (
//     <div>{color}</div>
//   )
// }

const Child:React.FC<childProps> = ({color})=> {  //defining function component in  typescript as React.FC<props>
    return (
        <div>{color}</div>
    )
}

export default Child