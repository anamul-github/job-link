import React, { useState, useEffect } from 'react';
import Loader from '../Shared/Loader/Loader';
import { Link } from 'react-router-dom';

const BdCompanies = () => {
    const [BdCompanies, setBdCompanies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://job-link-server.vercel.app/bdCompanies')
            .then(res => res.json())
            .then(data => {
                setBdCompanies(data);
                setLoading(false);
            })
    }, []);

    return (
        <div className='bg-black text-white pt-10'>
            <h2 className='text-4xl font-bold text-center p-5'>Top Companies in Bangladesh</h2>
            {loading && <div className="flex justify-center items-center"><Loader /></div>}
            {!loading &&
                <div className="container mx-auto px-10 pt-5 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10">
                    {BdCompanies.map(company =>
                        <div className="border rounded-lg shadow-lg" key={company.id}>
                            <div className="p-4 py-8">
                                <h2 className="font-bold text-xl mb-2">Company Name: {company.name}</h2>
                                <p className="text-white-600">Location: {company.location}</p>
                                <Link>
                                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                                        View Details
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

export default BdCompanies;
