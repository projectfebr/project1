import { CDataTable, CCollapse, CCardBody, CButton, CBadge } from '@coreui/react';
import React from 'react';
import '/Users/aleksandr/Frontend/project1/src/App.scss';


export function UsersTable(props) {

    const fields = [
        { key: 'Name', _style: { width: '40% ' } },
        { key: 'Type', _style: { width: '20%' } },
        { key: 'Price', _style: { width: '20%' } }
    ]

    return (
        <CDataTable
            items={props.users.map((item) => {
                return {
                    Name: item.name,
                    Type: item.type,
                    Price: item.price,
                }
            })}
            fields={fields}
            // itemsPerPage={5}
            hover
        // sorter
        />
    )
};
