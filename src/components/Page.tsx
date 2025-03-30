import "../App.css"

interface PageProp{
    children: React.ReactNode
}

function Page({children}: PageProp) {

  return (
    <div className={"page"}>
        {children}
    </div>
  )
}

export default Page