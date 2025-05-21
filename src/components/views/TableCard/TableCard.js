import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const TableCard = ({table}) => {
    return (
        <div className="d-flex mt-5 justify-content-between fs-2">
            <div className="d-flex w-50">
                <div className="fw-semibold w-25"> Table: {table.id} </div>
                <div> <span className="fw-semibold ">status:</span> {table.status} </div>
            </div>

            <Button as={Link} to={`/table/${table.id}`}>Show more</Button>

        </div>

    )
}
export default TableCard