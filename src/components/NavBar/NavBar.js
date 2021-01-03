import { CNavbarBrand, CCollapse, CDropdown, CNavbar, CNavLink, CNavbarNav, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import React from 'react';
import '/Users/aleksandr/Frontend/project1/src/App.scss';







export function NavBar() {


    return (
        <div>
            <CNavbar expandable="sm" color="primary" >
                {/* <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} /> */}
                <CNavbarBrand>
                    Natiwi
                </CNavbarBrand>
                <CCollapse show={true} navbar>
                    <CNavbarNav>
                        <CNavLink>Home</CNavLink>
                        <CNavLink>Link</CNavLink>
                    </CNavbarNav>
                    <CNavbarNav className="ml-auto">
                        <CDropdown inNav>
                            <CDropdownToggle color="primary">
                                User
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem>Account</CDropdownItem>
                                <CDropdownItem>Settings</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </CNavbarNav>
                </CCollapse>
            </CNavbar>
        </div>
    )


};