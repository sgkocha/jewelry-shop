import React from 'react'
import './Home.css'

const Home = () => {
  const [moreProducts, setMoreProducts] = React.useState(false)

  const handleMoreProducts = ()=> {
    setMoreProducts((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <main>
      <section>
        <div className="jewerly-main">
          <h3 className="jewerly-main-title">Up to 20% off red gold jewelry</h3>
          <button>Details</button>
        </div>
      </section>
      <section>
        <div className="jewerly-partner">
          <h3 className="jewerly-partner-title">OUR MAIN PARTNER</h3>
          <div className="jewerly-partner-divider"><img src="images/divider.png" alt="divider" /></div>
          <div className="jewerly-partner-logo"><img src="images/partner.png" alt="partner" /></div>
        </div>
      </section>
      <section>
        <div className="jewerly-contract">
          <h3 className="jewerly-contract-title">SIGN A CONTRACT IN JUST 3 STEPS</h3>
          <div className="jewerly-contract-divider"><img src="images/divider.png" alt="divider" /></div>
          <div className="jewerly-contract-box d-f">
            <div className="jewerly-contract-item">
              <div className="contract-item-num">1</div>
              <div><img src="images/contract-task1.png" alt="task" /></div>
              <div className="contract-item-title">Leave your request</div>
            </div>
            <div className="jewerly-contract-item">
              <div className="contract-item-num">2</div>
              <div><img src="images/contract-task1.png" alt="task" /></div>
              <div className="contract-item-title">Send documents</div>
            </div>
            <div className="jewerly-contract-item">
              <div className="contract-item-num">3</div>
              <div><img src="images/contract-task1.png" alt="task" /></div>
              <div className="contract-item-title">Sign the contract</div>
            </div>
          </div>
          <button>Leave request</button>
        </div>
      </section>
      <section>
        <div className="jewerly-production">
          <h3 className="jewerly-production-title">Sanis production</h3>
          <div className="jewerly-production-divider"><img src="images/divider.png" alt="divider" /></div>
          <p className="jewerly-production-desc">
            jewelry factory "Sanis" was founded in 1992. Today, Sanis is a recognized giant
            in the field of jewelry design and quality of jewelry.
          </p>
          <div className="jewerly-production-media"><img src="images/jewerly-production.png" alt="jewerly-production" /></div>
        </div>
      </section>
      <section>
        <div className="jewelry-new">
          <div className="jewelry-new-title">New</div>
          <div className="jewelry-new-divider"><img src="images/divider.png" alt="divider" /></div>
          <div className="jewelry-new-box d-f">
            <div className="jewelry-new-item">
              <div className="new-item-tags d-f">
                <div className="new-item-tag">New</div>
                <div className="new-item-tag">Heath</div>
              </div>
              <div className="new-item-img"><img src="images/jewerly-new1.png" alt="jewerly-new1" /></div>
              <div className="new-item-title">White gold ring with diamonds</div>
              <div className="new-item-subtitle">Composition: white gold 585, diamonds</div>
            </div>
            <div className="jewelry-new-item">
              <div className="new-item-tags d-f">
                <div className="new-item-tag">New</div>
                <div className="new-item-tag">Heath</div>
              </div>
              <div className="new-item-img"><img src="images/jewerly-new2.png" alt="jewerly-new2" /></div>
              <div className="new-item-title">White gold ring with diamonds</div>
              <div className="new-item-subtitle">Composition: white gold 585, diamonds</div>
            </div>
            <div className="jewelry-new-item">
              <div className="new-item-tags d-f">
                <div className="new-item-tag">Heath</div>
              </div>
              <div className="new-item-img"><img src="images/jewerly-new3.png" alt="jewerly-new3" /></div>
              <div className="new-item-title">White gold ring with diamonds</div>
              <div className="new-item-subtitle">Composition: white gold 585, diamonds</div>
            </div>
            <div className="jewelry-new-item">
              <div className="new-item-tags d-f">
                <div className="new-item-tag">New</div>
                <div className="new-item-tag">Heath</div>
              </div>
              <div className="new-item-img"><img src="images/jewerly-new4.png" alt="jewerly-new4" /></div>
              <div className="new-item-title">White gold ring with diamonds</div>
              <div className="new-item-subtitle">Composition: white gold 585, diamonds</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="jewelry-sales">
          <h3 className="jewelry-sales-title">Up to 20% off red gold jewelry</h3>
        </div>
      </section>
      <section>
        <div className="jewelry-catalog">
          <h3 className="jewelry-catalog-title">Catalog</h3>
          <div className="jewelry-catalog-divider"><img src="images/divider.png" alt="divider" /></div>
          <div className="jewelry-catalog-box d-f">
            <div className="jewelry-catalog-huge">
              <div className="jewelry-catalog-category">Necklace</div>
              <div className="jewelry-catalog-img"><img src="images/product1.png" alt="product1" /></div>
            </div>
            <div>
              <div className="d-f" style={{ gap: "4px" }}>
                <div className="jewelry-catalog-item">
                  <div className="jewelry-catalog-category">Rings</div>
                  <div className="jewelry-catalog-img"><img src="images/product2.png" alt="product2" /></div>
                  <div className="jewelry-catalog-tags d-f">
                    <div className="jewelry-catalog-tag">All</div>
                    <div className="jewelry-catalog-tag">Gloves</div>
                  </div>
                </div>
                <div className="jewelry-catalog-item">
                  <div className="jewelry-catalog-category">Bracelets</div>
                  <div className="jewelry-catalog-img"><img src="images/product3.png" alt="product3" /></div>
                  <div className="jewelry-catalog-tags d-f" style={{ marginTop: "-47px" }}>
                    <div className="jewelry-catalog-tag">On a chain</div>
                    <div className="jewelry-catalog-tag">On a thread</div>
                    <div className="jewelry-catalog-tag">From links</div>
                    <div className="jewelry-catalog-tag">Casting</div>
                    <div className="jewelry-catalog-tag">Stamped</div>
                    <div className="jewelry-catalog-tag">Rolexes</div>
                  </div>
                </div>
              </div>
              <div className="jewelry-catalog-middle">
                <div className="jewelry-catalog-category">Cufflinks</div>
                <div className="jewelry-catalog-img"><img src="images/product5.png" alt="product5" /></div>
              </div>
            </div>
            <div>
              <div className="jewelry-catalog-item">
                <div className="jewelry-catalog-category">Pendants</div>
                <div className="jewelry-catalog-img"><img src="images/product4.png" alt="product4" /></div>
              </div>
              <div className="jewelry-catalog-item" style={{ marginTop: "4px" }}>
                <div className="jewelry-catalog-category">Gifts</div>
                <div className="jewelry-catalog-img"><img src="images/product6.png" alt="product6" /></div>
              </div>
            </div>

          </div>
          <div className="jewelry-catalog-box d-f" style={{ width: "1590px", margin: "4px auto", gap: "20px" }}>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Religious</div>
              <div className="jewelry-catalog-img"><img src="images/product7.png" alt="product7" /></div>
              <div className="jewelry-catalog-tags d-f">
                <div className="jewelry-catalog-tag">Christian</div>
                <div className="jewelry-catalog-tag">Muslim</div>
              </div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Wood products</div>
              <div className="jewelry-catalog-img"><img src="images/product8.png" alt="product8" /></div>
              <div className="jewelry-catalog-tags d-f" style={{ marginTop: "-33px" }}>
                <div className="jewelry-catalog-tag">Earrings</div>
                <div className="jewelry-catalog-tag">Crosses</div>
                <div className="jewelry-catalog-tag">Pendants</div>
                <div className="jewelry-catalog-tag">Cufflinks</div>
              </div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Collections</div>
              <div className="jewelry-catalog-img" style={{ marginTop: "53px" }}><img src="images/product9.png" alt="product9" /></div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Brooches</div>
              <div className="jewelry-catalog-img" style={{ marginTop: "21px" }}><img src="images/product10.svg" alt="product10" /></div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Piercing</div>
              <div className="jewelry-catalog-img" style={{ marginTop: "53px" }}><img src="images/product11.png" alt="product11" /></div>
            </div>
          </div>
          <div className={moreProducts ? "jewelry-catalog-box d-f" : "d-n"} style={{ width: "1590px", margin: "4px auto", gap: "20px" }}>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Religious</div>
              <div className="jewelry-catalog-img"><img src="images/product7.png" alt="product7" /></div>
              <div className="jewelry-catalog-tags d-f">
                <div className="jewelry-catalog-tag">Christian</div>
                <div className="jewelry-catalog-tag">Muslim</div>
              </div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Wood products</div>
              <div className="jewelry-catalog-img"><img src="images/product8.png" alt="product8" /></div>
              <div className="jewelry-catalog-tags d-f" style={{ marginTop: "-33px" }}>
                <div className="jewelry-catalog-tag">Earrings</div>
                <div className="jewelry-catalog-tag">Crosses</div>
                <div className="jewelry-catalog-tag">Pendants</div>
                <div className="jewelry-catalog-tag">Cufflinks</div>
              </div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Collections</div>
              <div className="jewelry-catalog-img" style={{ marginTop: "53px" }}><img src="images/product9.png" alt="product9" /></div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Brooches</div>
              <div className="jewelry-catalog-img" style={{ marginTop: "21px" }}><img src="images/product10.svg" alt="product10" /></div>
            </div>
            <div className="jewelry-catalog-item">
              <div className="jewelry-catalog-category">Piercing</div>
              <div className="jewelry-catalog-img" style={{ marginTop: "53px" }}><img src="images/product11.png" alt="product11" /></div>
            </div>
          </div>
          <button onClick={handleMoreProducts}>{moreProducts ? "Show less" : "Show more"} </button>
        </div>
      </section>
      <section>
        <div className="jewelry-location">
          <h3 className="jewelry-location-title">Location</h3>
          <div className="jewelry-location-divider"><img src="images/divider.png" alt="divider" /></div>
          <div className="jewelry-location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.707366056177!2d-73.96310922522389!3d40.81242393146361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c256598d232339%3A0xda8b85263f93969e!2sBroadway%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1689858134048!5m2!1sen!2sua" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <section>
        <div className="jewelry-news">
          <h3 className="jewelry-news-title">News</h3>
          <div className="jewelry-news-divider"><img src="images/divider.png" alt="divider" /></div>

          <div className="jewelry-news-box d-f">
            <div className="jewelry-news-main" style={{ flexShrink: 0 }}>
              <div className="news-main-date">16.03.2022</div>
              <div className="news-main-title">Nine reasons to visit the SANIS booth at JUNWEX New York</div>
            </div>
            <div className='jewelry-news-other d-f'>
              <div className="jewelry-news-item">
                <div className="news-item-img"><img src="images/news2.png" alt="news2" /></div>
                <div className="news-item-date">04.03.2022</div>
                <div className="news-item-title">We invite you to our conference hall at the exhibition JUNWEX Boston</div>
              </div>
              <div className="jewelry-news-item">
                <div className="news-item-img"><img src="images/news3.png" alt="news3" /></div>
                <div className="news-item-date">04.03.2022</div>
                <div className="news-item-title">We invite you to our conference hall at the exhibition JUNWEX Boston</div>
              </div>
              <div className="jewelry-news-item">
                <div className="news-item-img"><img src="images/news4.png" alt="news4" /></div>
                <div className="news-item-date">04.03.2022</div>
                <div className="news-item-title">We invite you to our conference hall at the exhibition JUNWEX Boston</div>
              </div>
              <div className="jewelry-news-item">
                <div className="news-item-img"><img src="images/news5.png" alt="news5" /></div>
                <div className="news-item-date">04.03.2022</div>
                <div className="news-item-title">We invite you to our conference hall at the exhibition JUNWEX Boston</div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </main>
  )
}

export default Home