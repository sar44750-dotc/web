document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || email === "" || age === "" || course === "") {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "All fields are required!";
    } else {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Registration Successful!";
        document.getElementById("regForm").reset();
    }
});
