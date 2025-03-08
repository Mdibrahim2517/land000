const PACKAGES = [
    { name: "Free", MonthlyPrice: 0, yearlyPrice: 1, description: "Get a taste of what Wordtune can do for you" },
    // { name: "Advance", MonthlyPrice: 13.8, yearlyPrice: 6.99, description: "Unleash the power of AI and take your reading & writing to the next level." },
    { name: "Premium", MonthlyPrice: 19.99, yearlyPrice: 9.99, description: "Maximize your productivity with unlimited rewrites and summaries." }
];


const NAVITEMS = [
    {
        name: "Features",
        dropdown: [
            { name: "Paraphrase", href: "/features/paraphrase" },
            { name: "Rewrite", href: "/features/rewrite" },
            { name: "Read And Summarize", href: "/features/read-summarize" },
        ],
    },
    { name: "Plans & Pricing", href: "/pricing" },
    {
        name: "Learn",
        dropdown: [
            { name: "Blog", href: "/learn/blog" },
            { name: "Help center", href: "/learn/help-center" },
            { name: "FAQ", href: "/learn/faq" },
        ],
    },
    { name: "About", href: "/about" },
];

export { NAVITEMS, PACKAGES }