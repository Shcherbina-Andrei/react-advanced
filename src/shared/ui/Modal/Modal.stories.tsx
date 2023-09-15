import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalWindow: Story = {
  args: {
    isOpen: true,
    children: 'Text sdfsfsdfsdf sfsd f sdfsdf',
  },
};

export const ModalWindowDark: Story = {
  args: {
    isOpen: true,
    children: 'Text sdfsfsdfsdf sfsd f sdfsdf',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
