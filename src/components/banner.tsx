import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <Image className='rounded-full' src="https://i.ibb.co/sWC8vdz/a79ae9b6-cc28-42c5-a54f-deff077e28f1.jpg" alt='Rakib' width={200} height={200} />
            </div>
            <div className='flex space-x-7'>
                <div>
                    Rakibur Rahman Rakib
                </div>
                <div><Link href="https://drive.google.com/drive/folders/1T_Jh25PjmeJs0UTJsKXeZ7Qnz6M1Fhw-?usp=sharing" target='_blank'>Get My Resume</Link></div>
            </div>
        </div>
    );
};

export default Banner;
