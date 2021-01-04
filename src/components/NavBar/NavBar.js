import { CNavbarBrand, CCollapse, CDropdown, CInput, CModal, CModalHeader, CModalBody, CModalFooter, CNavbar, CNavLink, CNavbarNav, CDropdownToggle, CDropdownMenu, CCardHeader, CButton, CDropdownItem, CNavItem, CCard, CCardFooter } from '@coreui/react';
import React, { useState } from 'react';
import './NavBar.css';


export function NavBar() {


    const [modal, setModal] = useState(false);

    const [balance, setBalance] = useState(2343434);
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div>
            <CNavbar expandable="sm" color="primary" >
                {/* <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} /> */}
                <CNavbarBrand>
                    Natiwi
                </CNavbarBrand>
                <CCollapse show={true} navbar>
                    <CNavbarNav>
                        <CNavItem><CButton color='success' onClick={toggle}>Пополнить баланс</CButton></CNavItem>
                        <CNavItem className='balanceLableClass'>Баланс: {balance}</CNavItem>
                        <CNavItem><CButton color='success'>Добавить сервис или лицензию</CButton></CNavItem>

                        {/* <CNavLink>Link</CNavLink> */}
                    </CNavbarNav>
                    {/* <CNavbarNav className="ml-auto">
                        <CDropdown inNav>
                            <CDropdownToggle color="primary">
                                User
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem>Account</CDropdownItem>
                                <CDropdownItem>Settings</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </CNavbarNav> */}
                </CCollapse>
            </CNavbar>

            <>

                <CModal
                    show={modal}
                    onClose={toggle}
                >
                    <CModalHeader closeButton>Пополнить баланс</CModalHeader>
                    <CModalBody>
                        <CInput
                            type="number"
                            placeholder="Введите количество"
                            onChange={e => console.log(e.target.value)}
                        >

                        </CInput>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary">Пополнить</CButton>{' '}
                        <CButton
                            color="secondary"
                            onClick={toggle}
                        >Отмена</CButton>
                    </CModalFooter>
                </CModal>
            </>

        </div>
    )


};