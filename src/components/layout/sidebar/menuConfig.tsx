import { IconName } from "@/components/ui/users/icons";
import path from "path";

export interface IconConfig {
    name: IconName,
    className: string
}

export type MenuPath =
    // TODO: if theres no default page, delete "/"
    | "/"
    | "/registration"
    | "/education"
    | "/finance"
    ;

interface ChildConfig {
    name: string;
    path: `${MenuPath}/${string}`
}

type MenuChildren = Record<MenuPath, ChildConfig[]>;

export interface MenuConfig {
    name: string,
    path: MenuPath,
    icon: IconConfig,
    children?: ChildConfig[]
}

const menuChildren: MenuChildren = {
    "/": [],
    "/registration": [],
    "/education": [],
    "/finance": [
        {
            name: 'Dashboard',
            path: '/finance/dashboard'
        },
        {
            name: 'Cost Center',
            path: '/finance/costcenter'
        },
        {
            name: 'Daftar Ulang',
            path: '/finance/reregister'
        },
        {
            name: 'Biaya Operasional',
            path: '/finance/operationalcost'
        },
        {
            name: 'Biaya Pendidikan',
            path: '/finance/educationcost'
        },
        {
            name: 'Rekap Transaksi',
            path: '/finance/transactionrecap'
        },
    ]
}

export const menus: MenuConfig[] = [
    {
        name: "Collapse",
        path: "/",
        icon: {
            name: "collapse",
            className: "w-[24px] stroke-primary"
        },
        children: menuChildren['/']
    },
    {
        name: "PMB",
        path: "/registration",
        icon: {
            name: "pmb",
            className: "w-[24px] stroke-primary"
        },
        children: menuChildren['/registration']
    },
    {
        name: "KBM",
        path: "/education",
        icon: {
            name: "kbm",
            className: "w-[24px] stroke-primary"
        },
        children: menuChildren['/education']
    },
    {
        name: "Keuangan",
        path: "/finance",
        icon: {
            name: "keuangan",
            className: "w-[24px] stroke-primary"
        },
        children: menuChildren['/finance']
    }
];