const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

// University Data
const universities = [
    { id: 1, name: 'Kabul University' },
    { id: 2, name: 'Rana University' },
    { id: 3, name: 'American University of Afghanistan' }
];

// Departments Data
const departments = {
    1: [ // Kabul University
        { id: 1, name: 'Computer Science' },
        { id: 2, name: 'Business Administration' },
        { id: 3, name: 'Law' }
    ],
    2: [ // Rana University
        { id: 4, name: 'Computer Science' },
        { id: 5, name: 'Business Administration' },
        { id: 6, name: 'Law' }
    ],
    3: [ // AUAF
        { id: 7, name: 'Computer Science' },
        { id: 8, name: 'Business Administration' },
        { id: 9, name: 'Law' }
    ]
};

// Specializations Data
const specializations = {
    1: [ // Computer Science (Kabul University)
        { id: 1, name: 'AI' },
        { id: 2, name: 'Cybersecurity' },
        { id: 3, name: 'Data Science' }
    ],
    2: [ // Business Administration (Kabul University)
        { id: 4, name: 'Marketing' },
        { id: 5, name: 'Finance' },
        { id: 6, name: 'Entrepreneurship' }
    ],
    3: [ // Law (Kabul University)
        { id: 7, name: 'Criminal Law' },
        { id: 8, name: 'Corporate Law' },
        { id: 9, name: 'Environmental Law' }
    ],
    4: [ // Computer Science (Rana University)
        { id: 10, name: 'AI' },
        { id: 11, name: 'Cybersecurity' },
        { id: 12, name: 'Data Science' }
    ],
    5: [ // Business Administration (Rana University)
        { id: 13, name: 'Marketing' },
        { id: 14, name: 'Finance' },
        { id: 15, name: 'Entrepreneurship' }
    ],
    6: [ // Law (Rana University)
        { id: 16, name: 'Criminal Law' },
        { id: 17, name: 'Corporate Law' },
        { id: 18, name: 'Environmental Law' }
    ],
    7: [ // Computer Science (AUAF)
        { id: 19, name: 'AI' },
        { id: 20, name: 'Cybersecurity' },
        { id: 21, name: 'Data Science' }
    ],
    8: [ // Business Administration (AUAF)
        { id: 22, name: 'Marketing' },
        { id: 23, name: 'Finance' },
        { id: 24, name: 'Entrepreneurship' }
    ],
    9: [ // Law (AUAF)
        { id: 25, name: 'Criminal Law' },
        { id: 26, name: 'Corporate Law' },
        { id: 27, name: 'Environmental Law' }
    ]
};

