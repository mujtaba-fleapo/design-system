import type { Meta, StoryObj } from '@storybook/react';

import { MobileTable } from '../components/table/MobileTable';
import {
  fantablebody,
  fantableheader,
  posttablebody,
  posttableheader
} from '../components/table/TableData';

const meta: Meta<typeof MobileTable> = {
  component: MobileTable,
  title: '5. Lab/MobileTable',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MobileTable>;

export const Brand: Story = {
  args: {
    headers: posttableheader,
    data: posttablebody,
    hasActions: true,
    circularImages: false,
    imageKey: 'image',
    options: [
      { label: 'Option 1', key: 'option1' },
      { label: 'Option 2', key: 'option2' }
    ],
    onMenuItemClick: (key: string, index: number) => {
      console.log(`Option clicked: ${key} at index ${index}`);
    }
  }
};

Brand.storyName = `🔶 DesktopTable`;

export const PostTable: Story = {
  args: {
    headers: posttableheader,
    data: posttablebody,
    hasActions: true,
    circularImages: false,
    imageKey: 'image'
  }
};

export const FanTable: Story = {
  args: {
    headers: fantableheader,
    data: fantablebody,
    hasActions: true,
    circularImages: false,
    imageKey: 'image',
    options: [
      { label: 'Option 1', key: 'option1' },
      { label: 'Option 2', key: 'option2' }
    ],
    onMenuItemClick: (key: string, index: number) => {
      console.log(`Option clicked: ${key} at index ${index}`);
    }
  }
};
