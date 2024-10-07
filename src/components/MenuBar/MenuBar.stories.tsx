import { MenuBar } from './MenuBar';

export default {
  title: 'Components/MenuBar',
  component: MenuBar,
};

const DefaultMenuBar = () => <MenuBar />;

export const MenuBarDefault = DefaultMenuBar.bind({});
