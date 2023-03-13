// import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui';
import {useList} from '@pankod/refine-core'

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,

} from 'components';


const house = () => {
  return (
    <Box>

<Typography fontSize ={25} fontWeight= {700} color = "#fff">
  Dashboard
</Typography>
<Box mt="20px" display= "flex" flexWrap="wrap" gap={4}>
<PieChart
title = "Property for sale"
value= {684}
series = {[75, 25]}
colors = {['#475be8' , '#e4e8ef']}/>
<PieChart
title = "Property for rent"
value= {550}
series = {[60, 40]}
colors = {['#275ae8' , '#c4b8ef']}/>
<PieChart
title = "Total customers"
value= {5684}
series = {[75, 25]}
colors = {['#475be8' , '#e4e8ef']}/>
<PieChart
title = "properties for Cities"
value= {555}
series = {[75, 25]}
colors = {['#475be8' , '#e4e8ef']}/>
  
</Box>
<Stack mt="25px" width="100%"
direction={{xs: 'column', lg: 'row'}} gap={4}>
  <TotalRevenue/>
  <PropertyReferrals/>

</Stack>
    </Box>
  )
}

export default house