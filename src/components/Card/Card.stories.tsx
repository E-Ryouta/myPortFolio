import { CardButton } from './CardButton';

export default {
  title: 'Components/CardButton',
  component: CardButton,
};

const DefaultCardButton = () => (
  <CardButton imgPath="https://placehold.jp/150x150.png" title="Test" />
);

export const CardButtonDefault = DefaultCardButton.bind({});
