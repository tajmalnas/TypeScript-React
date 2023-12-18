interface childProps {
    color: string;
}

const Child = ({color}:childProps) => {
  return (
    <div>{color}</div>
  )
}

export default Child