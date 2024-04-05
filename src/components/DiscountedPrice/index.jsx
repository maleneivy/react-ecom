import { DiscountByPercentage } from "./index.styles";

function calculateDiscountedPercentage(originalPrice, discountedPrice) {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount/originalPrice*100);
    return discountPercentage.toFixed(0);
};

function DiscountedPrice({ originalPrice, discountedPrice }) {
    const discountPercentage = calculateDiscountedPercentage(originalPrice, discountedPrice);

    if (discountedPrice < originalPrice) {
        return (
            <DiscountByPercentage>Save {discountPercentage}%</DiscountByPercentage>
        );
    } else {
        return null;
    }
};

export default DiscountedPrice;