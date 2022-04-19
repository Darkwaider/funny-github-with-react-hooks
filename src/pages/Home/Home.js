import React, {useContext} from 'react';
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Alert from "../components/Alert/Alert";
import {GithubContext} from "../Context/github/githubContext";

const Home = () => {

    const {loading, users} = useContext(GithubContext);

    return (
        <div>
            <Alert alert={{text: 'text'}}/>
            <Search/>
            <div className="row">
                {
                    loading
                        ?
                }
            </div>
        </div>
    );
};

export default Home;