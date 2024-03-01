// BasicTable.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { BasicTable } from '../components/table/BasicTable';

const meta: Meta<typeof BasicTable> = {
  component: BasicTable,
  title: '4. Components/BasicTable',

  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Brand: Story = {
  args: {
    data: [
      {
        label: 'Label',
        value: 'Value'
      },
      {
        label: 'Label',
        value: 'Value'
      },
      {
        label: 'Label',
        value: 'Value'
      }
    ]
  }
};

Brand.storyName = `🔶 BasicTable`;

export const Spanish: Story = {
  args: {
    data: [
      {
        label: 'Etiqueta',
        value: 'Valor'
      },
      {
        label: 'Etiqueta',
        value: 'Valor'
      },
      {
        label: 'Etiqueta',
        value: 'Valor'
      }
    ]
  }
};

Spanish.storyName = `🔶 BasicTable Spanish`;

export const Arabic: Story = {
  args: {
    data: [
      {
        label: 'ملصق',
        value: 'قيمة'
      },
      {
        label: 'ملصق',
        value: 'قيمة'
      },
      {
        label: 'ملصق',
        value: 'قيمة'
      }
    ],
    locale: 'ar'
  }
};

Arabic.storyName = `🔶 BasicTable Arabic`;

export const DesktopBasicTableRow: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <BasicTable /> component`}</Alert>
  )
};
export const DesktopBasicTable: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <BasicTable /> component`}</Alert>
  )
};
const FigmaPreview = (props: any): JSX.Element => {
  return (
    <div
      style={{
        width: '90vw',
        height: '90vh'
      }}
    >
      <Box>
        {props.notImplemented && (
          <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
            NOT IMPLEMENTED
          </Typography>
        )}
        {props.inprogress && (
          <Typography variant="body1" gutterBottom sx={{ color: 'orange' }}>
            IN PROGRESS
          </Typography>
        )}
        {props.ok && (
          <Typography variant="body1" gutterBottom sx={{ color: 'green' }}>
            VERIFIED
          </Typography>
        )}
        <Link target="_blank" href={props.url} variant="body1">
          URL: {props.url}
        </Link>
      </Box>
      <iframe
        title="Figma Preview"
        style={{ border: '1px dotted black' }}
        width="100%"
        height="100%"
        src={props.url}
      ></iframe>
    </div>
  );
};

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D320%253A7344%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
