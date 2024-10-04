import express, { Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import { University } from "./database/entity/University";
import { Department } from "./database/entity/Department";
import { Specialization } from "./database/entity/Specialization";
import { Student } from "./database/entity/Student";


dotenv.config();
const app = express();
app.use(cors());

AppDataSource.initialize();

const PORT: number = 3000;

app.get('/api/universities', async (req, res) => {
    const universities = await AppDataSource.manager.find(University);
    res.json(universities);
});

app.get('/api/universities/:universityId/departments', async (req, res) => {
    const uniID: number = Number(req.params.universityId);

    const departments = await AppDataSource.manager.find(Department, {
        where: {
            university: {id: uniID}
        }
    });

    res.json(departments);
});


app.get('/api/departments/:departmentId/specializations', async (req, res) => {
    const departmentId: number = Number(req.params.departmentId);

    const specializations = await AppDataSource.manager.find(Specialization, {
        where: {
            department: {id: departmentId}
        }
    });

    res.json(specializations);
});


app.get('/api/specializations/:specializationtId/students', async (req, res) => {
    const specializationtId: number = Number(req.params.specializationtId);

    const students = await AppDataSource.manager.find( Student, {
        where: {
            specialization: {id: specializationtId}
        }
    });

    res.json(students);
});

app.get("/", (req: Request, res: Response): any => {
    return res.json({
        'message': "Server is running!",
    });
})

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})