import Button from "../Button/Button"
import "../Header/Header.css"
import styled from"styled-components"
const Header=()=>{
    return(
        <header className="header">
        <div className="container">
        <h1>Favoriet Movie</h1>
   <StyledBtn>ADD MOVIE</StyledBtn>
        </div>
        </header>
    )
}
export default Header

const StyledBtn=styled.button`
    background-color: orange;
    border: none;
    height: 2rem;
    border-radius: 5px;
`