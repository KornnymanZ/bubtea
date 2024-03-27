import '../App.css'
import { useState } from 'react'
import Background from '../Background/Background'
import Homebanner from '../Homebanner/Homebanner'
import Productcard from '../Productcard/Productcard'
function HomePage() {
  const [count, setCount] = useState(0)
const banner_name = 'Lexus'
return (
    <div className="bgimg">
    
        {/* <Background  /> */}
        <Homebanner />
        <Productcard />
   

</div>
    )
}

export default HomePage

