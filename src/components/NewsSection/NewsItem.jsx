import React from 'react';
import styled from 'styled-components'

const NewsItem = ({item}) => {
    return (
        <Card>
            <CardImage src={item.image}/>
            <CardTitle>
                {item.title}
            </CardTitle>
            <CardText>{item.text}</CardText>
            <CardP>{ item && item.premium ? item.premium : null}</CardP>
            
        </Card>
    )
}


const Card = styled.div`
padding-right: 2rem;
margin-bottom: 60px;


`;
const CardImage = styled.img`
height: 200px;
width: 280px;
border-radius: 10px;
`;
const CardTitle= styled.div`
font-weight:500;
font-size: 17px;
`

;
const CardText= styled.p`
color: grey;
font-size: 14px;
line-height: 1.6;

`;
const CardP= styled.p`
float: right;
position: relative;
font-size: 10px;
color: #255bcf;
font-weight:500;

text-transform: uppercase;


`;





export default NewsItem
