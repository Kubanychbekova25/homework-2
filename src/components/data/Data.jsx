import React from "react";
import styled from "styled-components"
import Button from "../Button/Button";
const Data = () => {
  const movies = [
    {
      id: 1,

      title: "Avatar 1",

      rating: 4,

      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },

    {
      id: 2,

      title: "Kunfu panda",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    },

    {
      id: 3,

      title: "Naruto Shipuden",

      rating: 5,

      img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    },

    {
      id: 4,

      title: "Hobbit",

      rating: 5,

      img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    },
  ];

  return <>
    {movies.map((item)=>(
      <div>
       <StyledContainer>
      
     
      < StyledImg src= {item.img}/>
      <h1>{item.title}</h1> 
     <Button color='orange' title={item.rating}/>
     <Button color="red" title='DELETE' />
  </StyledContainer>
      
  </div>

    ))}
    </>
};

export default Data;


const  StyledContainer=styled.div`
display: flex;
box-shadow: 1px 0px 23px 15px #2D2B2B;
border: none;
border-radius: 15px;
  width:800px ;
  height: 250px;
  margin: 3rem 2rem;
`
const StyledImg=styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem ;
`
