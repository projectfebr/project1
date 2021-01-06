import { CDataTable } from '@coreui/react';
import React from 'react';


export function UsersTable(props) {

    const fields = [
        { key: 'Наименование', _style: { width: '40% ' } },
        { key: 'Тип', _style: { width: '20%' } },
        { key: 'Стоимость', _style: { width: '20%' } }
    ]

    return (
        <CDataTable
            items={props.users.map(
                (item) => {
                    return {
                        Наименование: item.name,
                        Тип: item.type,
                        Стоимость: item.price,
                    }
                })}
            fields={fields}
            hover
        />
    )
};
