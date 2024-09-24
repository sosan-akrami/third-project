const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const {PrismaClient}  = require("@prisma/client")

const prisma = new PrismaClient();
dotenv.config();
app.use(cors());


app.get("/", (req, res)=> res.json({message: "The API server is running!"}))

// API Endpoints
app.get('/api/universities', async (req, res) => {

    const universities = await prisma.university.findMany()
    res.json(universities);
});

app.get('/api/universities/:universityId/departments', async (req, res) => {

    const departmentList = await prisma.department.findMany({
        where: {
            universityId: Number(req.params.universityId) 
        }
    });
    
    res.json(departmentList);

});

app.get('/api/departments/:departmentId/specializations', async (req, res) => {
    const specializationList = await prisma.specialization.findMany({
        where: {
            departmentId: Number(req.params.departmentId) 
        }
    });
    res.json(specializationList);
});



app.get('/api/specializations/:specializationId/students', async(req, res) => {
    const studentList = await prisma.student.findMany({
        where: {
            specializationId: Number(req.params.specializationId) 
        }

    });
    res.json(studentList);
});

// Server setup
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
