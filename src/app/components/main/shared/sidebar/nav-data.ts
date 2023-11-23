import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard/',
        icon: 'fas fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'dashboard/products',
        icon: 'fas fa-box',
        label: 'Products',
        items: [
            {
                routeLink: 'dashboard/products',
                label: 'All Products'
            },
            {
                routeLink: 'dashboard/products',
                label: 'Add Product',
            },
            {
                routeLink: 'list/categories',
                label: 'Categories'
            },
            {
                routeLink: 'add/category',
                label: 'Add Category',
                items: [
                    {
                        routeLink: 'list/categories',
                        label: 'All Categories'
                    },
                    {
                        routeLink: 'add/category',
                        label: 'Add Category',
                        items: [
                            {
                                routeLink: 'list/categories',
                                label: 'All Categories'
                            },
                            {
                                routeLink: 'add/category',
                                label: 'Add Category',
                            }

                        ]
                    }

                ]
            }
        ]
    }
];