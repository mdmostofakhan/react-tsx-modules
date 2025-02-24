import { FormEvent, useState } from "react"
import Buttons from "./components/Ui/Buttons"
import Container from "./components/Ui/Container"
import Modal from "./components/Ui/Modal";


function App() {

  const [modal, setModal] = useState(false)

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
     e.preventDefault();
     console.log("clicked");
     if (true) {
       handleModalClose();
     }
  }
  
  return (
   
      <Container>
       <div className="flex items-center justify-center h-screen w-full">
        <Buttons onClick={() => setModal(prev => !prev)}>Open Modal</Buttons>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>This is modal title</h1>
          <Modal.CloseButton />
          </Modal.Header>
         <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">submit</button>
         </form>
        </Modal>
       </div>
      </Container>
   
  )
}

export default App