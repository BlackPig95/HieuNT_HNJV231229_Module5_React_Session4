import { useState } from "react";
import Input from "../base/input/Input";
//Pass in employee object argument from parent component
function Form({ employee, onSubmitEvent, onCloseForm })
{
    //To dynamically update error message
    const [ errors, setErrors ] = useState([]);
    //Use to save and update state of employee on current component
    const [ employeeInfo, setEmployeeInfo ] = useState(
        {
            name: "",
            dob: "",
            email: "",
            address: "",
        });
    //Event: To retrieve the component calling this function
    //fieldName: To specify which property of the employeeInfo object is changing
    const handleChangeInput = (event) =>
    {   //Deconstruct to get the name as the key and value as value to update employee info
        let { name, value } = event.target;
        setEmployeeInfo({ ...employeeInfo, [ name ]: value });
        let error = {
            field: name,
            message: ""
        };
        //If input field is empty
        if (!value)
        {
            switch (name)
            {
                case "name":
                    error.message = "Họ tên không được để trống";
                    break;
                case "email":
                    error.message = "Email không được để trống";
                    break;
                case "address":
                    error.message = "Địa chỉ không được để trống";
                    break;
                case "dob":
                    error.message = "Ngày sinh không được để trống";
                    break;
            }
            //Add error message to the error list
            setErrors([ ...errors, error ]);
        } else//If input field is not empty => Remove the error message 
        {
            setErrors(errors.filter(e => e.field !== name));
        }
    };
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        let newEmployee =
        {
            name: event.target.name.value,
            dob: event.target.dob.value,
            email: event.target.email.value,
            address: event.target.address.value,
            status: true,
        };
        onSubmitEvent(newEmployee);
        onCloseForm();
    };
    return (
        <>
            <div className="overlay" h="">
                <form className="form" onSubmit={ handleSubmit }>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>{ employee ? "Thêm mới nhân viên" : "Chỉnh sửa nhân viên" }</h4>
                        <i className="fa-solid fa-xmark" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="userName">
                            Họ và tên
                        </label>
                        <Input error={ errors.find(e => e.field === "name") } name="name" type="text" placeholder="Nhập họ và tên" value={ employeeInfo.name } onChange={ handleChangeInput } />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="dateOfBirth">
                            Ngày sinh
                        </label>
                        <Input error={ errors.find(e => e.field === "dob") } name={ "dob" } type="date" placeholder="Chọn ngày tháng năm sinh" value={ employeeInfo.dob } onChange={ handleChangeInput } />
                    </div>
                    {/* <div class="form-text error">
    Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
                    <div>
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <Input error={ errors.find(e => e.field === "email") } name={ "email" } type="text" placeholder="Nhập email" value={ employeeInfo.email } onChange={ handleChangeInput } />
                    </div>
                    {/* <div class="form-text error">Email không được để trống.</div> */ }
                    <div>
                        <label className="form-label" htmlFor="address">
                            Địa chỉ
                        </label>
                        <Input error={ errors.find(e => e.field === "address") } name={ "address" } type="text" placeholder="Nhập địa chỉ" value={ employeeInfo.address } onChange={ handleChangeInput } />
                    </div>
                    <div>
                        <button className="w-100 btn btn-primary">Thêm mới</button>
                    </div>
                </form >
            </div >
        </>
    );
}

export default Form;