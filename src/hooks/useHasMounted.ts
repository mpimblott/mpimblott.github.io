import { useState, useEffect } from 'react';

/**
 * Check if the page has mounted for ssr support
 */
export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
