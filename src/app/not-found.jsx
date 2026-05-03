import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                {/* Illustration or Large Text */}
                
                <h1 className="text-9xl font-black text-green-900 tracking-widest">404</h1>

                <div className="mt-8">
                    
                     <h2 className="text-white-800 ">
                        Page Not Found
                    </h2>
                    
                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        This page is not available.
                    </h2>
                  
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                
                        <Link
                            href="/"
                            className="px-6 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-700 shadow-lg shadow-green-200 transition-all"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;