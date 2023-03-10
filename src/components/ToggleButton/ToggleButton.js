import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import './ToggleButton.css';

function ToggleButton({ onToggle }) {
    const [isEnabled, setIsEnabled] = useState(false);

    function handleClick() {
        setIsEnabled(!isEnabled);
        onToggle(!isEnabled);
    }

    return (
        <div className="flex justify-center items-center h-screen banner-gif">
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h1 className="text-3xl font-bold pb-4">Find Your Dream Job</h1>
                <div className="flex items-center">
                    <Switch
                        checked={isEnabled}
                        onChange={handleClick}
                        className={`${isEnabled ? 'bg-blue-500' : 'bg-gray-200'
                            } relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                        <span className="sr-only">Toggle</span>
                        <span
                            className={`${isEnabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                    </Switch>
                    <span
                        className={`ml-3 text-lg font-medium ${isEnabled ? 'text-blue-500' : 'text-gray-900'
                            }`}
                    >
                        {isEnabled ? 'Job Poster' : 'Job Seeker'}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ToggleButton;
