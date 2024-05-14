import React from 'react';
import Button from '../components/button';
import { GoBell, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded>
          Add to Cart
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          Hug Bolle
        </Button>
      </div>
      <div>
        <Button danger>Go Sleep</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
