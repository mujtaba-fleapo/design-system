import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: `1px solid ${colors.lightgray[400]}`,
  height: 'auto',
  borderRadius: '0',
  boxShadow: 'unset',
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '10px',
  padding: 'auto!important',
  height: 'auto!important',
  '&:first-of-type': {
    width: '200px'
  }
}));

interface Props {
  label: string;
  value: string;
}
export const BasicTableRow = ({ label, value }: Props) => {
  return (
    <StyledTableRow data-testid={`basic-table-row-styled-ds`}>
      <StyledTableCell
        data-testid={`basic-table-row-styled-cell-1-ds`}
        align="left"
      >
        <Typography className="interSemibold14">
          {label ? label : 'Label'}
        </Typography>
      </StyledTableCell>
      <StyledTableCell
        data-testid={`basic-table-row-styled-cell-2-ds`}
        align="left"
      >
        <Typography className="interRegular14">
          {value !== null ? value : 'Value'}
        </Typography>
      </StyledTableCell>
    </StyledTableRow>
  );
};
