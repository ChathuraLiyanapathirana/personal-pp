export type ExperienceType = {
    nested?: boolean;
    company: string;
    domain: string;
    product: string;
    duration: string;
    designation: string;
    description: string;
    nestedItems?: ExperienceType[];
};

export type PostType = {
    date: string;
    excerpt: {
        rendered: string;
    };
    _embedded: {
        "wp:featuredmedia": {
            media_details: {
                file: string;
            };
        }[];
    };
    title: {
        rendered: string;
    };
}

export type BlogPostType = {
    title: string;
    date: string;
    image: string;
    description: string;
};

export type ExpertiseType = {
    value: string;
    large?: boolean;
};

export type HtmlRendererType = {
    htmlString: string;
    className?: string;
}

export type AnimatedPathType = {
    d: string;
    className?: string;
    opacity?: string;
    variants?: {
        closed: { d: string };
        open: { d: string };
    };
}

export type SideMenuType = {
    onClickItem: () => void;
    activeSection: string;
};

export type ProjectType = {
    title: string;
    by: string;
    description: string;
    job?: string;
    link: string;
    linkLabel: string;
    link2?: string;
    linkLabel2?: string;
    toColor: string;
};

