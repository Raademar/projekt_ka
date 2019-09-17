import styled from 'styled-components'

export const StyledCategoryCard = styled.div`
    height: 162px;
    width: 162px;
    /* background-color: rgba(233, 90, 50, 0.7) ;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */

    background: ${props =>
      props.backgroundColor
        ? `linear-gradient(rgba(50, 51, 50, 0.7), rgba(50, 51, 50, 0.7))`
        : `linear-gradient(rgba(233, 90, 50, 0.7), rgba(233, 90, 50, 0.7))`}, 
        url(${props => props.backgroundImage}) center no-repeat; 
    
    background-size: cover;

    h5 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #FFF;
    }

    a {
      text-decoration: none;
    }
`
