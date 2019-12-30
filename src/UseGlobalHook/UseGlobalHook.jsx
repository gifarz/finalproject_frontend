import React, {useState} from 'react';
import Globalhook from 'use-global-hook';
// import usePersistedState from '@plq/use-persisted-state'


const initialState = {
    counter: 0
}

// const [state, setState] = useState({
//     counter: 0
// })

// const initialState = usePersistedState({counter: 0})

const actions = {
    addToCounter: (store, amount) => {
        const newCounterValue = store.state.counter + amount;
        store.setState({counter: newCounterValue});
    }
}

const useGlobal = Globalhook(React, initialState, actions);

export const UseGlobalHook = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <div>
            <p>
                counter: {globalState.counter}
            </p>
            <button
            type="button"
            onClick={() => globalActions.addToCounter(1)}
            >+1 to global
            </button>
        </div>
    )
}