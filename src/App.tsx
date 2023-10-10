import { useState } from "react";
import convertRupiah from "rupiah-format";
import "./app.css";

const App = () => {
  const [basicSalary, setBasicSalary] = useState<number>(0);
  const [allowance, setAllowance] = useState<number>(0);
  const [obligation, setObligation] = useState<number>(0);
  const [grossSalary, setGrossSalary] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>(0);

  const handleClickCount = () => {
    const grossSal = basicSalary + allowance;
    const netSal = grossSal - obligation;

    setGrossSalary(grossSal);
    setNetSalary(netSal);
  };

  return (
    <div>
      <h1>Salary Calcultor</h1>
      <div>
        <label htmlFor="basicSalary">Gaji Pokok</label>
        <input
          type="number"
          id="basicSalary"
          value={basicSalary}
          onChange={(e) => setBasicSalary(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="allowance">Tunjangan</label>
        <input
          type="number"
          id="allowance"
          value={allowance}
          onChange={(e) => setAllowance(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="obligations">Kewajiban Pokok</label>
        <input
          type="number"
          id="obligations"
          value={obligation}
          onChange={(e) => setObligation(Number(e.target.value))}
        />
      </div>

      <button onClick={handleClickCount}>Hitung</button>

      <div>
        <h1>Hasil</h1>
        <div>
          <h3>Gaji Pokok: Rp. {convertRupiah.convert(basicSalary)}</h3>
          <h3>Tunjangan: Rp. {convertRupiah.convert(allowance)}</h3>
          <h3>Gaji Kotor: Rp. {convertRupiah.convert(grossSalary)}</h3>
          <h3>Kewajiban Pokok: Rp. {convertRupiah.convert(obligation)}</h3>
          <h3>Gaji Bersih: Rp. {convertRupiah.convert(netSalary)}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
