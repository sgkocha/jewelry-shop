import React from 'react'
import './Catalog.css'

const Catalog = () => {
    const [blFirst, setBlFirst] = React.useState(true)
    const [blSecond, setBlSecond] = React.useState(false)
    const [blThird, setBlThird] = React.useState(false)
    const [blFourth, setBlFourth] = React.useState(false)
    const [moreItems, setMoreItems] = React.useState(false)

    const handleBlFirst = () => {
        setBlFirst((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleBlSecond = () => {
        setBlSecond((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleBlThird = () => {
        setBlThird((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleBlFourth = () => {
        setBlFourth((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleMoreItems = () => {
        setMoreItems((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <div className="catalog-wr d-f">
                <div className="catalog-filters">
                    <div className="catalog-filters-bl">
                        <div className="filters-bl-caption d-f">
                            <button onClick={handleBlFirst}><img src="images/arrow-up.png" alt="arrow-up" /></button>
                            <div className="filters-bl-title">Type</div>
                        </div>
                        <div className={blFirst ? "filters-bl-box d-f" : "d-n"}>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Earrings <span>(58)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Rings <span>(135)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check item-check__active"></div>
                                <div className="bl-item-title">Bracelets <span>(120)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check align-center"></div>
                                <div className="bl-item-title">Pendants <span>(15)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Necklace <span>(200)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Piercing <span>(80)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Brooches <span>(10)</span></div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Cufflinks <span>(5)</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-filters-bl">
                        <div className="filters-bl-caption d-f">
                            <button onClick={handleBlSecond}><img src="images/arrow-up.png" alt="arrow-up" /></button>
                            <div className="filters-bl-title">Prices</div>
                        </div>
                        <div className={blSecond ? "filters-bl-box d-f" : "d-n"}>
                            <div className="filters-bl-item d-f align-center">
                                <div className="min-price">10 000</div>
                                <div><img src="images/line.png" alt="line" /></div>
                                <div className="max-price">1 034 000</div>
                            </div>
                            <div><img src="images/line2.png" alt="line2" /></div>
                        </div>
                    </div>
                    <div className="catalog-filters-bl">
                        <div className="filters-bl-caption d-f">
                            <button onClick={handleBlThird}><img src="images/arrow-up.png" alt="arrow-up" /></button>
                            <div className="filters-bl-title">Material</div>
                        </div>
                        <div className={blThird ? "filters-bl-box d-f" : "d-n"}>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Red gold</div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">White gold</div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Lemon gold</div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check align-center"></div>
                                <div className="bl-item-title">Rhodium silver</div>
                            </div>

                        </div>
                    </div>
                    <div className="catalog-filters-bl">
                        <div className="filters-bl-caption d-f">
                            <button onClick={handleBlFourth}><img src="images/arrow-up.png" alt="arrow-up" /></button>
                            <div className="filters-bl-title">Insert material</div>
                        </div>
                        <div className={blFourth ? "filters-bl-box d-f" : "d-n"}>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Without inserts</div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Pearl</div>
                            </div>
                            <div className="filters-bl-item d-f align-center">
                                <div className="bl-item-check"></div>
                                <div className="bl-item-title">Zirconia</div>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-filters-bl">
                        <button className="btn-apply">Apply</button>
                        <button className="btn-reset">Reset all filters</button>
                    </div>
                </div>
                <div>
                    <h3 className="catalog-title">Earrings</h3>
                    <div className="catalog-categories d-f align-center">
                        <div className="catalog-categories-item">Studs</div>
                        <div className="catalog-categories-item">Congo</div>
                        <div className="catalog-categories-item">Semiprecious stones</div>
                        <div className="catalog-categories-item">Another category with a long name</div>
                    </div>
                    <div className="catalog-box d-f jc-sb">
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img"><img src="images/catalog/product1.png" alt="product1" /></div>
                                <div className="catalog-item-sale">-15%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$265 <span>$486.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product2.png" alt="product2" />
                                </div>
                                <div className="catalog-item-sale">-22%</div>
                            </div>
                            <div className="catalog-item-title">Wood and gold pendant</div>
                            <div className="catalog-item-price" style={{ marginTop: "25px" }}>$386.75 <span>$718.25</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img"><img src="images/catalog/product3.png" alt="product3" /></div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$209.95</div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product4.png" alt="product4" />
                                </div>
                                <div className="catalog-item-sale">-30%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$232.05 <span>$265.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: "43px" }}>
                                    <img src="images/catalog/product5.png" alt="product5" />
                                </div>
                                <div className="catalog-item-sale">-15%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$1491.75 <span>$2033.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product6.png" alt="product6" />
                                </div>
                                <div className="catalog-item-sale">-22%</div>
                            </div>
                            <div className="catalog-item-title">Wood and gold pendant</div>
                            <div className="catalog-item-price" style={{ marginTop: "25px" }}>$198.90 <span>$254.15</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product7.png" alt="product7" />
                                </div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$99.45</div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img">
                                    <img src="images/catalog/product8.png" alt="product8" />
                                </div>
                                <div className="catalog-item-sale">-30%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$276.25 <span>$309.40</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img">
                                    <img src="images/catalog/product9.png" alt="product9" />
                                </div>
                                <div className="catalog-item-sale">-15%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$265.20 <span>$486.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: "22px" }}>
                                    <img src="images/catalog/product10.png" alt="product10" />
                                </div>
                                <div className="catalog-item-sale">-22%</div>
                            </div>
                            <div className="catalog-item-title">Wood and gold pendant</div>
                            <div className="catalog-item-price" style={{ marginTop: "25px" }}>$386.75 <span>$718.25</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img">
                                    <img src="images/catalog/product11.png" alt="product11" />
                                </div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$209.95</div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{marginTop: 0}}>
                                    <img src="images/catalog/product12.png" alt="product12" />
                                </div>
                                <div className="catalog-item-sale">-30%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$232.05 <span>$265.20</span></div>
                        </div>
                    </div>
                    <div className={moreItems ? "catalog-box d-f jc-sb" : "d-n"}>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img"><img src="images/catalog/product1.png" alt="product1" /></div>
                                <div className="catalog-item-sale">-15%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$265 <span>$486.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product2.png" alt="product2" />
                                </div>
                                <div className="catalog-item-sale">-22%</div>
                            </div>
                            <div className="catalog-item-title">Wood and gold pendant</div>
                            <div className="catalog-item-price" style={{ marginTop: "25px" }}>$386.75 <span>$718.25</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img"><img src="images/catalog/product3.png" alt="product3" /></div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$209.95</div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product4.png" alt="product4" />
                                </div>
                                <div className="catalog-item-sale">-30%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$232.05 <span>$265.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: "43px" }}>
                                    <img src="images/catalog/product5.png" alt="product5" />
                                </div>
                                <div className="catalog-item-sale">-15%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$1491.75 <span>$2033.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product6.png" alt="product6" />
                                </div>
                                <div className="catalog-item-sale">-22%</div>
                            </div>
                            <div className="catalog-item-title">Wood and gold pendant</div>
                            <div className="catalog-item-price" style={{ marginTop: "25px" }}>$198.90 <span>$254.15</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: 0 }}>
                                    <img src="images/catalog/product7.png" alt="product7" />
                                </div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$99.45</div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img">
                                    <img src="images/catalog/product8.png" alt="product8" />
                                </div>
                                <div className="catalog-item-sale">-30%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$276.25 <span>$309.40</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img">
                                    <img src="images/catalog/product9.png" alt="product9" />
                                </div>
                                <div className="catalog-item-sale">-15%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$265.20 <span>$486.20</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                </div>
                                <div className="catalog-item-img" style={{ marginTop: "22px" }}>
                                    <img src="images/catalog/product10.png" alt="product10" />
                                </div>
                                <div className="catalog-item-sale">-22%</div>
                            </div>
                            <div className="catalog-item-title">Wood and gold pendant</div>
                            <div className="catalog-item-price" style={{ marginTop: "25px" }}>$386.75 <span>$718.25</span></div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img">
                                    <img src="images/catalog/product11.png" alt="product11" />
                                </div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$209.95</div>
                        </div>
                        <div className="catalog-item">
                            <div className="catalog-item-caption">
                                <div className="catalog-item-tags d-f">
                                    <div className="catalog-item-tag">New</div>
                                    <div className="catalog-item-tag">Heath</div>
                                </div>
                                <div className="catalog-item-img" style={{marginTop: 0}}>
                                    <img src="images/catalog/product12.png" alt="product12" />
                                </div>
                                <div className="catalog-item-sale">-30%</div>
                            </div>
                            <div className="catalog-item-title">White gold ring with diamonds</div>
                            <div className="catalog-item-price">$232.05 <span>$265.20</span></div>
                        </div>
                    </div>
                    <button className='catalog-action' onClick={handleMoreItems}>{moreItems ? "Show less" : "Show more"} </button>
                </div>
            </div>
        </main>
    )
}

export default Catalog