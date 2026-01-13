const RegisterStepper = ({ step }) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      {[1, 2, 3, 4, 5].map((n, idx) => {
        const isActive = n === step;
        const isDone = n < step;
        return (
          <div key={n} className="flex items-center">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{
                backgroundColor: isActive || isDone ? '#0EB7EE' : '#E5E7EB',
                color: isActive || isDone ? '#FFFFFF' : '#64748B',
              }}
            >
              {n}
            </div>
            {idx < 4 && <div className="w-10 h-px bg-[#E5E7EB] mx-3" />}
          </div>
        );
      })}
    </div>
  );
};

export default RegisterStepper;


