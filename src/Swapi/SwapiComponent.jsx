import {TitleTextComponent} from "../Ui/TitleTextComponent";
import {Alert, Container, Spinner} from "react-bootstrap";
import {BtnComponent} from "./Components/BtnComponent";
import {FormInputComponent} from "./Components/FormInputComponent";
import {observer} from "mobx-react-lite";
import {swapiStore} from "../store/SwapiStore";

export const SwapiComponent = observer(function SwapiComponent() {

    function handleClearData() {
        swapiStore.clearData();
    }

    return (
        <Container className='text-center mt-4'>
            <TitleTextComponent title={'SWAPI'}/>
            <FormInputComponent/>
            <div className='mt-4'>
                {swapiStore.loading && <Spinner animation='border' variant='secondary'/>}
                {swapiStore.error && <Alert variant='danger'>{swapiStore.error}</Alert>}
                {swapiStore.data && !swapiStore.loading && (
                    <pre className='wrapper text-start'>
                        {JSON.stringify(swapiStore.data, null, 2)}
                    </pre>
                )}
            </div>
            <div className='mt-5'>
                <BtnComponent text={'Clear'} onClick={handleClearData}/>
            </div>
        </Container>
    )
})