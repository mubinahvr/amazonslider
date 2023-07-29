import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from './1.jpeg'
import sale from './assets/sale.jpg'
import percent from './assets/percent.png'
import transfer from './assets/transfer.png'

const Slider = () => {
    return (
        <div style={{ backgroundColor: 'lightblue' }}><Carousel>

           
            <div className='image-divs2 image-divs2-3'>
            <div className='details-div'>
                    <h1 className='text-xl font-bold'>Under 1,999</h1>
                    <h2 className='text-lg'>Top Rated Electronics<br></br>&accessories</h2>
                    <h3>Extra up to 10% off via coupons</h3>
                    <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                        <a href=""><img src={percent}
                            style={{
                                width: '20px', height: '20px',
                                backgroundColor: 'orange',
                                border: '1px solid orange',
                                borderRadius: '50%', padding: '2% 4%',
                            }} />NO COST <br></br>EMI</a>
                            <div style={{borderRight:'2px solid grey',height:'40px',margin:'2%'}}></div>
                        <a href=""><img src={transfer}
                            style={{
                                width: '20px', height: '20px',
                                backgroundColor: 'orange',
                                border: '1px solid orange',
                                borderRadius: '50%', padding: '2%',
                               alignItems:'center'
                            }} />EXCHANGE  <br></br>OFFER</a>
                    </div>
                   
            </div>
         
                <img src={one} style={{ width: '30%',backgroundColor:'red'}} />
                

            </div><div className='image-divs2 image-divs2-3'>
                <div className='details-div'>
                    <h1 className='text-xl font-bold'>Under 1,999</h1>
                    <h2 className='text-lg'>Top Rated Electronics<br></br>&accessories</h2>
                    <h3>Extra up to 10% off via coupons</h3>
                </div>

                <img src={one} style={{ width: '30%', backgroundColor: 'red' }} />


            </div><div className='image-divs2 image-divs2-3'>
                <div className='details-div'>
                    <h1 className='text-xl font-bold'>Under 1,999</h1>
                    <h2 className='text-lg'>Top Rated Electronics<br></br>&accessories</h2>
                    <h3>Extra up to 10% off via coupons</h3>
                </div>

                <img src={one} style={{ width: '30%', backgroundColor: 'red' }} />


            </div>
        </Carousel>
            <div className='image-divs'>
                <div className='card-divs'>
                    <h1 style={{ fontSize: '22px', fontWeight: '800' }}>Great Freedom sale</h1>
                    <a href=""><img src={sale} style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>see all</a>
                </div>
                <div className='card-divs'>
                    <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Bluetooth Calling Smartwatch starts at...</h1>
                    <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>shop now</a>
                </div>
                <div className='card-divs'>
                    <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Up to 70% off | Clearance store</h1>
                    <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>See more</a>
                </div>
                <div className='card-divs3'>
                    <div className='card-divs2'>
                        <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Sign in for your best experience</h1>
                        <button className='signinbtn'>Sign in securely</button>
                    </div>
                    <div>
                        <a href="">
                            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
                        </a>

                    </div>
                </div>


            </div>
            <div className='image-divs'>
                <div className='card-divs'>
                    <h1 style={{ fontSize: '22px', fontWeight: '800' }}>Great Freedom sale</h1>
                    <a href=""><img src={sale} style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>see all</a>
                </div>
                <div className='card-divs'>
                    <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Bluetooth Calling Smartwatch starts at...</h1>
                    <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>shop now</a>
                </div>
                <div className='card-divs'>
                    <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Up to 70% off | Clearance store</h1>
                    <a href=""><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg' style={{ width: '100%', paddingTop: '4%' }} /></a>
                    <a href="" style={{ display: 'flex', alignItems: 'center', color: '#007185', marginTop: '5%' }}>See more</a>
                </div>
                <div className='card-divs3'>
                    <div className='card-divs2'>
                        <h1 style={{ fontSize: '22px', fontWeight: '700' }}>Sign in for your best experience</h1>
                        <button className='signinbtn'>Sign in securely</button>
                    </div>
                    <div>
                        <a href="">
                            <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Slider