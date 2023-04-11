import { useState } from 'react';

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (errors: unknown) {
      if (typeof error === 'string') {
        setError(error);
      } else if (errors instanceof Error) {
        setError(errors.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { fetching, isLoading, error };
};
