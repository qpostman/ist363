const students = [
    {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
    {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
    {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
  ];

function App () {
    let filteredStudents = students;

    const handleChnage = (event) => {
        filteredStudents = students.filter(student => student.name === event.target.value);
        console.log(filteredStudents);
    };
    return (
      <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleChange}/>
      </div>
      <ul>
        filteredStudents.map(function(item)) {
            return
            <li key ={
        }
      </ul>
    );
}

export default App