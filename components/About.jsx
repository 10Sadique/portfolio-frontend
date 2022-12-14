import Image from 'next/image';
import Link from 'next/link';
import jahan from '../public/assets/jahan.jpg';

const About = () => {
    return (
        <div
            id="about"
            className="flex items-center w-full px-5 py-16 md:h-screen"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="py-4 text-xl tracking-widest uppercase text-green-bright">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2">
                        {`I have completed my bachelor's in Computer Science and Telecommunication Engineering from Noakhali Science and Technology University. I enjoy developing web applications. I began learning HTML and CSS in 2018 and accomplished a few little projects with them.`}
                    </p>
                    <p className="py-2">
                        {`Then I decided to dive into the realm of web programming by learning JavaScript. I was astounded by how interactive it makes websites. I've been working with React from 2022 and have completed numerous large projects using it. I also have experience with NodeJS, Express, MongoDB, and TypeScript. I intend to become a full-stack developer. At the moment, I'm learning NextJS, Prisma, and tRPC.`}
                    </p>
                    <p className="py-2 underline cursor-pointer">
                        <Link href={`/#projects`}>
                            Check out some of my latest projects.
                        </Link>
                    </p>
                </div>
                <div className="w-full h-auto m-auto overflow-hidden duration-300 border-8 shadow-md rounded-xl shadow-green-bright/0 hover:shadow-lg hover:shadow-green-bright/20 ease lg:hover:scale-110 border-green-bright">
                    <Image
                        className="w-full scale-110"
                        src={jahan}
                        alt=""
                        width={500}
                        height={500}
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
