import styled from 'styled-components'

const Button =({color,title})=>{
    return(
        <div>
            <StyledButton style={{backgroundColor:`${color}`}}>{title}</StyledButton>
        </div>
    )
}
export default Button


const StyledButton=styled.button`

   margin: 0.3rem;
   margin-top: 10rem;
  padding: 0.5rem 1rem;

  border: 1px solid #f67722;
 
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);


`