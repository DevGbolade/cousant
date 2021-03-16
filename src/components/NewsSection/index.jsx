import React from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc'
import { 
     NewsContainer,
     NewsH1, 
     NewsText,
    NewsMenu ,
    Pagination,
    NavigationButtons,
    NextBtn,
    PrevtBtn,
    PaginationNo
} from './NewsSectionElements';
import NewsItem from './NewsItem'

import {  NewsData } from './NewsData'

const NewsSection = () => {
    return (
        <>
        <NewsContainer>
            <NewsH1>LATEST NEWS</NewsH1>
            <NewsText>Catch all the information on time here</NewsText>
            <NavigationButtons>
            <FcPrevious/><FcNext/>
            </NavigationButtons>
            <NewsMenu>
                {
                    NewsData.map((el, i) => (<NewsItem item={el} key={i}/>))
                }

            </NewsMenu>
            <Pagination>
                <PrevtBtn/>
                <PaginationNo>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>7</span>
                </PaginationNo>
                <NextBtn/>

               
            </Pagination>
              
        </NewsContainer>  
        </>
    )
}

export default NewsSection
