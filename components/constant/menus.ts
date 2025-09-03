export const navLinks = [
    {
        id: 1,
        url: '/',
        label: 'Home Page',
    },
    {
        id: 2,
        url:'/about_us',
        label: "Who We Are",
        subMenu: [
            {
                id: 6,
                url: '/our_work',
                label: "our work",
            },
            {
                id: 7,
                url: '/our_people',
                label: "our people",
            },
        ]
    },
    {
        id: 3,
        url: '/our_service',
        label: "What We Do",
    },
    {
        id:4,
        url: '/join_our_team',
        label: "Join Our Team",
    },
    {
        id: 5,
        url: "/contact",
        label: "Get in Touch"
    }
];

export const adminNavLinks = [
    {
        id: 1,
        url: '/admin/dashboard',
        label: 'Dashboard',
    },
    {
        id: 2,
        url: '/admin/jobs',
        label: 'Jobs',
    },
    {
        id: 3,
        url: '/admin/applicants',
        label: 'Applicants',
    },
    {
        id: 4,
        url: '/admin/message',
        label: 'Contact',
    },
    {
        id: 5,
        url: '/admin/our_works',
        label: 'Our Works',
    },
    {
        id: 6,
        url: "/admin/infos",
        label: "Company Info"
    },
    {
        id: 7,
        url: "/admin/clients",
        label: "Clients",
    }
   
];