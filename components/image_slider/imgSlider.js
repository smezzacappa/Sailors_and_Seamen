import React, {Component} from 'react'
import Image from 'next/image'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
// import styles from '../../styles/Home.module.css'

export default class ImgSlider extends Component{
render(){
    return(
        <Carousel>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" layout='fill'/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck2.jpg" alt="blah" layout='fill'/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
            <div>
                <Image src="/../public/static/exterior/poolDeck.jpg" alt="blah" width={500} height={500}/>
            </div>
        </Carousel>
    )
}
}