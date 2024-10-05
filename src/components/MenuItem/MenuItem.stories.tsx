import React from 'react';
import { MenuItem } from './MenuItem';
import { BiSolidHome } from 'react-icons/bi';

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
};

const DefaultMenuItem = () => <MenuItem ReactIcon={BiSolidHome} label="Test" href="/" />;

export const MenuItemDefault = DefaultMenuItem.bind({});
