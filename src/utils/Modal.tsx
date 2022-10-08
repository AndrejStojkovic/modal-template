type ModalProps = {
  isOpen: boolean,
  handleModalClose: () => void,
  title: string,
  children: React.ReactNode
};

const Modal = ({isOpen, handleModalClose, title, children}: ModalProps) => {
  return (
    <>
      {isOpen &&
        <div className='w-screen min-h-screen absolute top-0 left-0'>
          <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50' onClick={handleModalClose}></div>
          <div className='bg-white border-1 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className='absolute top-0 right-0 p-1 font-bold text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md'
              onClick={handleModalClose}>
              <CloseIcon />
            </button>

            <h1 className='px-16 font-semibold text-xl'>{title}</h1>

            {children}
          </div>
        </div>
      }
    </>
  )
}

const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default Modal;