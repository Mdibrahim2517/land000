import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';

import config from 'config';

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        THEECAST
    </ButtonBase>
);

export default LogoSection;
