const data = {
    Kabul: { BCS: ["Artificial Intelligence", "Data Science", "Cybersecurity"], BA: ["Marketing", "Finance", "Entrepreneurship"], LP: ["Criminal Law", "Corporate Law", "Environmental Law"] },
    Rana: { BCS: ["Software Engineering", "Networks", "Database Systems"], BA: ["International Business", "Human Resources", "Accounting"], LP: ["Constitutional Law", "International Law", "Public Policy"] },
    American: { BCS: ["Machine Learning", "Cloud Computing", "Cybersecurity"], BA: ["Finance", "Entrepreneurship", "Business Analytics"], LP: ["Human Rights Law", "International Relations", "Conflict Resolution"] }
};

const universitySelect = document.getElementById("university");
const departmentSelect = document.getElementById("department");
const specializationsTable = document.getElementById("specializationsTable");
const specializationsBody = document.getElementById("specializationsBody");

universitySelect.addEventListener("change", updateDepartments);
departmentSelect.addEventListener("change", updateTable);

function updateDepartments() {
    departmentSelect.innerHTML = '<option value="">Select Department</option>';
    const departments = data[universitySelect.value] || {};
    Object.keys(departments).forEach(dept => {
        departmentSelect.innerHTML += `<option value="${dept}">${getDepartmentName(dept)}</option>`;
    });
}

function updateTable() {
    const specializations = (data[universitySelect.value] || {})[departmentSelect.value];
    if (specializations) {
        specializationsBody.innerHTML = `
            <tr>
                <td>${universitySelect.options[universitySelect.selectedIndex].text}</td>
                <td>${getDepartmentName(departmentSelect.value)}</td>
                <td>${specializations.join(", ")}</td>
            </tr>
        `;
        specializationsTable.style.display = "table";
    } else {
        specializationsTable.style.display = "none";
    }
}

function getDepartmentName(dept) {
    return dept === "BCS" ? "Computer Science" : dept === "BA" ? "Business Administration" : "Law and Politics";
}
