import React from 'react';
import { Box, Button } from '@mui/material';
import {icons} from '../../assets/icons'
export const CompLoginEx = ({iconName}) => { 

const IconComponent = icons[iconName];
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,width: '100%',marginBottom: '20px' }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert(`Sing in with ${iconName}`)}
              startIcon={IconComponent ? <IconComponent /> : null}
            >
              Sign in with {iconName}
            </Button>
            </Box>
    );
}