const SuccessToast = ({ open, message }) => {
  return (
    <div
      id="success-toast"
      className={`fixed top-20 left-4 right-4 sm:left-auto sm:right-6 bg-green-500 text-white px-4 sm:px-6 py-4 rounded-2xl sm:rounded-full shadow-lg transform ${
        open ? 'translate-x-0' : 'translate-x-[110%]'
      } transition-transform duration-300 z-50 max-w-[520px] sm:max-w-none`}
    >
      <div className="flex items-start sm:items-center gap-3">
        <i className="fas fa-circle-check mt-0.5 sm:mt-0"></i>
        <span className="text-sm sm:text-base">{message}</span>
      </div>
    </div>
  );
};

export default SuccessToast;


