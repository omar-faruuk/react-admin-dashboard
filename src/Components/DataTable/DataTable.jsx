import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const DataTable = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columnsAction = [{
        field: "action", headerName: "Action", width: 200,
        renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to={`${params.id}`}>
                        <div className="viewButton">
                            View
                        </div>
                    </Link>
                    <div onClick={() => handleDelete(params.id)} className="deleteButton">
                        Delete
                    </div>
                </div>
            )
        }

    }]
    return (
        <div className='datatable'>
            <div className="top">
                <h1 className="title">Add new users</h1>
                <Link to="new"><span>Add new</span></Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(columnsAction)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable