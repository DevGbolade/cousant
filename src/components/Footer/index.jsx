import React from 'react';
import { FaFacebook,FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'

import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRight,
    SocialIcons,
    SocialIconLink


} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinksContainer>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRight>{new Date().getFullYear()} All rights reserved</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href="/" aria-label="Facebook" target="_blank">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" aria-label="Instagram" target="_blank">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" aria-label="Twitter" target="_blank">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" aria-label="Youtube" target="_blank">
                            <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
