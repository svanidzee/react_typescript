import React from 'react';

import { EventsExample, Card, CardVariant } from '.';

export const Home = () => {
  return (
    <div>
      <EventsExample />
      <Card
        height='200px'
        width='200px'
        onClick={() => console.log(1)}
        variant={CardVariant.primary}>
        <button>Click</button>
      </Card>
    </div>
  );
};
