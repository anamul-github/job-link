import React from 'react';
import BdCompanies from '../BdCompanies/BdCompanies';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../FresherJobs/FresherJobs';
import ToggleButton from '../ToggleButton/ToggleButton';

const Home = () => {
    return (
        <div>
            <ToggleButton></ToggleButton>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <BdCompanies></BdCompanies>

        </div>
    );
};

export default Home;