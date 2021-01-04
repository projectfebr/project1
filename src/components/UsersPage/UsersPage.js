import { CNavbarBrand, CCollapse, CDropdown, CNavbar, CCardBody, CCardSubtitle, CCard, CCardTitle, CCardHeader, CCardText, CNavLink, CCardFooter, CNavbarNav, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import React, { Fragment, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { UsersTable } from './UsersTable';
import '/Users/aleksandr/Frontend/project1/src/App.scss';

export function UsersPage() {

    const [users, setUsers] = useState(
        [
            { id: 0, name: 'John Doe', type: 'License', price: '34434' },
            { id: 1, name: 'John Doe', type: 'License', price: '34434' },
            { id: 2, name: 'John Doe', type: 'License', price: '34434' },
            { id: 3, name: 'John Doe', type: 'License', price: '34434' },
            { id: 4, name: 'John Doe', type: 'License', price: '34434' },
            { id: 5, name: 'John Doe', type: 'License', price: '34434' },
            { id: 6, name: 'John Doe', type: 'License', price: '34434' },
        ]
    )

    return (
        <Fragment>
            <NavBar />
            <CCard>
                <CCardBody>
                    <CCardText>
                        <UsersTable users={users} />
                    </CCardText>
                </CCardBody>
                <CCardFooter>
                    Price per month: {users.reduce((accum, curItem) => accum + (parseInt(curItem.price)), 0)}
                </CCardFooter>
            </CCard>
        </Fragment>
    )
};


