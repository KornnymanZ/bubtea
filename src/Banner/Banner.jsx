import './Banner.css'

// export default function Banner() {
//     return (
//         <div className="hero-image">
//             <div className="hero-text">
//                 {/* <div className="logo"></div> */}
//                 <h1>Best Coffee</h1>
//                 <h1>in town</h1>
//                 {/* <button>Hire</button> */}
//             </div>
//         </div>
//     )
// }

export default function Banner() {
    return (
        <div>
            <a href='https://maps.app.goo.gl/j8AggCjoT37eaADx5'>
           <img className="logo" src="https://cdn.discordapp.com/attachments/757861072257548340/1194879550560149534/image.png?ex=65b1f54c&is=659f804c&hm=fc2381e46d3afab6cb4677897ef92c9c7e4588842969b3e181a3cffe48ca6a2e&"></img>
           </a>
           <a href='https://www.instagram.com/officialrickastley/'>
            <img className="logo2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"></img>
           </a>
            <div className="coffeeshop">
                <h1>← our location</h1>
            </div>
            <div className="igtext">
                <h1>← our instagram</h1>
            </div>
           
        </div>
    )
}