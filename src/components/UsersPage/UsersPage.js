import { CNavbarBrand, CCollapse, CDropdown, CNavbar, CNavLink, CNavbarNav, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import React, { Fragment } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { UsersTable } from './UsersTable';
import '/Users/aleksandr/Frontend/project1/src/App.scss';







export function UsersPage() {


    return (
        <Fragment>
            <NavBar />
            <UsersTable />
        </Fragment>


    )
};


