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
    const accent = toColorToHex[toColor] ?? "#22dd55";
    return (
        <article
            className="group flex h-full min-h-0 w-full min-w-0 flex-col rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-brand focus-within:outline-none focus-within:ring-2 focus-within:ring-brand/40 dark:border-white/10 dark:bg-zinc-900/90 sm:p-6"
            style={{ boxShadow: `4px 4px 0 0 ${accent}` }}
        >
            <div className="shrink-0">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white sm:text-xl">
                    {title}
                </h3>
                <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">By {by}</p>
            </div>

            <div className="mt-3 flex min-h-0 flex-1 flex-col gap-3">
                <p className="text-pretty break-words text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {description}
                </p>
                {job ? (
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">{job}</p>
                ) : null}
            </div>

            <dl className="mt-auto shrink-0 border-t border-zinc-200/80 pt-4 dark:border-zinc-700/80">
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    References
                </dt>
                <dd className="mt-2 flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-dim underline-offset-4 transition hover:text-brand hover:underline dark:text-brand"
                    >
                        {linkLabel}
                    </a>
                    {link2 && (
                        <a
                            href={link2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-dim underline-offset-4 transition hover:text-brand hover:underline dark:text-brand"
                        >
                            {linkLabel2}
                        </a>
                    )}
                </dd>
            </dl>
        </article>
    )
}

export default ProjectCard