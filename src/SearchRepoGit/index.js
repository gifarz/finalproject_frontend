import React from 'react';
import {SearchForm} from './Component/SearchForm';
import {Counter} from './Component/Counter';
import {Repos} from './Component/Repos';

export default function SearchRepo() {
    return(
        <div>
            <h1>Search Github Repos</h1>
            <SearchForm/>
            <Counter/>
            <Repos/>
        </div>
    )
}