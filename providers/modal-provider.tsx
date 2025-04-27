"use client";
import RenameModal from "@/components/modals/rename-modal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RenameModal />
    </>
  );
};

export default ModalProvider;
