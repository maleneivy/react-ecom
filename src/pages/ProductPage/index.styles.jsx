import { styled } from "styled-components";

export const ProductCard = styled.div`
max-width: 1000px;
display: flex;
background-color: ${(props) => props.theme.color.light};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
border-radius: ${(props) => props.theme.borderRadius.smooth};
margin: 1rem auto; 
position: relative;

@media screen and (max-width: 1050px) {
    margin: 1rem 4rem;
};

@media screen and (max-width: 900px) {
    flex-direction: column;
}

@media screen and (max-width: 700px) {
    margin: 1rem 2rem;
}
`;

export const ProductImage = styled.img`
max-height: 400px;
margin: 1rem;
border-radius: ${(props) => props.theme.borderRadius.smooth};

@media screen and (max-width:900px) {
    object-fit: cover;
}
`;

export const ProductTextContentContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
`;

export const ProductHeading = styled.h1`
margin-bottom: 0;
`;

export const ProductTags = styled.p`
font-size: ${(props) => props.theme.fontSize.xSmall}; 
margin-top: 0;
`

export const BackButtonContainer = styled.div`
position: absolute;
`;

export const ReviewsContainer = styled.div`
max-width: 1000px;
background-color: ${(props) => props.theme.color.light};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin: 1rem auto; 
padding-bottom: 1rem;
border-radius: ${(props) => props.theme.borderRadius.smooth};

@media screen and (max-width: 1050px) {
    margin: 1rem 4rem;
};

@media screen and (max-width: 900px) {
    flex-direction: column;
}

@media screen and (max-width: 700px) {
    margin: 1rem 2rem;
}
`;

export const ReviewsContent = styled.div`
margin: 1rem;
`;

export const ReviewText = styled.div`
margin: 1rem;
margin-bottom: 2rem;

.review-p {
    font-style: italic;
}

.rating-p {
    text-align: end;
}
`;

export const ReviewsHeading = styled.h2`
padding: 1rem;
margin-bottom: 0;
`;

export const HorizontalLine = styled.hr`
border-top: ${(props) => props.theme.color.secondary};
`;

export const StarRatingContainer = styled.div`
display: flex;
position: absolute;
`;

export const ReviewLength = styled.div`
padding-left: 0.3rem;
`;

export const ReviewLink = styled.a`
color: ${(props) => props.theme.color.secondary};
`;