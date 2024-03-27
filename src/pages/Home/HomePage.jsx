
import { useState } from 'react'
import Homebanner from '../../Homebanner/Homebanner'
import Productcard from '../../Productcard/Productcard'
function HomePage() {
  const [count, setCount] = useState(0)
const banner_name = 'Lexus'
return (
    <div className="bgimg">
    <div className="bar"></div>
        {/* <Background  /> */}
        <Homebanner />
        {/* <Productcard /> */}
   

</div>
    )
}

export default HomePage

