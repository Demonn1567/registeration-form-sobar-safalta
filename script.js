document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    
    fetch('http://localhost:3000/submit-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        alert('Report submitted successfully');
        
        document.getElementById('reportForm').reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('Error submitting report:', error);
      alert('An error occurred while submitting the report');
    });
  });
  