const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

function App () {
  return (
    <div>
    <h1>Students</h1>
    <ul>
      {students.map((student) => (
        <li key={student.suid}>
          <p>Name: {student.name}</p>
          <p>Year: {student.year}</p>
          <p>Major: {student.major}</p>
        </li>
       ))}
    </ul>
    </div>
    );
  }
  
