import { Children, createContext, MouseEvent, useContext, useRef, ReactNode } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";



const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
}

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          `fixed inset-0 flex justify-center items-center bg-slate-400/70 invisible z-[999]`,
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div ref={containerRef} className="bg-white w-full p-4 max-w-sm rounded-md">
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById('portal') as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const context = useContext(ModalContext) as TModalContext;
  if (!context) {
    throw new Error("CloseButton must be used within a Modal");
  }
  const { onClose } = context;

  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 bg-red-600 text-white rounded-sm p-0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return <div className="flex justify-center items-center w-full">{children}</div>;
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;