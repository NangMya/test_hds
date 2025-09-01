import Swal from "sweetalert2";

// Confirm dialog (reusable)
export const confirmDialog = async (options?: {
  title?: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
}) => {
  const result = await Swal.fire({
    title: options?.title || "Are you sure?",
    text: options?.text || "You won't be able to undo this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: options?.confirmText || "Yes",
    cancelButtonText: options?.cancelText || "Cancel",
  });

  return result.isConfirmed;
};

// Success alert
export const successAlert = (message = "Success!") => {
  return Swal.fire({
    title: "Success",
    text: message,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
};

// Error alert
export const errorAlert = (message = "Something went wrong!") => {
  return Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
  });
};

// Info alert
export const infoAlert = (message: string) => {
  return Swal.fire({
    title: "Info",
    text: message,
    icon: "info",
  });
};