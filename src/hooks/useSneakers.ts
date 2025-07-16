import { useEffect, useState } from 'react';
import { ISneakers } from '../types/ISneakers';

export const useSneakers = () => {
    const [listSneakers, setListSneakers] = useState<ISneakers[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/sneakers')
            .then((res) => res.json())
            .then((data) => setListSneakers(data))
            .catch((err) => setError('Loading error:' + err))
            .finally(() => setLoading(false));
    }, []);
    return { listSneakers, loading, error };
};
