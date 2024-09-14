const data = {
    Kabul: {
        computerScience: {
            AI: [
                { name: "Ahmad", lastName: "Khan", id: "4001", email: "ahmad.khan@kabul.edu" },
                { name: "Fatima", lastName: "Ahmadzai", id: "4002", email: "fatima.ahmadzai@kabul.edu" },
                { name: "Nisar", lastName: "Jalali", id: "4003", email: "nisar.jalali@kabul.edu" }
            ],
            cybersecurity: [
                { name: "Zara", lastName: "Hosseini", id: "4004", email: "zara.hosseini@kabul.edu" },
                { name: "Omar", lastName: "Niazi", id: "4005", email: "omar.niazi@kabul.edu" }
            ],
            dataScience: [
                { name: "Rashid", lastName: "Karim", id: "4006", email: "rashid.karim@kabul.edu" },
                { name: "Aisha", lastName: "Bibi", id: "4007", email: "aisha.bibi@kabul.edu" }
            ]
        },
        businessAdministration: {
            marketing: [
                { name: "Jamal", lastName: "Moshin", id: "5001", email: "jamal.moshin@kabul.edu" },
                { name: "Samira", lastName: "Wardak", id: "5002", email: "samira.wardak@kabul.edu" }
            ],
            finance: [
                { name: "Hassan", lastName: "Moez", id: "5003", email: "hassan.moez@kabul.edu" },
                { name: "Kubra", lastName: "Siddiqi", id: "5004", email: "kubra.siddiqi@kabul.edu" }
            ],
            entrepreneurship: [
                { name: "Reza", lastName: "Hafiz", id: "5005", email: "reza.hafiz@kabul.edu" },
                { name: "Laila", lastName: "Nadiri", id: "5006", email: "laila.nadiri@kabul.edu" }
            ]
        },
        law: {
            criminalLaw: [
                { name: "Danish", lastName: "Zadran", id: "6001", email: "danish.zadran@kabul.edu" },
                { name: "Khalid", lastName: "Shah", id: "6002", email: "khalid.shah@kabul.edu" }
            ],
            corporateLaw: [
                { name: "Sara", lastName: "Sultan", id: "6003", email: "sara.sultan@kabul.edu" },
                { name: "Javed", lastName: "Kakar", id: "6004", email: "javed.kakar@kabul.edu" }
            ],
            environmentalLaw: [
                { name: "Hadi", lastName: "Husseini", id: "6005", email: "hadi.husseini@kabul.edu" },
                { name: "Mariam", lastName: "Ghazi", id: "6006", email: "mariam.ghazi@kabul.edu" }
            ]
        }
    },
    Rana: {
        computerScience: {
            AI: [
                { name: "Ali", lastName: "Nazar", id: "7001", email: "ali.nazar@rana.edu" },
                { name: "Layla", lastName: "Zia", id: "7002", email: "layla.zia@rana.edu" }
            ],
            cybersecurity: [
                { name: "Farid", lastName: "Haseeb", id: "7003", email: "farid.haseeb@rana.edu" },
                { name: "Noor", lastName: "Safi", id: "7004", email: "noor.safi@rana.edu" }
            ],
            dataScience: [
                { name: "Tariq", lastName: "Fayez", id: "7005", email: "tariq.fayez@rana.edu" }
            ]
        },
        businessAdministration: {
            marketing: [
                { name: "Nadia", lastName: "Feroz", id: "8001", email: "nadia.feroz@rana.edu" },
                { name: "Qasim", lastName: "Rostami", id: "8002", email: "qasim.rostami@rana.edu" }
            ],
            finance: [
                { name: "Sayed", lastName: "Khan", id: "8003", email: "sayed.khan@rana.edu" }
            ],
            entrepreneurship: [
                { name: "Mina", lastName: "Yar", id: "8004", email: "mina.yar@rana.edu" }
            ]
        },
        law: {
            criminalLaw: [
                { name: "Shahida", lastName: "Aslam", id: "9001", email: "shahida.aslam@rana.edu" }
            ],
            corporateLaw: [
                { name: "Jamal", lastName: "Wali", id: "9002", email: "jamal.wali@rana.edu" }
            ],
            environmentalLaw: [
                { name: "Ali", lastName: "Mahar", id: "9003", email: "ali.mahar@rana.edu" }
            ]
        }
    },
    American: {
        computerScience: {
            AI: [
                { name: "Kabul", lastName: "Moshin", id: "10001", email: "kabul.moshin@american.edu" }
            ],
            cybersecurity: [
                { name: "Aziz", lastName: "Niazi", id: "10002", email: "aziz.niazi@american.edu" }
            ],
            dataScience: [
                { name: "Feroza", lastName: "Khan", id: "10003", email: "feroza.khan@american.edu" }
            ]
        },
        businessAdministration: {
            marketing: [
                { name: "Nasser", lastName: "Safar", id: "11001", email: "nasser.safar@american.edu" }
            ],
            finance: [
                { name: "Zainab", lastName: "Fazal", id: "11002", email: "zainab.fazal@american.edu" }
            ],
            entrepreneurship: [
                { name: "Nawid", lastName: "Ghazi", id: "11003", email: "nawid.ghazi@american.edu" }
            ]
        },
        law: {
            criminalLaw: [
                { name: "Sari", lastName: "Mujahid", id: "12001", email: "sari.mujahid@american.edu" }
            ],
            corporateLaw: [
                { name: "Amir", lastName: "Dost", id: "12002", email: "amir.dost@american.edu" }
            ],
            environmentalLaw: [
                { name: "Fariha", lastName: "Kakar", id: "12003", email: "fariha.kakar@american.edu" }
            ]
        }
    }
};

const universitySelect = document.getElementById("university");
const departmentSelect = document.getElementById("department");
const specializationSelect = document.getElementById("specialization");
const studentsTable = document.getElementById("studentsTable");
const studentsBody = document.getElementById("studentsBody");

function updateDepartments() {
    const selectedUniversity = universitySelect.value;
    departmentSelect.innerHTML = '<option value="">Select Department</option>';
    specializationSelect.innerHTML = '<option value="">Select Specialization</option>';
    specializationSelect.disabled = true;

    if (selectedUniversity) {
        const departments = Object.keys(data[selectedUniversity]);
        departments.forEach(dept => {
            const option = document.createElement("option");
            option.value = dept;
            option.textContent = dept.charAt(0).toUpperCase() + dept.slice(1).replace(/([A-Z])/g, ' $1');
            departmentSelect.appendChild(option);
        });
        departmentSelect.disabled = false;
    }
    studentsTable.style.display = "none";
}

function updateSpecializations() {
    const selectedUniversity = universitySelect.value;
    const selectedDepartment = departmentSelect.value;
    specializationSelect.innerHTML = '<option value="">Select Specialization</option>';

    if (selectedUniversity && selectedDepartment) {
        const specializations = Object.keys(data[selectedUniversity][selectedDepartment]);
        specializations.forEach(spec => {
            const option = document.createElement("option");
            option.value = spec;
            option.textContent = spec.charAt(0).toUpperCase() + spec.slice(1).replace(/([A-Z])/g, ' $1');
            specializationSelect.appendChild(option);
        });
        specializationSelect.disabled = false;
    } else {
        specializationSelect.disabled = true;
    }
    studentsTable.style.display = "none";
}

function updateStudents() {
    const selectedUniversity = universitySelect.value;
    const selectedDepartment = departmentSelect.value;
    const selectedSpecialization = specializationSelect.value;

    if (selectedUniversity && selectedDepartment && selectedSpecialization) {
        const students = data[selectedUniversity][selectedDepartment][selectedSpecialization];
        studentsBody.innerHTML = students.map(student => `
            <tr>
                <td>${student.name}</td>
                <td>${student.lastName}</td>
                <td>${student.id}</td>
                <td>${student.email}</td>
            </tr>
        `).join('');

        studentsTable.style.display = "table";
    } else {
        studentsTable.style.display = "none";
    }
}

universitySelect.addEventListener("change", updateDepartments);
departmentSelect.addEventListener("change", updateSpecializations);
specializationSelect.addEventListener("change", updateStudents);
