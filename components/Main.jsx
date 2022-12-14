import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] h-full w-full mx-auto  flex justify-center items-center">
                <div>
                    <p className="p-2 text-sm tracking-widest text-gray-400 uppercase">
                        {`LET'S BUILD SOMTHING AMAZING TOGETHER`}
                    </p>
                    <h1 className="py-4">
                        Hello, {`I'm `}
                        <span className="text-green-bright">Jafar</span>
                    </h1>
                    <h2 className="py-2">A Front-End Developer</h2>
                    <p className="py-4 pb-5 m-auto max-w-[80%] md:max-w-[70%] text-gray-200 md:tracking-wide">
                        I am{' '}
                        <span className="text-green-bright">
                            Md Jafar Sadique
                        </span>
                        . I am a front-end developer who specializes in creating
                        high-quality web apps. I am currently concentrating on
                        developing responsive front-end apps while studying
                        back-end technologies.
                    </p>
                    <a href="https://drive.google.com/u/0/uc?id=16XCu-sT1g_YKoACZZtt09blKweKcTYz-&export=download">
                        <button className="mb-6 duration-200 ease-in bg-transparent border shadow-none border-green-bright text-green-bright hover:bg-green-bright hover:text-white">
                            Resume
                        </button>
                    </a>
                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-5 text-green-bright">
                        <Link
                            href={`https://www.linkedin.com/in/md-jafar-sadique/`}
                            target="_blank"
                            className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link
                            href={`https://github.com/10Sadique`}
                            target="_blank"
                            className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href={`mailto:jafarsjahan@gmail.com`}
                            className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                        >
                            <AiOutlineMail />
                        </Link>
                        {/* <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25">
                            <BsFillPersonLinesFill />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
