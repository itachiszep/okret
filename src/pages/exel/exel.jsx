import React, { useState, useEffect } from 'react';

export default function InteractiveSpreadsheet() {
  // Inicjalne dane - 30 wierszy x 14 kolumn (A-N)
  const [data, setData] = useState(
    Array(30).fill(null).map(() => 
      Array(14).fill(null).map(() => ({ value: '' }))
    )
  );
  
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
  
  // Wczytaj dane z storage przy starcie
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await window.storage.get('spreadsheet-data');
        if (result?.value) {
          const loadedData = JSON.parse(result.value);
          setData(loadedData);
        }
      } catch (err) {
        console.log('No saved data or error loading');
      }
    };
    loadData();
  }, []);
  
  const handleCellChange = (rowIndex, colIndex, newValue) => {
    const newData = [...data];
    newData[rowIndex] = [...newData[rowIndex]];
    newData[rowIndex][colIndex] = { value: newValue };
    setData(newData);
  };
  
  const saveData = async () => {
    try {
      await window.storage.set('spreadsheet-data', JSON.stringify(data));
      alert('Dane zapisane!');
    } catch (err) {
      console.error('Błąd przy zapisywaniu:', err);
      alert('Błąd przy zapisywaniu danych');
    }
  };
  
  const clearData = async () => {
    if (confirm('Na pewno chcesz wyczyścić wszystkie dane?')) {
      const cleared = Array(30).fill(null).map(() => 
        Array(14).fill(null).map(() => ({ value: '' }))
      );
      setData(cleared);
      try {
        await window.storage.delete('spreadsheet-data');
      } catch (err) {
        console.error('Błąd przy czyszczeniu:', err);
      }
    }
  };
  
  const downloadCSV = () => {
    let csv = '';
    data.forEach(row => {
      csv += row.map(cell => `"${cell.value.replace(/"/g, '""')}"`).join(',') + '\n';
    });
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', 'spreadsheet.csv');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Toolbar */}
      <div className="border-b border-gray-300 p-2 bg-gray-50 flex items-center gap-2">
        <button 
          onClick={saveData}
          className="px-3 py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded font-medium"
        >
          💾 Zapisz
        </button>
        <button 
          onClick={downloadCSV}
          className="px-3 py-1 text-sm bg-green-500 text-white hover:bg-green-600 rounded font-medium"
        >
          📥 Pobierz CSV
        </button>
        <button 
          onClick={clearData}
          className="px-3 py-1 text-sm bg-red-500 text-white hover:bg-red-600 rounded font-medium"
        >
          🗑️ Wyczyść
        </button>
        <span className="text-xs text-gray-600 ml-auto">
          Auto-zapisuje do przeglądarki
        </span>
      </div>
      
      {/* Spreadsheet */}
      <div className="overflow-auto flex-1">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 bg-gray-100 w-12 h-8 text-xs sticky left-0 z-10"></th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="border border-gray-300 bg-gray-100 min-w-[120px] h-8 text-xs font-semibold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 bg-gray-100 w-12 h-8 text-center text-xs font-semibold sticky left-0 z-10">
                  {rowIndex + 1}
                </td>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-300 p-0 min-w-[120px] h-8"
                  >
                    <input
                      type="text"
                      value={cell.value}
                      onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                      className="w-full h-full px-2 outline-none focus:ring-2 focus:ring-blue-500 focus:z-20"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
