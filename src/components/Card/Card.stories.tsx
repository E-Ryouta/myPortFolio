import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const DefaultCard = () => (
  <Card imgPath="https://placehold.jp/150x150.png" title="Test" description="testtesttesttest" />
);

export const CardDefault = DefaultCard.bind({});
