import { useState } from 'react';
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useApi } from "../../hooks/useApi";
import * as S from "./index.styles";
import { useCartFromLocalStorage } from '../../utils/localStorage/getCart';
import BaseButton from '../../components/BaseButton';

function Home() {
    useCartFromLocalStorage();
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
            <S.TopSection>
            <S.Heading>Products</S.Heading>
            <S.SearchBar 
                type="text" 
                placeholder="Search by title..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </S.TopSection>
            <S.ProductsContainer>
                {filteredProducts.map((product) => (
                    <S.ProductCard key={product.id}>
                        <S.ProductImage src={product.image?.url} alt={product.title} />
                        <S.ProductTTextContent>
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
                            <BaseButton>View</BaseButton>
                        </Link>
                        </S.ProductTTextContent>
                    </S.ProductCard>
                ))}
            </S.ProductsContainer>
        </S.Main>
    );
}

export default Home;
