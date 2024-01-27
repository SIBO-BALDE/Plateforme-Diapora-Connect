import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: [ 'Projet de construction restants','Projet de construction terminés'],
  datasets: [
    {
    //   label: '# of Votes',
      data: [20, 80],
      backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgb(212, 111, 77)',
        
      ],
      borderColor: [
        'transparent',
        
        
      ],
      borderWidth: 1,
    },
  ],

};
const options = {
  aspectRatio: 1.5, // Ajuste la hauteur du graphique
  cutout: '77%',
    plugins: {
      legend: {
        position: 'bottom', // Positionne la légende en bas
      },
      labels: {
        font: {
          size: 15, // Ajustez la taille de la police ici
        },
      },
      datalabels: {
        color: 'red', // Couleur du texte
        font: {
          size: '12', // Taille de la police du texte
        },
        formatter: (value, context) => {
          return context.dataIndex + ': ' + Math.round(value*100) + '%';
          
        },
    },
      


    },
    layout: {
        padding: {
          top: 30, // Ajoute une marge supérieure de 20 pixels
        },
      },
  };
  

export default function Chart() {
  return <Doughnut data={data}  options={options} plugins={[require('chartjs-plugin-datalabels')]} />;
}


// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// import { Doughnut } from "react-chartjs-2";


  
// export default function Chart() {
//     const data = {
//         labels: ['Élément 1', 'Élément 2'],
//         datasets: [
//           {
//             data: [50, 50], // Pourcentage de chaque élément
//             backgroundColor: ['#FF6384', '#36A2EB'], // Couleurs pour chaque élément
//             hoverBackgroundColor: ['#FF6384', '#36A2EB'],
//           },
//         ],
//       };
      
//       const options = {
//         // Ajoutez des options de configuration si nécessaire
//       };
//   return (
//     <div><h2>Diagramme Circulaire</h2>
//     {/* <Doughnut data={data} options={options} /> */}
//     </div>
//   )
// }



