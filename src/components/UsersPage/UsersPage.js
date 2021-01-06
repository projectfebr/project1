import { CCardBody, CCard, CCardText, CCardFooter } from '@coreui/react';
import React, { Fragment } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { UsersTable } from './UsersTable';
import './UsersPage.css'

export function UsersPage(props) {


    return (
        <Fragment>
            <NavBar
                balance={props.balance}
                onAddBalance={input => props.onAddBalance(input)}
                onAddService={newService => props.onAddService(newService)}
            />
            <CCard>
                <CCardBody>
                    <CCardText>
                        <UsersTable class='userTable' users={props.users} />
                    </CCardText>
                </CCardBody>
                <CCardFooter>
                    Стоимость в месяц: {props.users.reduce((accum, curItem) => accum + (parseInt(curItem.price)), 0)}
                </CCardFooter>
            </CCard>
        </Fragment>
    )
};


