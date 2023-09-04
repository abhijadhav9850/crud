const express = require('express')
const app = express()
const port = 3000

const {createPool } = require ("mysql")
const Pool = createPool({
    host:"localhost",
    user: "root",
    password:"",
    database : "task",
    port: '3307'
  
})


let student = [
    {
        Id: 1,
        Name: "Shubham Chavan",
        Contact: 1234,
        City: "Ghansoli",
        Gender: 'M',
        Dob: "2000-07-24",
        Gamil: "shubham12@gmail.com"

    }, {
        Id: 2,
        Name: "Shreeram Kaudare",
        Contact: 2345,
        City: "Koprigaon",
        Gender: 'M',
        Dob: "2001-01-02",
        Gamil: "shree12@gmail.com"

    }, {
        Id: 3,
        Name: "Mayuri Talekar",
        Contact: 3456,
        City: "Mumbai",
        Gender: 'F',
        Dob: "2004-01-02",
        Gamil: "mahi12@gmail.com"

    },
    {
        Id: 4,
        Name: "Shubham Salunke",
        Contact: 4567,
        City: "Vashi",
        Gender: 'M',
        Dob: "1998-03-02",
        Gamil: "shub123@gmail.com"

    },
    {
        Id: 5,
        Name: "Rudra",
        Contact: 5678,
        City: "Mumbai",
        Gender: 'M',
        Dob: "2005-07-9",
        Gamil: "rudra567@gmail.com"

    },
    {
        Id: 6,
        Name: "Bhavesh",
        Contact: 6789,
        City: "Vashi",
        Gender: 'M',
        Dob: "1999-04-02",
        Gamil: "bhavesh12@gmail.com"

    },
    {
        Id: 7,
        Name: "Arun",
        Contact: 7890,
        City: "Airoli",
        Gender: 'M',
        Dob: "1998-10-03",
        Gamil: "arun12@gmail.com"

    },
    {
        Id: 8,
        Name: "Aditya Nehre",
        Contact: 8909,
        City: "Ghansoli",
        Gender: 'M',
        Dob: "2000-01-02",
        Gamil: "adi12@gmail.com"

    },
    {
        Id: 9,
        Name: "Dipesh Tate",
        Contact: 9098,
        City: "Mumbai",
        Gender: 'M',
        Dob: "1999-01-02",
        Gamil: "dipesh12@gmail.com"

    }, {
        Id: 10,
        Name: "Shweta Jadhav",
        Contact: 9870,
        City: "Mumbai",
        Gender: 'F',
        Dob: "1998-01-02",
        Gamil: "shweta123@gmail.com"

    },
]
let Cource = [
    {
        Id: 1,
        CourceName: "Full Stack Developer",
        Fees: 80000
    },
    {
        Id: 2,
        CourceName: "Web Development",
        Fees: 70000
    },
    {
        Id: 3,
        CourceName: "MeanStack Development",
        Fees: 60000
    }, {
        Id: 4,
        CourceName: "MernStack Development",
        Fees: 60000
    }, {
        Id: 5,
        CourceName: "BackEnd Development",
        Fees: 70000
    }, {
        Id: 6,
        CourceName: "FrontEnd Development",
        Fees: 70000
    }, {
        Id: 7,
        CourceName: "Datascience",
        Fees: 60000
    }, {
        Id: 8,
        CourceName: "Python Developer",
        Fees: 60000
    }, {
        Id: 9,
        CourceName: "Ui&Ux Developer",
        Fees: 50000
    }, {
        Id: 10,
        CourceName: "JavaScript",
        Fees: 40000
    },
]

