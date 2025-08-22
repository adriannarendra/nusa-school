import Card, { CardProps } from "@/components/ui/dashboard/Card";
import Icon from "@/components/ui/users/icons";
import { students } from "@/data/dummy";

const cardsData: CardProps[] = [
  {
    cardType: 'pemasukan',
    value: 200000000,
    percentChange: 25,
    difference: 60
  },
  {
    cardType: 'pengeluaran',
    value: 60000000,
    percentChange: 25,
    difference: 60
  },
  {
    cardType: 'transaksi',
    value: 125,
    difference: 5
  },
]

export default function FinancialDashboardPage() {
  return (
    <div className="flex flex-col p-[40px] gap-[20px] rounded-[12px] bg-white">
      <div className="flex flex-row gap-[6px] items-center">
        <p className="text-[16px] font-normal text-gray06">Keuangan</p>
        <Icon name="arrowRight" className="w-[20px] stroke-gray06" strokeWidth="1.5" />
        <p className="text-[16px] font-semibold text-primary">Dashboard</p>
      </div>
      <h2 className="text-[32px] font-bold">Dashboard</h2>
      <span className="w-full border-[1px] border-y-gray03" ></span>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-[20px]">
          {cardsData.map((card) => (
            <Card
              key={card.cardType}
              cardType={card.cardType}
              value={card.value}
              percentChange={card.percentChange}
              difference={card.difference} />
          ))}
        </div>
        <div className="flex flex-row gap-[20px]">
          <div className="w-[620px] h-[364px] flex flex-col p-[20px] gap-[32x] border-[1px] border-gray02 bg-white rounded-[16px]">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[20px] font-bold text-black">Analisis Alur Keuangan</h3>
                <div className="flex flex-row gap-[20px] items-center">
                  <div className="flex gap-[4px] items-center">
                    <div className="w-[12px] h-[12px] bg-secondary rounded-full"></div>
                    <p className="text-[12px] font-semibold text-black">Pemasukan</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    <div className="w-[12px] h-[12px] bg-secondary00 rounded-full"></div>
                    <p className="text-[12px] font-semibold text-black">Pengeluaran</p>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
          </div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Kelas</th>
            <th className="border px-4 py-2">Nilai</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="border px-4 py-2">{s.name}</td>
              <td className="border px-4 py-2">{s.class}</td>
              <td className="border px-4 py-2">{s.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
