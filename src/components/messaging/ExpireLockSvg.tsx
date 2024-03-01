import Box from '@mui/material/Box';
import { Icon } from '../../elements/icons';

const ExpireLockSvg = () => {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '1',
        backgroundColor: '#333333',
        borderRadius: '10px',
        marginBottom: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box>
        <Icon name="Lock" color="#fff" size="24" />
      </Box>
    </Box>
  );
};

export default ExpireLockSvg;
