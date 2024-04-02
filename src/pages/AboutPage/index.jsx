import { GoBackButton } from "../../components/GoBackButton";
import { useCartFromLocalStorage } from "../../utils/localStorage/getCart";
import { AboutContainer, BackButtonContainer, TextContentContainer } from "./index.styles";

function AboutPage() {
    useCartFromLocalStorage();
    return (
        <AboutContainer>
        <BackButtonContainer>
            <GoBackButton />
        </BackButtonContainer>
        <TextContentContainer>
            <h1>Welcome to Omni-things</h1>
            <h2>Your one-stop desitination for all your shopping needs!</h2>
            <p>
                At Omni-things, we believe in providing a seamless shopping experience where you can explore and discover a wide range of products, from electronics and gadgets to fashion, home essentials, and everything in between. With our diverse selection of high-quality items, curated from trusted brands and suppliers, we aim to cater to the diverse needs and preferences of our customers.
            </p>
            <p>
            Our journey began with a simple vision: to create a platform that offers convenience, reliability, and affordability to shoppers worldwide. We are passionate about connecting people with products that enhance their lives, whether it's finding the latest tech gadgets, upgrading your wardrobe with trendy fashion pieces, or transforming your living space with stylish home decor.
            </p>
            <p>
            At Omni-things, customer satisfaction is at the heart of everything we do. We are committed to providing exceptional service, ensuring secure transactions, and delivering products promptly to your doorstep. Our dedicated team works tirelessly to make your shopping experience enjoyable and hassle-free, so you can shop with confidence every time you visit our site.
            </p>
            <p>
            Thank you for choosing Omni-things as your preferred shopping destination. Join us on this exciting journey as we continue to expand our product offerings, innovate our services, and strive to exceed your expectations at every turn.
            </p>
            <p>
                Happy shopping!
            </p>
        </TextContentContainer>
        </AboutContainer>
    )
}

export default AboutPage; 