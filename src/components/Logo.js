import { Box } from '@mui/system'
import React from 'react'
import {Typography} from '@mui/material'
import { styled } from '@mui/system'
import {theme} from '../theme'

const logoOuter = {
    display: 'flex',
    alignItems: 'center'
}
const Left = styled('h2')(({})=>({
    display: 'flex',
    color: theme.palette.primary.main
}))
const Center = styled('p')(({})=>({
    display: 'flex',
    color:theme.palette.primary.black
}))
const Right = styled(Box)(({})=>({
    color: theme.palette.primary.main
}))


const Logo = () => {
  return (
    <Box>
       <Left>Nit<Center>Med</Center><Right>.</Right></Left>
    </Box>
  )
}

export default Logo