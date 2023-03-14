import{Add} from '@mui/icons-material'
import {useList} from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';

import { PropertyCard, CustomButton } from 'components';
const Allproperties = () => {
  const navigate= useNavigate();

  return (
    <Box>
      <Stack direction='row'
      justifyContent='space-between'
      alignItems='center'>
        <Typography fontSize={25} fontWeight={700}
        color='#fff'>All properties</Typography>
 <CustomButton
 title= "Add property"
 handleClick ={()=> {}}
 backgroundColor="#475be8"
 color = "#fcfcfc"
 icon ={<Add/>}
 
 
 />
 
      </Stack>
    </Box>
  )
}

export default Allproperties