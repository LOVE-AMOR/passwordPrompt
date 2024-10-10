function promptForPassword() {
    const correctPassword = "IloveProgramming123";
    let userPassword;

    do {
        userPassword = prompt("Enter your password:");
        
        if (userPassword !== correctPassword) {
            alert("Incorrect, try again."); // Use alert for incorrect password
        }
    } while (userPassword !== correctPassword);

    alert("Access granted."); // Use alert for success message
}
