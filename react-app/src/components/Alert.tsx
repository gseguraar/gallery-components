import { ReactNode } from "react";

//we need to make it dynamic so we use, props+interface
interface Props {
  children: ReactNode; // with this type we can pass html content or more complex data to our component
  onClose: () => void;
}

//special prop ---> children, we can pass children to the component
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
