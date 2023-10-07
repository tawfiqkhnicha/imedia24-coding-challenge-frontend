import { useState } from "react";

const usePokemonModal = ()=> {
  const [modalData, setModalData] = useState<{ isOpen: boolean; id: number | null }>({
    isOpen: false,
    id: null,
  });

  const showDetails = (id: number) => {
    setModalData({ isOpen: true, id: id });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, id: null });
  };

  return {
    modalData,
    showDetails,
    closeModal,
  };
}

export default usePokemonModal