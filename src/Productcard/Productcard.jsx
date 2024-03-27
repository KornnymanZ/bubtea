import './Productcard.css'

export default function Productcard() {
    return (
        <div className="productcard">
            <article>
                <h2>Our top seller</h2>
                <img src="https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg" alt="macbook" />
                <p>An espresso made with the finest.<br />beans served hot at your table</p>
                <b>Currently on Promotion </b>
                
            </article>

            <article>
                <h2>Seasonal</h2>
                <img src="https://blog.wilton.com/wp-content/uploads/sites/2/2019/11/EasyChristmasSugarCookies_188693_01-480x270.jpg" alt="macbook" />
                <p><br />...........Christmas Cookies..........</p>
                <b><br />Available for a limited time<br />"1st Dec - 31st Dec"</b>
            </article>

            <article>
                <h2>Gift Cards</h2>
                <img src="https://thegreatcoffeeproject.com/cdn/shop/products/giftcards.jpg?v=1638565387" alt="macbook" />
                <p>....Available at every locations....</p>
                {/* <b><br />On promotion<br />31st Jan"</b> */}
            </article>

        
        </div>
    )
}