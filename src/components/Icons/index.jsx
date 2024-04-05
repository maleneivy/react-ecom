import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { AddIcon, BarsIcon, CrossIcon, DeleteIcon, GoBackIcon, SubTractIcon } from './index.styles';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export const ClosedHamburgerMenu = () => {
    return <BarsIcon icon={faBars} className="bars-icon" />
};

export const OpenHamburgerMenu = () => {
    return <CrossIcon icon={faX} />
};

export const ArrowLeft = () => {
    return <GoBackIcon icon={faArrowLeft} />
};

export const TrashCan = () => {
    return <DeleteIcon icon={faTrashCan} />
};

export const Add = () => {
    return <AddIcon icon={faPlus} />
};

export const SubTract = () => {
    return <SubTractIcon icon={faMinus} />
}
