import React from "react";
import Icon, { IconName } from "../users/icons";

export interface CardProps {
    cardType: 'pemasukan' | 'pengeluaran' | 'transaksi',
    value: number,
    difference: number,
    percentChange?: number,
}

interface IconConfig {
    name: IconName,
    className: string
}

type CardConfig = Record<CardProps['cardType'], {
    color: string,
    mainIcon: IconConfig,
    header: string,
    arrowIcon: IconConfig | 'Transaksi',
    percentageBackgroundColor: string | null,
    description: (difference: number) => string[],
}>;

export const cardConfig: CardConfig = {
    pemasukan: {
        color: 'text-green05',
        mainIcon: { name: "moneyReceive", className: "w-[20px] stroke-gray04" },
        header: 'Total Pemasukan Bulanan',
        arrowIcon: { name: "longArrowUp", className: 'w-[14px] stroke-green05' },
        percentageBackgroundColor: 'bg-green00',
        description: (difference) => [`Naik ${difference} juta`, 'dari bulan sebelumnya'],
    },
    pengeluaran: {
        color: 'text-red05',
        mainIcon: { name: "moneySend", className: "w-[20px] stroke-gray04" },
        header: 'Total Pengeluaran Bulanan',
        arrowIcon: { name: "longArrowDown", className: 'w-[14px] stroke-red05' },
        percentageBackgroundColor: 'bg-red00',
        description: (difference) => [`Turun ${difference} juta`, 'dari bulan sebelumnya'],
    },
    transaksi: {
        color: 'text-red05',
        mainIcon: { name: "clipboardTick", className: "w-[20px] stroke-gray04" },
        header: 'Transaksi Belum Dikonfirmasi',
        arrowIcon: 'Transaksi',
        percentageBackgroundColor: null,
        description: (difference: number) => [`Bertambah ${difference}`, 'transkasi baru'],
    }
}

const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(val)
}

const Card = ({ cardType, value, percentChange, difference }: CardProps): React.JSX.Element => {
    const { color, mainIcon, header, arrowIcon, percentageBackgroundColor, description } = cardConfig[cardType];


    const arrowElement = typeof arrowIcon === 'object' ?
        <div className={`flex flex-row py-[2px] px-[4px] gap-[2px] rounded-[50px] ${percentageBackgroundColor}`}>
            <Icon {...arrowIcon} />
            <p className={`text-[12px] font-semibold ${color}`}>{percentChange}%</p>
        </div>
        :
        <p className="text-[12px] font-semibold text-black">{arrowIcon}</p>



    return (
        <div className="flex flex-col p-[20px] gap-[10px] border-[1px] border-gray02 bg-white rounded-[16px]">
            <div className="flex flex-row items-center gap-[4px]">
                <Icon {...mainIcon} />
                <p className="text-[14px] font-semibold text-gray04">
                    {header}
                </p>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
                <p className="text-[24px] font-bold text-black">{cardType !== 'transaksi' ? `${formatCurrency(value)}` : `${value}`}</p>
                {arrowElement}
            </div>
            <p className="text-[12px] font-normal text-shadow-gray06">
                <span className={`font-semibold ${color}`}>{description(difference)[0]}</span> {description(difference)[1]}
            </p>
        </div>
    );
};

export default Card;
