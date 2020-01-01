import React from 'react';
import useGlobal from '../Store';

export const Counter = () => {
    const [globalState, globalActions] = useGlobal();
    const {
        requests,
        success,
        fail
    } = globalState.counters;

    return (
        <p>
            {requests} Request <br />{" "}
            <span className="success">{success} Success</span>
            <span className="fail"> {fail} Fails </span>
        </p>
    )
}