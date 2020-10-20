import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log("holi");

    return (
        <div>
            <small>{value}</small>
        </div>
    )
});
