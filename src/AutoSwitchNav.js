import { useEffect, useState } from 'react';

function useAutoSwitchNav(items, setActiveItem, intervalDuration) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
      setActiveItem(items[nextIndex]);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [currentIndex, items, setActiveItem, intervalDuration]);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    setActiveItem(items[index]);
  };

  return handleItemClick;
}

export default useAutoSwitchNav;
