import { Typography } from '@mui/material';

import NavGroup from './NavGroup';
import pages from 'menuItems/pages';

const getMenuItems = () => {
    const role = 1;
    switch (role) {
        case 1:
            return [pages];
        default:
            return [pages];
    }

}
const MenuList = () => {
    const menuItems = getMenuItems();
    const navItems = menuItems.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
