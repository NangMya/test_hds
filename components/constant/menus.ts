import { HiRefresh } from "react-icons/hi";

export const navLinks = [
    {
        id: 1,
        url: '/',
        label: 'Home Page',
    },
    {
        id: 2,
        url: '/about_us',
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
        id: 4,
        url: '/join_our_team',
        label: "Join Our Team",
    },
    {
        id: 5,
        url: "/contact",
        label: "Get in Touch"
    }
];

export interface MenuItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    subItems?: { label: string; href: string }[];
}
export const adminNavLinks = [
    {
        label: "Dashboard",
        href: "/admin/dashboard",
    },
    {
        label: "Jobs",
        href: "/admin/jobs",
    },
    {
        label: "Applications",
        href: "/admin/applicants",
    },
    {
        label: "Case Study",
        href: "/admin/our_works"
    },
    {
        label: "Contacts",
        href: "/admin/contacts"
    },
    {
        label: "Company Info",
        subItems: [
            { label: "About", href: "/admin/infos" },
        ]
    },

    {
        label: "Setup",
        subItems: [
            { label: "Clients", href: '/admin/clients' },
            { label: "Departments", href: '/admin/departments' },
            { label: "Members", href: '/admin/members' },
            { label: "Awards", href: '/admin/awards' },
            { label: "Admin", href: '/admin/admin' },
            { label: "Activities", href: '/admin/hds_activities' },
        ]
    }
]
