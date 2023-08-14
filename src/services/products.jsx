import { useState, useEffect } from 'react';
import axios from 'axios';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/products`)
        .then((response) => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return { products, loading };
}
