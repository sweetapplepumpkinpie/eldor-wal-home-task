import React from "react";

import isPrime from "../utils/isPrime";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function HeavyButton({ children, onClick }: Props) {
  // simulate expensive render
  for (let i = 0; i < 1000000; i++) {
    isPrime(i);
  }
  console.log('heavybutton')

  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

export default React.memo(HeavyButton);
