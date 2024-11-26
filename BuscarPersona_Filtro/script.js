let people = [];

document.getElementById('personForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const person = {
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        maternalLastName: document.getElementById('maternalLastName').value,
        paternalLastName: document.getElementById('paternalLastName').value,
        day: document.getElementById('day').value,
        month: document.getElementById('month').value,
        year: document.getElementById('year').value
    };
    
    people.push(person);
    this.reset();
    updateResults();
});

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredPeople = people.filter(person => {
        const fullName = `${person.firstName} ${person.middleName} ${person.maternalLastName} ${person.paternalLastName}`.toLowerCase();
        const fullDate = `${person.day}/${person.month}/${person.year}`;
        
        return fullName.includes(searchTerm) || 
               fullDate.includes(searchTerm) ||
               person.day === searchTerm ||
               person.month === searchTerm ||
               person.year === searchTerm;
    });
    updateResults(filteredPeople);
});

function updateResults(peopleToShow = people) {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';
    peopleToShow.forEach(person => {
        const li = document.createElement('li');
        li.textContent = `${person.firstName} ${person.middleName} ${person.maternalLastName} ${person.paternalLastName} - ${formatDate(person.day, person.month, person.year)}`;
        resultsList.appendChild(li);
    });
}

function formatDate(day, month, year) {
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
}