// Students Data
const students = {
    1: [ // AI (Kabul University)
        { name: 'Ahmad', lastName: 'Khan', id: '4001', email: 'ahmad.khan@kabul.edu' }
    ],
    2: [ // Cybersecurity (Kabul University)
        { name: 'Fatima', lastName: 'Ahmadzai', id: '4002', email: 'fatima.ahmadzai@kabul.edu' }
    ],
    3: [ // Data Science (Kabul University)
        { name: 'Sami', lastName: 'Mohammadi', id: '4003', email: 'sami.mohammadi@kabul.edu' }
    ],
    4: [ // Marketing (Kabul University)
        { name: 'Zahra', lastName: 'Noori', id: '4004', email: 'zahra.noori@kabul.edu' }
    ],
    5: [ // Finance (Kabul University)
        { name: 'Laila', lastName: 'Karimi', id: '4005', email: 'laila.karimi@kabul.edu' }
    ],
    6: [ // Entrepreneurship (Kabul University)
        { name: 'Ali', lastName: 'Mohseni', id: '4006', email: 'ali.mohseni@kabul.edu' }
    ],
    7: [ // Criminal Law (Kabul University)
        { name: 'Sara', lastName: 'Farhadi', id: '4007', email: 'sara.farhadi@kabul.edu' }
    ],
    8: [ // Corporate Law (Kabul University)
        { name: 'Omid', lastName: 'Naimi', id: '4008', email: 'omid.naimi@kabul.edu' }
    ],
    9: [ // Environmental Law (Kabul University)
        { name: 'Noor', lastName: 'Safi', id: '4009', email: 'noor.safi@kabul.edu' }
    ],
    10: [ // AI (Rana University)
        { name: 'Ramin', lastName: 'Qaderi', id: '4010', email: 'ramin.qaderi@rana.edu' }
    ],
    11: [ // Cybersecurity (Rana University)
        { name: 'Farhad', lastName: 'Samadi', id: '4011', email: 'farhad.samadi@rana.edu' }
    ],
    12: [ // Data Science (Rana University)
        { name: 'Nilofar', lastName: 'Rahimi', id: '4012', email: 'nilofar.rahimi@rana.edu' }
    ],
    13: [ // Marketing (Rana University)
        { name: 'Khalid', lastName: 'Karimi', id: '4013', email: 'khalid.karimi@rana.edu' }
    ],
    14: [ // Finance (Rana University)
        { name: 'Ariana', lastName: 'Siddiqui', id: '4014', email: 'ariana.siddiqui@rana.edu' }
    ],
    15: [ // Entrepreneurship (Rana University)
        { name: 'Asad', lastName: 'Yusufzai', id: '4015', email: 'asad.yusufzai@rana.edu' }
    ],
    16: [ // Criminal Law (Rana University)
        { name: 'Zaki', lastName: 'Zarif', id: '4016', email: 'zaki.zarif@rana.edu' }
    ],
    17: [ // Corporate Law (Rana University)
        { name: 'Ayesha', lastName: 'Latifi', id: '4017', email: 'ayesha.latifi@rana.edu' }
    ],
    18: [ // Environmental Law (Rana University)
        { name: 'Hussain', lastName: 'Mohseni', id: '4018', email: 'hussain.mohseni@rana.edu' }
    ],
    19: [ // AI (AUAF)
        { name: 'Hassan', lastName: 'Najib', id: '4019', email: 'hassan.najib@american.edu' }
    ],
    20: [ // Cybersecurity (AUAF)
        { name: 'Mina', lastName: 'Sadeq', id: '4020', email: 'mina.sadeq@american.edu' }
    ],
    21: [ // Data Science (AUAF)
        { name: 'Yusuf', lastName: 'Sharifi', id: '4021', email: 'yusuf.sharifi@american.edu' }
    ],
    22: [ // Marketing (AUAF)
        { name: 'Afsana', lastName: 'Zarif', id: '4022', email: 'afsana.zarif@american.edu' }
    ],
    23: [ // Finance (AUAF)
        { name: 'Shahzad', lastName: 'Arian', id: '4023', email: 'shahzad.arian@american.edu' }
    ],
    24: [ // Entrepreneurship (AUAF)
        { name: 'Mariam', lastName: 'Pazhwak', id: '4024', email: 'mariam.pazhwak@american.edu' }
    ],
    25: [ // Criminal Law (AUAF)
        { name: 'Jamil', lastName: 'Faizi', id: '4025', email: 'jamil.faizi@american.edu' }
    ],
    26: [ // Corporate Law (AUAF)
        { name: 'Samira', lastName: 'Noori', id: '4026', email: 'samira.noori@american.edu' }
    ],
    27: [ // Environmental Law (AUAF)
        { name: 'Arif', lastName: 'Haidari', id: '4027', email: 'arif.haidari@american.edu' }
    ]
};

// API Endpoints
app.get('/api/universities', (req, res) => {
    res.json(universities);
});

app.get('/api/universities/:universityId/departments', (req, res) => {
    const universityId = req.params.universityId;
    res.json(departments[universityId] || []);
});

app.get('/api/departments/:departmentId/specializations', (req, res) => {
    const departmentId = req.params.departmentId;
    res.json(specializations[departmentId] || []);
});

app.get('/api/specializations/:specializationId/students', (req, res) => {
    const specializationId = req.params.specializationId;
    res.json(students[specializationId] || []);
});

// Server setup
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
