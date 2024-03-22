import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import Loader from "../../components/Loader";
import * as S from "../ProductPage/index.styles";

function ProductPage() {
    let { id } = useParams();
    const { data: product, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`);

    if(isLoading || product === null) {
        return <Loader />
    }

    if (isError) {
        return <h3>error</h3>
    }

    console.log(product)
    return (
        <>
        <S.ProductCard>
            <S.ProductImage src={product.image?.url} alt={product.title} />
            <S.ProductTextContentContainer>
            <h1>{product.title}</h1>
            <S.ProductTags>
                {product.tags?.map((tag, index) => (
                    <span key={tag}>
                        {tag}
                        {index !== product.tags.length - 1 && ", "}
                    </span>
                ))}
            </S.ProductTags>
             <h3>
                 {product.price === product.discountedPrice ? (
                                <span>{product.price}</span>
                            ) : (
                            <div className="discounted-price">
                                <span className="on-sale-price">{product.discountedPrice} NOK</span>
                                <span className="old-price">Originally: {product.price}</span>
                            </div>
                            )}
             </h3>
            <p>{product.description}</p>
            </S.ProductTextContentContainer>
        </S.ProductCard>
        </>
    );
}

export default ProductPage;
