import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Filter from './Filter';
import { Box, Divider, Typography } from '@mui/material';
import SearchComponent from './SearchComponent';
import { feedData } from '@/data/data';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import Button from '@mui/material/Button';


export default function MainContent() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '80vw' }}>
            <Box sx={{ display: 'flex' }}>


                <SearchComponent />
                <Filter />

            </Box>
            <Box>
                <Typography sx={{ marginY: '2rem', fontSize: '1.5rem' }}>Activity Feed</Typography>
                {feedData.map((data) => (
                    (
                        <Box sx={{ padding: '1rem', width: '97%', border: '2px solid lightgrey', marginRight: '2.5rem', marginY: '1rem', borderRadius: '1rem' }}>
                            {/* basic info */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ bgcolor: 'lightgray', paddingX: '5px', borderRadius: '1rem' }}>{data?.newUpdate}</Typography>
                                <MoreVertIcon />
                            </Box>

                            {/* company details */}
                            <Box sx={{ display: 'flex', marginY: '1rem' }}>
                                <Box sx={{ border: '1px solid lightgrey', borderRadius: '50%', marginRight: '1rem' }}>
                                    <Image src={'/company_logo.png'} height={50} width={50} alt='logo' className='rounded-full' />
                                </Box>
                                <Box>
                                    <Typography>{data?.companyName}</Typography>
                                    <Typography sx={{ fontSize: 'small' }}>{data?.field} | {data?.location}</Typography>
                                </Box>
                            </Box>

                            <Divider />
                            {/* text and image */}
                            <Box sx={{ marginY: '1rem' }}>
                                <Typography>{data?.postText}</Typography>
                                {data?.isPostImage && <Image src={data?.postImageUrl} height={200} width={700} alt='post image' />}
                            </Box>
                            {
                                data?.viewDeal &&
                                <Button variant="outlined" sx={{color: 'green', borderColor: 'green'}}>VIEW DEAL</Button>

                            }

                            <Box>
                                <Typography>{data?.postEndText}</Typography>{data?.readMore &&
                                    <Typography align='right' color={'green'}>READ MORE</Typography>}
                            </Box>
                            <Divider sx={{ marginY: '1rem' }} />

                            <Typography>{data?.date}</Typography>


                        </Box>
                    )
                ))}
            </Box>
        </Box>
    )
}

