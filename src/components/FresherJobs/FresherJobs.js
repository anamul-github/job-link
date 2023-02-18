import React, { useState, useEffect } from 'react';
import Loader from '../Shared/Loader/Loader';
import { Link } from 'react-router-dom';

const FresherJobs = () => {
    const [fresherJobs, setFresherJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://job-link-server.vercel.app/fresher-jobs')
            .then(res => res.json())
            .then(data => {
                setFresherJobs(data);
                setLoading(false);
            })
    }, []);

    return (
        <div className='bg-gray-700 text-white lg:h-screen pt-10'>
            <h2 className='text-4xl font-bold text-center p-5'>Fresher Jobs</h2>
            {loading && <div className="flex justify-center items-center"><Loader /></div>}
            {!loading &&
                <div className="container mx-auto px-10 pt-5 text-center my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10">
                    {fresherJobs.map(job =>
                        <div className="border rounded-lg shadow-lg" key={job.id}>
                            <div className="p-4 py-8">
                                <h2 className="font-bold text-xl mb-2">Position: {job.position_name}</h2>
                                <p className="text-white-600">Location: {job.job_location}</p>
                                <p className="text-white-600">Company Name: {job.company_name}</p>
                                <Link to="/login">
                                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                                        Apply
                                    </button>
                                </Link>
                                <Link className='mx-5'>
                                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                                        See All Jobs
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

            }
        </div>
    );
};

export default FresherJobs;
