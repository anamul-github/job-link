import React from 'react';
import BdCompanies from '../BdCompanies/BdCompanies';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../FresherJobs/FresherJobs';
import ToggleButton from '../ToggleButton/ToggleButton';
import WorldCompanies from '../WorldCompanies/WorldCompanies';

const Home = () => {
    return (
        <div>
            <ToggleButton></ToggleButton>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <BdCompanies></BdCompanies>
            <WorldCompanies></WorldCompanies>
        </div>
    );
};

export default Home;