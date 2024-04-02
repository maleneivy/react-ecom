import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { BarsIcon, CrossIcon, GoBackIcon } from './index.styles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const ClosedHamburgerMenu = () => {
    return <BarsIcon icon={faBars} className="bars-icon" />
};

export const OpenHamburgerMenu = () => {
    return <CrossIcon icon={faX} />
};

export const ArrowLeft = () => {
    return <GoBackIcon icon={faArrowLeft} />
}