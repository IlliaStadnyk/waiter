import {useNavigate, useParams} from "react-router-dom";
import style from "./Table.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getTable, updateTableRequest} from "../../../redux/tablesReducer";
import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const Table = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const table = useSelector(state => getTable(state, params.id));

    const [status, setStatus] = useState('');
    const [peopleAmount, setPeopleAmount] = useState('');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
    const [bill, setBill] = useState('');



    useEffect(() => {
        if (table) {
            setStatus(table.status);
            setPeopleAmount(table.peopleAmount);
            setMaxPeopleAmount(table.maxPeopleAmount);
            setBill(table.bill);
        }
    }, [table]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            id: table.id,
            status: status,
            peopleAmount: Number(peopleAmount),
            maxPeopleAmount: Number(maxPeopleAmount),
            bill: status === "Busy" ? Number(bill) : 0
        };

        dispatch(updateTableRequest(payload));
        navigate("/");
    };


    if (!table) return <p>Loading...</p>;

    return (
        <Container>
            <h1 className="mb-4">Table {table.id}</h1>
            <Form onSubmit={handleSubmit}>
                {/* Status */}
                <Form.Group className={style.formGroup}>
                    <Form.Label className={style.lable} ><strong>Status:</strong></Form.Label>
                    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} className={style.select}>
                        <option value="Busy">Busy</option>
                        <option value="Free">Free</option>
                        <option value="Reserved">Reserved</option>
                        <option value="Cleaning">Cleaning</option>
                    </Form.Select>
                </Form.Group>

                {/* People */}
                <Form.Group className={style.formGroup}>
                    <Form.Label className={style.lable}><strong>People:</strong></Form.Label>
                    <Row className="align-items-center">
                        <Col xs="auto" className={style.select}>
                            <Form.Control
                                type="number"
                                min={0}
                                max={maxPeopleAmount}
                                value={peopleAmount}
                                onChange={(e) => setPeopleAmount(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">/</Col>
                        <Col xs="auto" className={style.select}>
                            <Form.Control
                                type="number"
                                min={1}
                                max={10}
                                value={maxPeopleAmount}
                                onChange={(e) => setMaxPeopleAmount(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                {status === "Busy" && (
                <Form.Group className={style.formGroup}>
                    <Form.Label className={style.lable}><strong>Bill:</strong></Form.Label>
                    <InputGroup className={style.select}>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            min={0}
                            value={bill}
                            onChange={(e) => setBill(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>)}

                {/* Submit Button */}
                <Button type="submit" variant="primary">Update</Button>
            </Form>
        </Container>
    );
};

export default Table;
