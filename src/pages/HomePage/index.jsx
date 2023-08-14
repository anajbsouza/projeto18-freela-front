import React from 'react';
import { useLogout } from '../../services/auth';
import { useProducts } from '../../services/products';
import { Link } from 'react-router-dom';
import { HomePageContainer } from './styled';
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
    const { products, loading } = useProducts();
    const logout = useLogout();
    const navigate = useNavigate();

    return (
        <HomePageContainer>
            <header>
                <h1>Home Page</h1>
                    <div className="button-container">
                    <button onClick={logout}>Logout</button>
                    <button><Link to="/add-product">Adicionar Produto</Link></button>
                </div>
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
        </HomePageContainer>
    );
}
