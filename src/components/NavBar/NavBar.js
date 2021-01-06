import { CNavbarBrand, CCollapse, CInput, CModal, CModalHeader, CModalBody, CModalFooter, CNavbar, CNavbarNav, CButton, CNavItem, } from '@coreui/react';
import React, { useState } from 'react';
import './NavBar.css';


export function NavBar(props) {

    const [newService, setnewService] = useState({ id: 12, name: '', type: '', price: 0 })
    const [input, setInput] = useState('');
    const [modalBalanceWindow, setModalBalanceWindow] = useState(false);
    const [modalAddService, setmodalAddService] = useState(false)

    const toggleModalAddService = () => {
        setmodalAddService(!modalAddService);
    }

    const toggleBalanceWindow = () => {
        setModalBalanceWindow(!modalBalanceWindow);
    }

    return (
        <div>
            <CNavbar expandable="sm" color="primary" >
                <CNavbarBrand>
                    Natiwi
                </CNavbarBrand>
                <CCollapse show={true} navbar>
                    <CNavbarNav>
                        <CNavItem><CButton color='success' onClick={toggleBalanceWindow}>Пополнить баланс</CButton></CNavItem>
                        <CNavItem className='balanceLableClass'>Баланс: {props.balance}</CNavItem>
                        <CNavItem><CButton show={false} color='success' onClick={toggleModalAddService}>Добавить сервис или лицензию</CButton></CNavItem>
                    </CNavbarNav>
                </CCollapse>
            </CNavbar>

            <>
                <CModal
                    show={modalBalanceWindow}
                    onClose={toggleBalanceWindow}
                >
                    <CModalHeader closeButton>Пополнить баланс</CModalHeader>
                    <CModalBody>
                        <CInput
                            type="number"
                            placeholder="Введите сумму пополнения"
                            // onChange={e => { buffer = +e.target.value }}
                            onInput={e => { setInput(+e.target.value) }}
                        >
                        </CInput>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="primary"
                            onClick={() => { props.onAddBalance(input); setInput(0); toggleBalanceWindow(); }}
                        >Пополнить</CButton>
                        <CButton
                            color="secondary"
                            onClick={() => { toggleBalanceWindow(); setInput(0) }}
                        >Отмена</CButton>
                    </CModalFooter>
                </CModal>
            </>

            <>
                <CModal
                    show={modalAddService}
                    onClose={toggleModalAddService}
                >
                    <CModalHeader closeButton>Добавить сервис или лицензию</CModalHeader>
                    <CModalBody>
                        <CInput
                            type="text"
                            placeholder="Наименование"
                            // onChange={e => { buffer = +e.target.value }}
                            onInput={e => { setnewService({ ...newService, name: e.target.value }) }}
                        >
                        </CInput>
                        <CInput
                            type="text"
                            placeholder="Тип"
                            // onChange={e => { buffer = +e.target.value }}
                            onInput={e => { setnewService({ ...newService, type: e.target.value }) }}
                        >
                        </CInput>
                        <CInput
                            type="number"
                            placeholder="Стоимость"
                            // onChange={e => { buffer = +e.target.value }}
                            onInput={e => { setnewService({ ...newService, price: e.target.value }) }}
                        >
                        </CInput>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="primary"
                            onClick={() => { props.onAddService(newService); toggleModalAddService(); }}
                        >Добавить</CButton>
                        <CButton
                            color="secondary"
                            onClick={toggleModalAddService}
                        >Отмена</CButton>
                    </CModalFooter>
                </CModal>
            </>
        </div>
    )


};