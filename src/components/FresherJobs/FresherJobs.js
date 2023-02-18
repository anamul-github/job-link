import React, { useState, useEffect } from 'react';
import Loader from '../Shared/Loader/Loader';
// import { Link } from 'react-router-dom';

const FresherJobs = () => {
    const [fresherJobs, setFresherJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/fresher-jobs')
            .then(res => res.json())
            .then(data => {
                setFresherJobs(data);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            {loading && <div className="flex justify-center items-center h-screen"><Loader /></div>}
            {!loading &&
                <div className="container mx-auto my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {fresherJobs.map(job =>
                        <div className="border rounded-lg shadow-lg" key={job.id}>
                            {/* <img className="object-cover w-full h-48" src={.img} alt={job.name} /> */}
                            <div className="p-4">
                                <h2 className="font-bold text-xl mb-2">{job.position_name}</h2>
                                <p className="text-gray-600">{job.job_location}</p>
                                {/* <Link to={`/contentDetails/${job.company_name}`}>
                                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                                        Content Details
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default FresherJobs;
