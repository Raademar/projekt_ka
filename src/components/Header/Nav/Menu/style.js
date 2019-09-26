import styled from 'styled-components'

export const MenuWrapper = styled.div`
  background-color: ${props => props.theme.colors.darkgrey};
  position: fixed;
  top: 0;
  right: ${props => (props.menuOpen || props.filterOpen ? '0' : '-100vw')};
  opacity: ${props => (props.menuOpen || props.filterOpen ? '1' : '0')};
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: ${props => props.theme.fonts[0]};
  color: ${props => props.theme.colors.white[1]};
  padding: 24px;
  text-transform: uppercase;
  transition: opacity 0.4s 0.1s ease-in-out, right 0.4s ease-in-out;

  a:first-of-type {
    margin-top: 43px;
    margin-bottom: 40px;
  }

  a {
    color: ${props => props.theme.colors.white[1]};
    margin-bottom: 24px;
    font-size: 24px;
    text-decoration: none;
  }
`

export const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .is-active {
    font-weight: bold;
  }
`

export const FilterStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts[0]};

  h2 {
    margin-top: 43px;
    margin-bottom: 40px;
    font-weight: bold;
  }
`
export const FilterButton = styled.button`
  align-self: flex-start;
  padding: 0;

  h2 {
    color: ${props => props.theme.colors.white[1]};
    font-weight: ${props => props.added};
    margin-bottom: 24px;
    font-size: 24px;
    text-decoration: none;
    margin-top: 0;
    text-transform: uppercase;
  }
`

export const CloseButton = styled.button`
  align-self: ${props => (props.filter ? 'flex-start' : 'flex-end')};
  border: none;
  width: fit-content;
  background: none;
  outline: 0;
  padding: 0;

  margin-top: ${props => (props.filter ? '9px' : '0')};

  svg {
    align-self: center;
  }
`