let studentadmission = [
    {
        Id: 1,
        studentId: 1,
        CourceId: 1,
        AdmissionDate: "2023-07-12"

    },
    {
        Id: 2,
        studentId: 2,
        CourceId: 2,
        AdmissionDate: "2023-07-13"

    },
    {
        Id: 3,
        studentId: 3,
        CourceId: 3,
        AdmissionDate: "2023-07-14"

    },
    {
        Id: 4,
        studentId: 4,
        CourceId: 4,
        AdmissionDate: "2023-07-15"

    }, {
        Id: 5,
        studentId: 5,
        CourceId: 5,
        AdmissionDate: "2023-07-16"

    }, {
        Id: 6,
        studentId: 6,
        CourceId: 6,
        AdmissionDate: "2023-07-17"

    }, {
        Id: 7,
        studentId: 7,
        CourceId: 7,
        AdmissionDate: "2023-07-18"

    }, {
        Id: 8,
        studentId: 8,
        CourceId: 8,
        AdmissionDate: "2023-07-19"

    }, {
        Id: 9,
        studentId: 9,
        CourceId: 9,
        AdmissionDate: "2023-07-20"

    }, {
        Id: 10,
        studentId: 10,
        CourceId: 10,
        AdmissionDate: "2023-07-21"

    },
]
let payment = [
    {
        Id: 1,
        AdmissionStudentId: 1,
        Amount: 10000,
        Date: "2023-07-27"
    },
    {
        Id: 2,
        AdmissionStudentId: 1,
        Amount: 15000,
        Date: "2023-08-20"
    },
    {
        Id: 3,
        AdmissionStudentId: 2,
        Amount: 15000,
        Date: "2023--08-01"
    },
    {
        Id: 4,
        AdmissionStudentId: 3,
        Amount: 30000,
        Date: "2023-07-27"
    }, {
        Id: 5,
        AdmissionStudentId: 4,
        Amount: 25000,
        Date: "2023-07-28"
    }, {
        Id: 6,
        AdmissionStudentId: 5,
        Amount: 30000,
        Date: "2023-07-28"
    }, {
        Id: 7,
        AdmissionStudentId: 6,
        Amount: 40000,
        Date: "2023-08-02"
    }, {
        Id: 8,
        AdmissionStudentId: 7,
        Amount: 30000,
        Date: "2023-08-27"
    }, {
        Id: 9,
        AdmissionStudentId: 8,
        Amount: 25000,
        Date: "2023-08-05"
    }, {
        Id: 10,
        AdmissionStudentId: 9,
        Amount: 25000,
        Date: "2023-08-07"
    },
    {
        Id: 11,
        AdmissionStudentId: 10,
        Amount: 10000,
        Date: "2023-07-08"
    },
]

let obj = {}
let object = {
    lessThan20: [],
    lessThan23: [],
    GreaterThan23: []
}
app.get('/data/city', function (req, res) {
    student.forEach(e => {
        let obj1 = {
            Name: e.Name,
            City: e.City
        }
        obj[e.City] = obj[e.City] || []
        obj[e.City].push(obj1)
    })
    res.send(obj)
    console.log(obj);
})
app.get('/data/city/:a', function (req, res) {
    let a = req.params.a
    let arr = []
    student.forEach(e => {
        if (e.City == a) {
            arr.push(e.Name)
        }
    })
    res.send(arr)
    console.log(arr);
})

app.get('/data/age', function (req, res) {
    student.forEach(e => {
        let dat1 = new Date()
        let dat2 = Math.abs(dat1.getUTCFullYear() - parseInt(e.Dob))
        e.age = dat2
        if (e.age < 20) {
            object.lessThan20.push(e.Name)
        } else if (e.age <= 23) {
            object.lessThan23.push(e.Name)
        } else if (e.age > 23) {
            object.GreaterThan23.push(e.Name)
        }
    })
    res.send(object)
    console.log(object);
})

app.get('/data/age/:a', function (req, res) {
    let a = parseInt(req.params.a)
    let obj = []
    let obj1 = []
    student.forEach(e => {
        let dat1 = new Date()
        let dat2 = Math.abs(dat1.getUTCFullYear() - parseInt(e.Dob))
        e.age = dat2
        obj.push(e);
    })
    let age = obj.filter(e=> e.age == a);
    if(age.length === 0){
        res.send("No Data")
    }
    res.send(age)
})

app.get('/data', function (req, res) {
     Pool.query(`select * from student`,(error,result)=>{
            if(error){
                res.send(error)
                
            }
            res.send(result)
            
        })

})

app.get('/data/:id/:Name/:Contact/:City/:Gender/:DOB/:emailId', function (req, res) {             
    Pool.query(`INSERT INTO student VALUES("${req.params.id}","${req.params.Name}","${req.params.Contact}","${req.params.City}","${req.params.Gender}","${req.params.DOB}","${req.params.emailId}") `,(error,result)=>{
           if(error){
               res.send(error)
               
           }
           res.send(result)
           
        })

})

app.get('/data/delete/:id', function (req, res) {             
    Pool.query(`DELETE FROM student where id=${req.params.id}`,(error,result)=>{
           if(error){
               res.send(error)
               
           }
           res.send(result)
           
        })

})


app.get('/data/update/:Name/:id',function (req, res){
    Pool.query(`UPDATE student SET Name="${req.params.Name}" WHERE Id ="${req.params.id}"`, (error, result)=>{
        if(error){
            res.send(error)
            
        }
        res.send(result)
    })
});


app.get('/data/update/:Name/:ContactNo/:id',function (req, res){
    Pool.query(`UPDATE student SET  ContactNo="${req.params.ContactNo}" WHERE Id ="${req.params.id}"`, (error, result)=>{
        if(error){
            res.send(error)
            
        }
        res.send(result)
    })
});




app.listen(port, () => {
    console.log(`using this port http://localhost:${port}/`);
})
