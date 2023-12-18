import Child from "./Child"

const Parent = () => {
    const color = "red"
  return (
    <div>
        <Child color={color} />
    </div>
  )
}

export default Parent