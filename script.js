function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (!dob) {
        alert("Please select Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years =
        today.getFullYear() -
        birthDate.getFullYear();

    let months =
        years * 12 +
        (today.getMonth() - birthDate.getMonth());

    let days =
        Math.floor(
            (today - birthDate) /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById("result").innerHTML =
        `
        <h3>Your Age</h3>

        <p><b>Years:</b> ${years}</p>

        <p><b>Months:</b> ${months}</p>

        <p><b>Days:</b> ${days}</p>
        `;
}
