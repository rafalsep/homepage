import { useEffect, useState } from 'react';

const useAnimation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  return show;
};

export default useAnimation;
