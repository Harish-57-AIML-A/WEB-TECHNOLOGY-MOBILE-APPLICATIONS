document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Collecting form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
  
    // Validate form data (basic validation for non-empty fields)
    if (firstName && lastName && email && password && age && phone) {
      const message = `
        <h3>Registration Successful</h3>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>Phone: ${phone}</p>
      `;
      document.getElementById("form-message").innerHTML = message;
    } else {
      document.getElementById("form-message").innerHTML = "<p style='color: red;'>Please fill in all fields.</p>";
    }
  });
  
