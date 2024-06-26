import { Button } from "./index.styles";

const BaseButton = ({children, ...props}) => {
    return <Button {...props}>{children}</Button>;
};

export default BaseButton; 
