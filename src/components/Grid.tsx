// // File: src/components/Grid.tsx
// import React from 'react';
// import StatusBadge from './StatusBadge';

// const data = [
//   {
//     job: 'Launch social media campaign for product',
//     submitted: '15-11-2024',
//     status: 'In-process',
//     submitter: 'Aisha Patel',
//     url: 'www.aishapatel.com',
//     assigned: 'Sophie Choudhury',
//     priority: 'Medium',
//     due: '20-11-2024',
//     value: '6,200,000 ₹',
//   },
//   {
//     job: 'Update press kit for company redesign',
//     submitted: '28-10-2024',
//     status: 'Need to start',
//     submitter: 'Irfan Khan',
//     url: 'www.irfankhan.app',
//     assigned: 'Tejas Pandey',
//     priority: 'High',
//     due: '30-10-2024',
//     value: '3,500,000 ₹',
//   },
//   {
//     job: 'Finalize user testing feedback for app',
//     submitted: '05-12-2024',
//     status: 'In-process',
//     submitter: 'Mark Johnson',
//     url: 'www.markjohnson.io',
//     assigned: 'Rachel Lee',
//     priority: 'Medium',
//     due: '10-12-2024',
//     value: '4,750,000 ₹',
//   },
//   {
//     job: 'Design new features for the website',
//     submitted: '10-01-2025',
//     status: 'Complete',
//     submitter: 'Emily Green',
//     url: 'www.emilygreen.dev',
//     assigned: 'Tom Wright',
//     priority: 'Low',
//     due: '15-01-2025',
//     value: '5,900,000 ₹',
//   },
//   {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   },
//    {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   }, {
//     job: 'Prepare financial report for Q4',
//     submitted: '25-01-2025',
//     status: 'Blocked',
//     submitter: 'Jessica Brown',
//     url: 'www.jessicabrown.com',
//     assigned: 'Kevin Smith',
//     priority: 'Low',
//     due: '30-01-2025',
//     value: '2,800,000 ₹',
//   },
// ];

// const columns = [
//   'Job Request',
//   'Submitted',
//   'Status',
//   'Submitter',
//   'URL',
//   'Assigned',
//   'Priority',
//   'Due Date',
//   'Est. Value',
// ];

// const Grid = () => (
//   <div
//     style={{
//       minHeight: '100vh',
//       backgroundColor: '#FFF',
//       padding: '32px',
//       fontFamily: 'Inter, sans-serif',
//     }}
//   >
//     <div
//       style={{
//         maxWidth: '1280px',
//         margin: '0 auto',
//         backgroundColor: '#FFF',
//         borderRadius: '12px',
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//         overflow: 'scroll',
//       }}
//     >
//       <div
//         style={{
//           padding: '16px 24px',
//           borderBottom: '1px solid #E0E0E0',
//           fontSize: '18px',
//           fontWeight: 600,
//           color: '#202124',
//         }}
//       >
//         Job Requests
//       </div>
//       <table
//         style={{
//           width: '100%',
//           borderCollapse: 'separate',
//           borderSpacing: 0,
//           fontSize: '14px',
//           color: '#202124',
//         }}
//       >
//         <thead>
//           <tr style={{ borderRight :"1px solid black" }}>
//             {columns.map((col, index) => (
//               <th
//                 key={index}
//                 style={{
//                   padding: '12px 16px',
//                   textAlign: 'left',
//                   fontWeight: 500,
//                   borderBottom: '1px solid #E0E0E0',
//                   color: '#5F6368',
//                 }}
//               >
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr
//               key={i}
//               style={{
//                 backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
//                 borderBottom: '1px solid #E0E0E0',
//               }}
//             >
//               <td style={cellStyle}><input type="text" value={row.job} style={{border:"none"}}/></td>
//               <td style={cellStyle}><input type="text" value={row.submitted} style={{border:"none"}}/></td>
//               <td style={cellStyle}>
//                 <StatusBadge value={row.status} />
//               </td>
//               <td style={cellStyle}><input type="text" value={row.submitter} style={{border:"none"}}/></td>
//               <td style={{ ...cellStyle, color: '#1A73E8', textDecoration: 'underline' }}><input type="text" value={row.url} style={{border:"none"}}/></td>
//               <td style={cellStyle}><input type="text" value={row.assigned} style={{border:"none"}}/></td>
//               <td style={cellStyle}>
//                 <StatusBadge value={row.priority} />
//               </td>
//               <td style={cellStyle}><input type="text" value={row.due} style={{border:"none"}}/></td>
//               <td style={cellStyle}><input type="text" value={row.value} style={{border:"none"}} onChange={(e) => e.target.value}/></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// const cellStyle: React.CSSProperties = {
//   padding: '12px 16px',
//   borderBottom: '1px solid #E0E0E0',
//   whiteSpace: 'nowrap',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   maxWidth: '200px',
//   borderRight : "0.1rem solid rgb(99, 99, 99)"
// };

// export default Grid;


// File: src/components/Grid.tsx
import React, { useState } from 'react';
import StatusBadge from './StatusBadge';

const initialData = [
  {
    job: 'Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    due: '20-11-2024',
    value: '6,200,000 ₹',
  },
  {
    job: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.app',
    assigned: 'Tejas Pandey',
    priority: 'High',
    due: '30-10-2024',
    value: '3,500,000 ₹',
  },
  {
    job: 'Finalize user testing feedback for app',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.io',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    due: '10-12-2024',
    value: '4,750,000 ₹',
  },
  {
    job: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.dev',
    assigned: 'Tom Wright',
    priority: 'Low',
    due: '15-01-2025',
    value: '5,900,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
  {
    job: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    due: '30-01-2025',
    value: '2,800,000 ₹',
  },
];

const columns = [
  'Job Request',
  'Submitted',
  'Status',
  'Submitter',
  'URL',
  'Assigned',
  'Priority',
  'Due Date',
  'Est. Value',
];

const Grid = () => {
  const [rows, setRows] = useState(initialData);

  const handleChange = (index: number, field: keyof typeof initialData[0], value: string) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFF',
        padding: '32px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          backgroundColor: '#FFF',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          overflow: 'scroll',
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid #FFF',
            fontSize: '18px',
            fontWeight: 600,
            color: '#202124',
          }}
        >
          Job Requests
        </div>
        <table
          style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            fontSize: '14px',
            color: '#202124',
          }}
        >
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontWeight: 500,
                    borderBottom: '1px solid #E0E0E0',
                    color: '#5F6368',
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                {Object.entries(row).map(([key, value]) => (
                  <td key={key} style={cellStyle}>
                    {key === 'status' || key === 'priority' ? (
                      <StatusBadge value={value} />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(i, key as any, e.target.value)}
                        style={{
                          border: 'none',
                          outline: 'none',
                          width: '100%',
                          background: 'transparent',
                          color: key === 'url' ? '#1A73E8' : '#202124',
                          textDecoration: key === 'url' ? 'underline' : 'none',
                          fontSize: '14px',
                        }}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const cellStyle: React.CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid #E0E0E0',
  whiteSpace: 'nowrap',
  overflow: 'scroll',
  textOverflow: 'ellipsis',
  maxWidth: '200px',
  scrollbarColor : 'transparent transparent'
};

export default Grid;
