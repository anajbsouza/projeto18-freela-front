import React from 'react';
import { useLogout } from '../../services/auth';
import { useProducts } from '../../services/products';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const { products, loading } = useProducts();
    const logout = useLogout();

    return (
        <div>
        <header>
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </header>
        <section>
            {loading ? (
            <p>Carregando produtos...</p>
            ) : (
            <ul>
                {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/product/${product.id}`}>
                    {product.name} - ${product.price}
                    </Link>
                </li>
                ))}
            </ul>
            )}
        </section>
        </div>
    );
}
