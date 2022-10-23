import './sideBar.scss'
import React from 'react'
import { theme } from '../../theme'
import { Box,  Divider,  ListItemButton,  Typography } from '@mui/material'
import { Link as RouterLink, } from 'react-router-dom'
import Logo from '../Logo'
import { FiTrendingUp ,} from 'react-icons/fi'
// import{CgShoppingBag} from'react-icons/cg'
import { BiHomeAlt,BiDonateHeart } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import nitmedlogo from '../Images/Nitmed.png'
import imageSource from '../Images/cat.png'

function SideBar() {

    const user = {
        name: "John Doe",
        email: "john.doe@gmail.com",
    }
    return (
        <Box sx={{ flex: 1, ml: 2, mr: 3, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, mb: 4 }}>
                    <Logo />
                    <Typography sx={{ display: 'flex', alignItems: 'center', mr: 4 }}><FiTrendingUp style={{ color: theme.palette.primary.main, marginLeft: '5px' }} /></Typography>
                </Box>
                <Box sx={{ display: 'flex', cursor: 'pointer', backgroundColor: theme.palette.primary.lightGrey, height: 80, borderRadius: theme.border.regular }}>
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box component="img" src={imageSource} sx={{ width: 46, height: 46, objectFit: 'cover', borderRadius: '50%' }}>

                        </Box>
                    </Box>
                    <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography fontSize={theme.fonts.small} variant="h6" component="p">{user.fullname}</Typography>
                        <Typography color={theme.palette.primary.grey} variant="p" component="p">{user.isAdmin ? "Admin" : "User"}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flex: 2 }}>
                
                <Divider sx={{ mt: 1, mb: 1 }} />
                <Box sx={{  }}>
                    <ListItemButton component={RouterLink} to={"/"}>
                        <BiHomeAlt />
                        <Box sx={{ fontSize: '16px', ml: 2 }}>
                            Home
                        </Box>
                    </ListItemButton>
                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />

                <Box sx={{  }}>
                    <ListItemButton component={RouterLink} to={"/donate"}>
                        <BiDonateHeart />
                        <Box sx={{ fontSize: '16px', ml: 2 }}>
                            Donate
                        </Box>
                    </ListItemButton>
                </Box>
                {
            // <Divider sx={{ mt: 2, mb: 2 }} />
            //    <Box sx={{  }}>
            //        <ListItemButton component={RouterLink} to={"/order"}>
            //            <CgShoppingBag />
                     
            //            <Box sx={{ fontSize: '16px', ml: 2 }}>
            //                Order
            //            </Box>
            //         </ListItemButton>
            //    </Box>
                }

                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box sx={{  }}>
                    <ListItemButton component={RouterLink} to={"/about"}>
                        <AiOutlineInfoCircle />
                        <Box sx={{ fontSize: '16px', ml: 2 }}>
                            About
                        </Box>
                    </ListItemButton>
                </Box>

            </Box>


            <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'centre', borderRadius: theme.border.regular, width: '60%', height: '60%', backgroundColor: theme.palette.primary.lightGreen }}>
                <button><Box component="img" src={nitmedlogo} sx={{ width: 60, height: 65, objectFit: 'cover',mb: 1, p: 1,borderRadius: theme.border.auth,"&:hover": { backgroundColor: theme.palette.primary.darkGreen } }}></Box> </button>
                {//<Button sx={{ borderRadius: theme.border.auth, color: theme.palette.primary.white, mb: 1, p: 1, "&:hover": { backgroundColor: theme.palette.primary.darkGreen }, backgroundColor: theme.palette.primary.main, height: 40 }} variant="text">NitMed</Button>
                }
                </Box>
            </Box>

        </Box>
    )
}

export default SideBar