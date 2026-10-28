import Link from 'next/link';
import { FC } from 'react'



const Logo: FC = () => {
    return (
        <Link href="/">
            <span className='font-acumin-semi-cond text-2xl font-bold leading-0 tracking-[-0.03rem]'>
                Yuma.U
            </span>
        </Link>
    );
};

export default Logo;