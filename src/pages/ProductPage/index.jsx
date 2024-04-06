import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import Loader from "../../components/Loader";
import * as S from "../ProductPage/index.styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/Cart/cartSlice";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";
import BaseButton from "../../components/BaseButton";
import { GoBackButton } from "../../components/GoBackButton";
import DiscountedPrice from "../../components/DiscountedPrice";
import { SavePriceContainer } from "../HomePage/index.styles";
import Message from "../../components/Message";
import { useState, useEffect } from "react";
import StarRating from "../../components/StarRating";

function ProductPage() {
    let { id } = useParams();
    const { data: product, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`);
    const dispatch = useDispatch();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                setMessage(null);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [message]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        displayAddedProductMessage(true);
    };

    const displayAddedProductMessage = (success) => {
        if (success) {
            setMessage({ text: "Product added to cart", type: "added-product-success" });
        } else {
            setMessage({ text: "Something went wrong", type: "error" });
        }
    }

    useCartFromLocalStorage();

    if(isLoading || product === null) {
        return <Loader />
    }

    if (isError) {
        return <h3>error</h3>
    }
    return (
        <>
        <S.ProductCard>
            <S.BackButtonContainer>
                <GoBackButton />
            </S.BackButtonContainer>
            <SavePriceContainer>
            <DiscountedPrice 
                            originalPrice={product.price}
                            discountedPrice={product.discountedPrice}
                            />
            </SavePriceContainer>
            <S.ProductImage src={product.image?.url} alt={product.title} />
            <S.ProductTextContentContainer>
            <S.ProductHeading>
            {product.title}
            </S.ProductHeading>
            <S.StarRatingContainer>
            <StarRating rating={product.rating} totalStars={5} />
            <S.ReviewLength>
            {product.reviews && (
        <span>({product.reviews.length})</span>
    )}
            </S.ReviewLength>
            </S.StarRatingContainer>
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
                                <span>{product.price} NOK</span>
                            ) : (
                            <div className="discounted-price">
                                <span className="on-sale-price">{product.discountedPrice} NOK</span>
                                <span className="old-price">Originally: {product.price} NOK</span>
                            </div>
                            )}
             </h3>
            <p>{product.description}</p>
            <div>
            <BaseButton onClick={handleAddToCart}>Add to cart</BaseButton>
            {message && <Message text={message.text} type={message.type} />}
            </div>
            </S.ProductTextContentContainer>
        </S.ProductCard>
        <S.ReviewsContainer>
        <S.ReviewsContent>
        <S.ReviewsHeading>Reviews</S.ReviewsHeading>
        {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                    <S.ReviewText key={review.id}>
                        <p><strong>Username:</strong> {review.username}</p>
                        <p><strong>Description:</strong> {review.description}</p>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        {index !== product.reviews.length - 1 && <S.HorizontalLine />}
                    </S.ReviewText>
                ))
            ) : (
                <Message text="There are no reviews for this product" type="info" />
            )}
        </S.ReviewsContent>
        </S.ReviewsContainer>
        </>
    );
}

export default ProductPage;
