import React from 'react';
import useGlobal from '../Store';

const mapRepos = repos => {
    return repos.map(repo => (
        <a 
        key={repo.id}
        href=""
        target="_blank"
        rel="noopener noreferrer"
        >
            <h3>{repo.name}</h3>
        </a>
    ))
}

export const Repos = () => {
    const [globalState, globalActions] = useGlobal();
    const {status, repos} = globalState;
    return (
        <React.Fragment>
            {status === "LOADING" && <h4>Loading...</h4> }
            {status === "SUCCESS" && mapRepos(repos) }
            {status === "EMPTY" && <h4>This user have zero repos</h4> }
            {status === "NOT_FOUND" && <h4>404 - User Not Found</h4> }
            {status === "ERROR" && <h4>Connection Error</h4> }
        </React.Fragment>
    )
}