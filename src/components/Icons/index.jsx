import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { BarsIcon, CrossIcon } from './index.styles';

export const ClosedHamburgerMenu = () => {
    return <BarsIcon icon={faBars} className="bars-icon" />
};

export const OpenHamburgerMenu = () => {
    return <CrossIcon icon={faX} />
};