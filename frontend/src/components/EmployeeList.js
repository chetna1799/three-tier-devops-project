import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        loadEmployees();

    }, []);

    const loadEmployees = async () => {

        try {

            const response = await getEmployees();

            setEmployees(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="container mt-4">

            <h2>Employee Management System</h2>

            <table className="table table-bordered table-striped mt-4">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        employees.map((employee) => (

                            <tr key={employee.id}>

                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.salary}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default EmployeeList;