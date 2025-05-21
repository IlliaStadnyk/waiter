import {Container, Spinner} from "react-bootstrap";
import {getTables} from "../../../redux/tablesReducer";
import {useSelector} from "react-redux";
import TableCard from "../../views/TableCard/TableCard";

const Home = () => {

    const tables = useSelector(getTables);
    console.log(tables);
    return (
        <Container>
            <h1> All tables</h1>
            {tables && tables.map(table => (
                <TableCard key={table.id} table={table} />
            ))}
            {tables.length===0 && <Spinner />}
        </Container>
    )
}

export default Home;