import { useState } from 'react';
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useApi } from "../../hooks/useApi";
import * as S from "./index.styles";

function Home() {
    const { data, isLoading, isError} = useApi('https://v2.api.noroff.dev/online-shop');
    const [searchTerm, setSearchTerm] = useState('');

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <div>Error</div>
    }

    const filteredProducts = data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <S.Main>
            <S.Heading>Products</S.Heading>
            <S.SearchBar 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <S.ProductsContainer>
                {filteredProducts.map((product) => (
                    <S.ProductCard key={product.id}>
                        <S.ProductImage src={product.image?.url} alt={product.title} />
                        <S.ProductTitle>{product.title}</S.ProductTitle>
                        <S.ProductPrice>
                            {product.price === product.discountedPrice ? (
                                <span>{product.price}</span>
                            ) : (
                            <div className="discounted-price">
                                <span className="on-sale-price">{product.discountedPrice} NOK</span>
                                <span className="old-price">Originally: {product.price}</span>
                            </div>
                            )}
                        </S.ProductPrice>
                        <Link to={`/product/${product.id}`}>
                            <button>View</button>
                        </Link>
                    </S.ProductCard>
                ))}
            </S.ProductsContainer>

        </S.Main>
    );
}

export default Home;
