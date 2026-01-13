const RegisterFileBox = ({ file, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full border-2 border-dashed rounded-2xl p-6 text-center transition-colors ${
        disabled ? 'bg-[#F8FAFC] border-[#E5E7EB] cursor-not-allowed opacity-60' : 'bg-white border-[#E5E7EB] hover:border-[#0EB7EE]'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <i className="fas fa-cloud-arrow-up text-2xl text-secondary mb-3" aria-hidden="true"></i>
        <div className="font-medium text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
          {file ? file.name : 'Click to upload'}
        </div>
        <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#94A3B8' }}>
          PDF, JPG, PNG (Max 5MB)
        </div>
      </div>
    </button>
  );
};

export default RegisterFileBox;


