const express = require('express');
const methodOverride = require('method-override');
const router = express.Router(); 
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.use(methodOverride('_method'));

// Data
var employeeData = [
    {
      "EmployeeId": 1,
      "EmployeeName": "John Doe",
      "EmployeeDesignation": "Software Engineer",
      "EmployeeLocation": "New York",
      "Salary": 85000
    },
    {
      "EmployeeId": 2,
      "EmployeeName": "Jane Smith",
      "EmployeeDesignation": "Data Scientist",
      "EmployeeLocation": "San Francisco",
      "Salary": 95000
    },
    {
      "EmployeeId": 3,
      "EmployeeName": "Samuel Green",
      "EmployeeDesignation": "Product Manager",
      "EmployeeLocation": "Chicago",
      "Salary": 105000
    },
    {
      "EmployeeId": 4,
      "EmployeeName": "Emily White",
      "EmployeeDesignation": "UX/UI Designer",
      "EmployeeLocation": "Austin",
      "Salary": 76000
    },
    {
      "EmployeeId": 5,
      "EmployeeName": "Michael Brown",
      "EmployeeDesignation": "Marketing Specialist",
      "EmployeeLocation": "Boston",
      "Salary": 72000
    },
    {
      "EmployeeId": 6,
      "EmployeeName": "Sarah Johnson",
      "EmployeeDesignation": "HR Manager",
      "EmployeeLocation": "Los Angeles",
      "Salary": 88000
    },
    {
      "EmployeeId": 7,
      "EmployeeName": "David Lee",
      "EmployeeDesignation": "Sales Executive",
      "EmployeeLocation": "Seattle",
      "Salary": 65000
    },
    {
      "EmployeeId": 8,
      "EmployeeName": "Olivia Taylor",
      "EmployeeDesignation": "Business Analyst",
      "EmployeeLocation": "Denver",
      "Salary": 79000
    },
    {
      "EmployeeId": 9,
      "EmployeeName": "James Wilson",
      "EmployeeDesignation": "DevOps Engineer",
      "EmployeeLocation": "San Francisco",
      "Salary": 98000
    },
    {
      "EmployeeId": 10,
      "EmployeeName": "Sophia Harris",
      "EmployeeDesignation": "Financial Analyst",
      "EmployeeLocation": "Chicago",
      "Salary": 76000
    }
]; 

 // table   
 router.get('/',(req,res)=>{
    res.render('home',{employeeData}) ;
});


// add Employee
router.get('/add',(req,res)=>{ 
    res.render('addEm',{employeeData}) ;
});

router.post('/addEmployee',(req,res)=>{ 
                //  console.log(req.body);
    const employee = {
                      EmployeeId: Number(req.body.EmployeeId),
                      EmployeeName: req.body.EmployeeName,
                      EmployeeDesignation: req.body.EmployeeDesignation,
                      EmployeeLocation: req.body.EmployeeLocation,
                      Salary: Number(req.body.Salary)
                    };
    employeeData.push(employee)
    console.log('Employee Added:', employee);
    res.redirect('/');
});

// edit
router.get('/:id',(req,res)=>{ 
    const Index = employeeData.findIndex(e => e.EmployeeId == Number(req.params.id));
    if (Index !== -1) {
        const employee = employeeData[Index];
      res.render('edit',{employee}) ;
    } else {
      res.send('Employee not found');
    }
});

router.put('/edit/:id',(req,res)=>{
    console.log('ediTED',req.body);
    const Inx = employeeData.findIndex(e => e.EmployeeId == Number(req.params.id));
    if (Inx !== -1) {
        const employee = {
            EmployeeId: Number(req.params.id),
            EmployeeName: req.body.EmployeeName,
            EmployeeDesignation: req.body.EmployeeDesignation,
            EmployeeLocation: req.body.EmployeeLocation,
            Salary: Number(req.body.Salary)
          };
        employeeData[Inx] = employee;
      res.redirect('/') ;
    } else {
      res.send('Employee not found');
    }
});


// delete

router.delete('/delete/:id', (req, res) => {
    const employeeId = req.params.id;
    employeeData = employeeData.filter(emp => emp.EmployeeId != employeeId);
    res.redirect('/');
  });



  module.exports = router; 

