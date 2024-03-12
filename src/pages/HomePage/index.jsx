import Loader from "../../components/Loader";
import { useApi } from "../../hooks/useApi";
import * as S from "./index.styles";

function Home() {
    const { data, isLoading, isError} = useApi('https://v2.api.noroff.dev/online-shop');
    console.log(data);

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <div>Error</div>
    }
    return (
        <main>
            <S.Heading>Products</S.Heading>
            <S.ProductsContainer>
                {data && data.map((product) => (
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
                    </S.ProductCard>
                ))}
            </S.ProductsContainer>

        </main>
    );
}

export default Home;