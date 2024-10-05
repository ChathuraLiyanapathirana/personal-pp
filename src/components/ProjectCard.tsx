import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

type Props = {
    title: string;
    by: string;
    description: string;
    job?: string;
    link: string;
    linkLabel: string;
    link2?: string;
    linkLabel2?: string;
    toColor: string
}

const ProjectCard = ({
    title, by, description, link, linkLabel, link2, linkLabel2, job, toColor
}: Props) => {
    return (
        <CardContainer className="inter-var w-full">
            <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] max-h-72 rounded-xl p-6 border  ">
                <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">By {by}</p>
                    </div>
                </CardItem>
                <CardItem
                    translateZ="70"
                >
                    <div className="-mt-2">
                        <p className="text-pretty text-sm">
                            {description}
                        </p>
                    </div>
                </CardItem>
                {job &&
                    <CardItem translateZ="70">
                        <dd className="text-xs text-gray-500 -mt-4">
                            {job}
                        </dd>
                    </CardItem>}

                <CardItem translateZ="80">
                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600 flex">
                                <a href={link} target='_blank' className='text-lime-600'>
                                    {linkLabel}
                                </a>
                                {
                                    link2 && <a href={link2} target='_blank' className='text-orange-600'>
                                        , {linkLabel2}
                                    </a>
                                }
                            </dt>

                            <dd className="text-xs text-gray-500">
                                References
                            </dd>
                        </div>

                    </dl>
                </CardItem>
                <span
                    className={`absolute inset-x-0 bottom-0 h-2 rounded-b-lg bg-gradient-to-r from-gray-600 ${toColor}`}
                ></span>
            </CardBody>
        </CardContainer>
        // <div
        //     className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-2 lg:p-4"
        // >
        //     <span
        //         className={`absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-600 ${toColor}`}
        //     ></span>

        //     <div className="sm:flex sm:justify-between sm:gap-">
        //         <div>
        //             <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        //                 {title}
        //             </h3>

        //             <p className="mt-1 text-xs font-medium text-gray-600">By {by}</p>
        //         </div>
        //     </div>

        //     <div className="-mt-2">
        //         <p className="text-pretty text-sm">
        //             {description}
        //         </p>
        //     </div>

        //     {job && <dd className="text-xs text-gray-500 -mt-4">
        //         {job}
        //     </dd>}

        //     <dl className="mt-6 flex gap-4 sm:gap-6">
        //         <div className="flex flex-col-reverse">
        //             <dt className="text-sm font-medium text-gray-600 flex">
        //                 <a href={link} className='text-lime-600'>
        //                     {linkLabel}
        //                 </a>
        //                 {
        //                     link2 && <a href={link2} className='text-orange-600'>
        //                         , {linkLabel2}
        //                     </a>
        //                 }
        //             </dt>

        //             <dd className="text-xs text-gray-500">
        //                 References
        //             </dd>
        //         </div>

        //     </dl>
        // </div>
    )
}

export default ProjectCard