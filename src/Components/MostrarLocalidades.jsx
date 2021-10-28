import { Modal, Button } from 'react-bootstrap'

const MostrarLocalidades = (props) => {


    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{props.solicitud ?props.solicitud.remitente:" No hay solicitud "}
                
                {props.codigo ?props.codigo:""}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}
export default MostrarLocalidades;