import { useRef, useState } from "react";
import { IToastProps } from "../assets/type";

interface ToastArray extends IToastProps {
  index: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastArray[]>([]);
  const idRef = useRef<number>(0);

  const handleAddToast = (toast: IToastProps) => {
    const newToast = { ...toast, index: idRef.current++ };
    setToasts((prev) => [...prev, newToast]);

    if (toast.duration) {
      setTimeout(() => {
        setToasts((prev) =>
          prev.filter((toast) => {
            return toast.index !== newToast.index;
          })
        );
      }, toast.duration);
    }
  };

  return {
    toasts,
    handleAddToast,
  };
};
