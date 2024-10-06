import { useEffect, useState } from "react";
import Toast from "./Toast";
import { IToastArray, IToastProps } from "../assets/type";
import { subscribe } from "./toastManager";

const ToastContainer = () => {
  const [toasts, setToasts] = useState<IToastArray[]>([]);

  useEffect(() => {
    const unsubscribe = subscribe(setToasts);
    return () => unsubscribe();
  }, []);

  console.log("toasts", toasts);

  return (
    <>
      {toasts.map((toast, index) => (
        <Toast key={index} index={index} {...toast} />
      ))}
    </>
  );
};

export default ToastContainer;
