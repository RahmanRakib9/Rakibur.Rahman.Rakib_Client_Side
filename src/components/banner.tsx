import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <Image className='rounded-full' src="https://i.ibb.co/9Vp93mm/8033089f-dfce-4c75-b8f2-9593314d5b91.jpg" alt='Rakib' width={200} height={200} />
            </div>
            <div className='flex space-x-7'>
                <div>
                    Rakibur Rahman Rakib
                </div>
                <div>Get My Resume</div>
            </div>
        </div>
    );
};

export default Banner;