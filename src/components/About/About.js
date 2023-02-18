import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg px-10 py-8">
            <div className="flex justify-center mb-6">
                <h2 className="text-4xl font-bold text-gray-800">About JobLink</h2>
            </div>
            <p className="text-2xl text-gray-700 mb-4">
                At JobLink, we're dedicated to connecting talented job seekers with top employers across industries. Whether you're a recent graduate or an experienced professional, we've got you covered.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li className='text-lg'>
                    <span className="font-bold">Job Search:</span> Our job search tool allows you to filter and sort job listings by location, industry, job type, experience level, and more. You can also set up alerts to receive notifications when new job openings that match your criteria are posted.
                </li>
                <li className='text-lg'>
                    <span className="font-bold">Profile Creation:</span> Creating a profile on JobLink is simple and easy. Upload your resume, add your skills and experience, and highlight your achievements. This information will help employers find you and invite you to apply for relevant job openings.
                </li>
                <li className='text-lg'>
                    <span className="font-bold">Application Tracking:</span> Keeping track of job applications can be a daunting task. With JobLink, you can easily track the status of each application and receive updates on your progress.
                </li>
                <li className='text-lg'>
                    <span className="font-bold">Career Resources:</span> We also offer a range of resources to help you build your career, including resume and cover letter templates, interview tips, and career advice from industry experts.
                </li>
            </ul>
            <p className="text-lg text-gray-700">
                Ready to take the next step in your career? Join <Link to="/" className='text-blue-600 underline-offset-2'>JobLink</Link> today and start exploring your options.
            </p>
        </div>
    );
};

export default About;
