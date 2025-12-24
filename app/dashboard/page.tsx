'use client';

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Image from "next/image";
export default function DashboardPage() {
  const { data: session, status } = useSession();

  const handleSignOut = () => signOut({
    redirect: true,
    callbackUrl: '/'
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Image src="/images/almoxapp.svg" alt="AlmoxApp" width={120} height={50} style={{ margin: '0 auto' }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              edge="end"
              onClick={handleSignOut}
              color="inherit"
            >
              <MeetingRoomIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
);
  
}