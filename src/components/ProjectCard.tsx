import React from 'react'

const toColorToHex: Record<string, string> = {
    "to-lime-600": "#65a30d",
    "to-red-500": "#ef4444",
    "to-blue-600": "#2563eb",
    "to-sky-600": "#0284c7",
    "to-purple-600": "#9333ea",
    "to-green-600": "#16a34a",
    "to-red-600": "#dc2626",
    "to-yellow-600": "#ca8a04",
    "to-gray-300": "#d1d5db",
}

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
// redeployment comment
const ProjectCard = ({
    title, by, description, link, linkLabel, link2, linkLabel2, job, toColor
}: Props) => {
    return (
        <div
            className="block border-2 border-black dark:border-white bg-gray-300 dark:bg-gray-600 p-4 hover:bg-lime-100 dark:hover:bg-gray-500 focus-within:ring-2 focus-within:ring-gray-300 dark:focus-within:ring-white focus-within:outline-0 sm:p-6 w-full min-w-0 max-h-80"
            style={{ boxShadow: `4px 4px 0 0 ${toColorToHex[toColor] ?? "#000"}` }}
        >
            <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                    {title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-200">By {by}</p>
            </div>

            <div className="-mt-2">
                <p className="text-pretty text-sm text-gray-700 dark:text-gray-200">
                    {description}
                </p>
            </div>

            {job && (
                <dd className="text-xs text-gray-500 dark:text-gray-400 -mt-4">
                    {job}
                </dd>
            )}

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600 dark:text-white flex">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:underline">
                            {linkLabel}
                        </a>
                        {link2 && (
                            <a href={link2} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                                , {linkLabel2}
                            </a>
                        )}
                    </dt>
                    <dd className="text-xs text-gray-500 dark:text-white">References</dd>
                </div>
            </dl>
        </div>
    )
}

export default ProjectCard