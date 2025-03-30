import "../App.css"

interface CalloutProp{
    children: React.ReactNode
}

function Callout({children}: CalloutProp) {
  return (
    <h5 className={"callout"}>
        {children}
    </h5>
  )
}

export default Callout