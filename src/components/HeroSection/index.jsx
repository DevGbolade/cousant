import React from 'react';
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

const HeroSection = () => {

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
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
