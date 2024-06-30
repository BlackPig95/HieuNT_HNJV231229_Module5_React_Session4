import { useState } from "react";
import Form from "./employee/Form";

function ManageEmployee({ employee })
{
    const [ employeeList, setEmployeeList ] = useState([]);
    const [ openForm, setOpenForm ] = useState(false);
    const handleOpenForm = () =>
    {
        setOpenForm(true);
    };
    const handleCloseForm = () =>
    {
        setOpenForm(false);
    };
    const saveEmployee = (employee) =>
    {
        setEmployeeList([ ...employeeList, employee ]);
    };
    return (
        <>
            { console.log(employeeList) }
            { openForm && <Form onSubmitEvent={ saveEmployee } onCloseForm={ handleCloseForm } /> }

            <div className="w-[80%] m-auto mt-4 h-[100vh]">
                <main className="main">
                    <header className="d-flex justify-content-between mb-3">
                        <h3>Nhân viên</h3>
                        <button onClick={ handleOpenForm } className="btn btn-primary">Thêm mới nhân viên</button>
                    </header>
                    <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
                        <input
                            style={ { width: 350 } }
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm theo email"
                        />
                        <i className="fa-solid fa-arrows-rotate" title="Refresh" />
                    </div>
                    {/* Danh sách nhân viên */ }
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ và tên</th>
                                <th>Ngày sinh</th>
                                <th>Email</th>
                                <th>Địa chỉ</th>
                                <th>Trạng thái</th>
                                <th colSpan={ 2 }>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nguyễn Văn A</td>
                                <td>28/02/1990</td>
                                <td>nvana@gmail.com</td>
                                <td>Ba Đình, Hà Nội</td>
                                <td>
                                    <div style={ { display: "flex", alignItems: "center", gap: 8 } }>
                                        <div className="status status-active" />
                                        <span> Đang hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="button button-block">Chặn</span>
                                </td>
                                <td>
                                    <span className="button button-edit">Sửa</span>
                                </td>
                                <td>
                                    <span className="button button-delete">Xóa</span>
                                </td>
                            </tr>
                            {
                                employeeList.map(e =>
                                {
                                    return (<tr>
                                        <td>1</td>
                                        <td>{ e.name }</td>
                                        <td>{ e.dob }</td>
                                        <td>{ e.email }</td>
                                        <td>{ e.address }</td>
                                        <td>
                                            <div style={ { display: "flex", alignItems: "center", gap: 8 } }>
                                                <div className="status status-active" />
                                                <span> Đang hoạt động</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="button button-block">Chặn</span>
                                        </td>
                                        <td>
                                            <span className="button button-edit">Sửa</span>
                                        </td>
                                        <td>
                                            <span className="button button-delete">Xóa</span>
                                        </td>
                                    </tr>);
                                }
                                )
                            }
                        </tbody>
                    </table>
                    <footer className="d-flex justify-content-end align-items-center gap-3">
                        <select className="form-select">
                            <option selected="">Hiển thị 10 bản ghi trên trang</option>
                            <option>Hiển thị 20 bản ghi trên trang</option>
                            <option>Hiển thị 50 bản ghi trên trang</option>
                            <option>Hiển thị 100 bản ghi trên trang</option>
                        </select>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </footer>
                </main>
            </div>
        </>
    );
}

export default ManageEmployee;