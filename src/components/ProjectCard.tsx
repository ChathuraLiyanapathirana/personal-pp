import Image from 'next/image'
import React from 'react'

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
        <div
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-2 lg:p-4"
        >
            <span
                className={`absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-600 ${toColor}`}
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">By {by}</p>
                </div>
            </div>

            <div className="-mt-2">
                <p className="text-pretty text-sm">
                    {description}
                </p>
            </div>

            {job && <dd className="text-xs text-gray-500 -mt-4">
                {job}
            </dd>}

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600 flex">
                        <a href={link} className='text-lime-600'>
                            {linkLabel}
                        </a>
                        {
                            link2 && <a href={link2} className='text-orange-600'>
                                , {linkLabel2}
                            </a>
                        }
                    </dt>

                    <dd className="text-xs text-gray-500">
                        References
                    </dd>
                </div>

            </dl>
        </div>
    )
}

export default ProjectCard