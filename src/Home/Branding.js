import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper=styled(Box)(({theme})=>({
    height:'70vh',
        backgroundColor:'rgba(122, 178, 89, 0.15)',
        padding:theme.spacing(4),
        marginTop:theme.spacing(4),
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
}));

const Branding = () => {
    return (
       <BrandingWrapper>
       <Box>
       <Stack spacing={5}>
         <Typography sx={{
            fontSize:'2.5rem',
            fontWeight:'bold',
            lineHeight:'1.2'
        }}>Lorem ipsum dolor sit amet consectetur </Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rem. Vel mollitia possimus, fugiat optio accusantium mole</Typography>
        <Button sx={{
            width:'50%'
        }}>Hire us</Button>
       </Stack>
       </Box>
       <Box sx={{
        width:'50%',
         display:{
                xs:'none',
                sm:'none',
                md:'block',
            }
        }}><img src="https://i.ibb.co/sPXVMbC/Frame.png" alt="branding" style={{width:'100%'}} /></Box>
       </BrandingWrapper>
    );
};

export default Branding;