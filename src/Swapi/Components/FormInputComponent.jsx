import {observer} from "mobx-react-lite";
import Form from "react-bootstrap/Form";
import {Col, InputGroup, Row} from "react-bootstrap";
import {BtnComponent} from "./BtnComponent";
import {swapiStore} from "../../store/SwapiStore";

export const FormInputComponent = observer(function FormInputComponent() {
    function handleInputChange(e) {
        swapiStore.setQuery(e.target.value);
    }

    function handleLoadData() {
        if (swapiStore.query.trim()) swapiStore.fetchData();
    }

    return (
        <Form>
            <Row className='align-items-center justify-content-center'>
                <Col>
                    <InputGroup>
                        <InputGroup.Text>https://swapi.dev/api/</InputGroup.Text>
                        <Form.Control
                            type='text'
                            placeholder='people/1'
                            value={swapiStore.query}
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                </Col>
                <Col xs='auto'>
                    <BtnComponent text={'Request'} onClick={handleLoadData}/>
                </Col>
            </Row>
        </Form>
    );
});
