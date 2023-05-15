import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Button1() {
  const [histogramData, setHistogramData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const text = response.data;
      const words = text.trim().split(/\s+/);

      const wordCounts = {};
      words.forEach(word => {
        if (wordCounts[word]) {
          wordCounts[word]++;
        } else {
          wordCounts[word] = 1;
        }
      });

      const sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
      const top20Words = sortedWordCounts.slice(0, 20);

      const histogramData = top20Words.map(([word, count]) => ({ word, count }));

      setHistogramData(histogramData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const exportCSV = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + histogramData.map(row => `${row.word},${row.count}`).join('\n');
    const encodedURI = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedURI);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    
     <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div>
        <button className="btn btn-primary mb-4" onClick={fetchData}>
          Submit
        </button>

        {histogramData.length > 0 && (
          <div>
            <BarChart width={600} height={400} data={histogramData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="word" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>

            <button  className='btn btn-primary' onClick={exportCSV}>Export</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Button1;

