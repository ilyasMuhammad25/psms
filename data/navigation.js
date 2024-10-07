const navigation = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Tentang club",
        children: [
            {
                label: "Sejarah",
                href: "/sejarah",
            },
            {
                label: "Pemain",
                href: "/team",
            },
            {
                label: "Sponsor",
                href: "/sponsor",
               
            },
            
        ],
    },
    {
        label: "PSMS Store",
        href: "/shop",
            
    },
    { label: "Berita", href: "/blog" },
    { label: "Video", href: "/video" },
  
    {
        label: "Blog",
        children: [
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "Blog Grid",
                href: "/blog-grid",
            },
            {
                label: "Blog Details",
                href: "/blog-details",
            },
        ],
    },
    { label: "Tiket", href: "/tiket" },
];

export default navigation;
