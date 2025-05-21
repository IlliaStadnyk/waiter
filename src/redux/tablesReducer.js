import {API_URL} from "../config";

const createActionName = actionName => `app/tables/${actionName}`;
const GET_TABLES = createActionName('GET_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

export const getTablesRequest = payload => ({ type: GET_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });

export const fetchTables = () => {
    return (dispatch) => {
        fetch(API_URL + '/tables')
            .then(res => res.json())
            .then(tables => dispatch(getTablesRequest(tables)))
            .catch(err => console.error('Failed to fetch tables:', err));
    };
};

export const updateTableRequest = (payload) => {
    return (dispatch) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)  // <-- без {payload}
        };

        fetch(API_URL + `/tables/${payload.id}`, options)
            .then(res => {
                if (!res.ok) throw new Error('Failed to update');
                return res.json();
            })
            .then(data => dispatch(updateTable(data)))
            .catch(err => console.error('Update failed:', err));
    };
};

export const getTables = (state) => state.tables;
export const getTable = ({ tables }, tableId) =>
    tables.find(table => table.id === tableId);

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case GET_TABLES:
            return [...action.payload];
        case UPDATE_TABLE:
            return statePart.map(table =>
                table.id === action.payload.id ? { ...action.payload } : table
            );
        default:
            return statePart;
    }
};

export default tablesReducer;
