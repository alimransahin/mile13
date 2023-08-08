import { Box, styled } from '@mui/material';
import React from 'react';
const brands = [
   'https://i.ibb.co/27wHw8Y/image-5.png',
   'https://i.ibb.co/vVSVd76/image-6.png',
   'https://i.ibb.co/Dwj3KYc/image-7.png',
   'https://i.ibb.co/99gcp3b/image-8.png',
   'https://i.ibb.co/Rhk2VSh/image-9.png',
];

const BrandsWrapper=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    margin:'4rem 0',
'& > img':{
height:'60px'
},
[theme.breakpoints.down('md')]:{
    flexDirection:'column',
    '& > img':{
        marginBottom:'2rem',
    }
}
}))
const Brands = () => {
    return (
        <BrandsWrapper>
        {
            brands.map((brand,i)=><img key={i} src={brand} alt="brand"/>)
        }
        </BrandsWrapper>
    );
};

export default Brands;