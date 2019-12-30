import React from 'react'
import createPersistedState from '@plq/use-persisted-state'

const [usePersistedState, clear] = createPersistedState('example');

export default function SessionStorage() {
    const [count, setCount] = usePersistedState('count', 0)
    const handleIncrement = () => setCount(prevCount => prevCount + 1 )

    return (
        <div>
            {count}
            <button onClick={handleIncrement}>tambah 1</button>
            <button onClick={clear}>reset</button>
        </div>
    )
}