import React from 'react'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#dedede' }}>
            <footer>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">Product 1</a></li>
                            <li><a href="#">Product 2</a></li>
                            <li><a href="#">Product 3</a></li>
                            <li><a href="#">Product 4</a></li>
                            <li><a href="#">Product 5</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/694/243/small/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg" alt="car" width="50px" height="50px" style={{ marginTop: '20px', borderRadius: '50%', marginRight: '20px' }} />
                        <img src="https://static.vecteezy.com/system/resources/previews/009/966/191/non_2x/customer-satisfaction-icon-style-vector.jpg" alt="customer satisfaction" width="50px" height="50px" style={{ marginTop: '50px', borderRadius: '50%' }} />
                    </div>
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center',  }}>
                    <h3>We strive for customer satisfaction</h3>
                </div>
                <div style={{ textAlign: 'center' , marginTop:'3vh'}}>
                    <h5>Developed By Synergy SoftLabs</h5>
                </div>
            </footer>
        </div>
    )
}

export default Footer