import { useState } from 'react';
import Modal from './utils/Modal';

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className='App bg-gray-100 w-screen h-screen flex items-center justify-center'>
      <Modal isOpen={isModalOpen} handleModalClose={handleModalClose} title='Modal Title'>
      </Modal>

      <button className='bg-blue-500 px-4 py-2 font-semibold text-white rounded-md hover:bg-blue-600 shadow-md' onClick={() => handleModalOpen()}>
        Open Modal
      </button>
    </div>
  );
}

export default App;
