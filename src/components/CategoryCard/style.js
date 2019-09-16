import styled from 'styled-components'

export const StyledCategoryCard = styled.div`
    height: 162px;
    width: 162px;
    /* background-color: rgba(233, 90, 50, 0.7) ;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    background:
    linear-gradient(
      rgba(233, 90, 50, 0.7),
      rgba(233, 90, 50, 0.7)
    ), url(${props => props.backgroundImage}) center no-repeat;
    background-size: cover;
    h5 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #FFF;
    }
`