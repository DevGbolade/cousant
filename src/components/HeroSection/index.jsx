import React, { useState } from 'react';
import { 
    HeroContainer, 
    HeroBg, 
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    // HeroBtnWrapper,
    // ArrowForward,
    // ArrowRight
    HeroSubContainer
} from './HeroElements';
import  Image from '../../assets/images/image-1.jpg';
// import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => setHover(!hover);
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <HeroContent>
                <HeroSubContainer>
                    <HeroH1>ROLOBANK</HeroH1>
                <HeroP>
                   We are a <br/> Bank of the <br/> young and for <br/> the young
                </HeroP>
                </HeroSubContainer>
                {/* <HeroH1>Virtual Banking</HeroH1> */}
              
               
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
