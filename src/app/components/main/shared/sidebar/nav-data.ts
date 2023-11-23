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
                routeLink: 'list/products',
                label: 'All Products'
            },
            {
                routeLink: 'add/product',
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
                        items:[
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