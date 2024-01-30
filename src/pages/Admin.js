import { useEffect, useState } from 'react';

function Admin(){
    const [data, setData] = useState([])


  useEffect(()=>
  {
    fetch('http://localhost:8081/main')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  })
  return (
    <>
   <table>
    <thead>
      <th>Email</th>
      <th>password</th>
    </thead>
    <tbody>
      {data.map((d,i)=>(
        <tr key={i}>
          <td>{d.Email}</td>
          <td>{d.Password}</td>
        </tr>
      ))}
    </tbody>
   </table></>
  );
}
export default Admin;