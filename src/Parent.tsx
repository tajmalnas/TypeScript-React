import Child from "./Child"

const Parent = () => {
    const color = "blue"
    const click = () => {
        console.log("Clicked")
    }
  return (
    <div>
        <Child onClick={click} color={color} >
            <div>
                hi there 
            </div>
        </Child>
    </div>
  )
}

export default Parent