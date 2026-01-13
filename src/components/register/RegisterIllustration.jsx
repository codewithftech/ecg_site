const RegisterIllustration = () => {
  return (
    <div id="register-illustration" className="hidden lg:block">
      <div className="relative">
        <div className="w-full h-[500px] overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4acdbd98f8-4205ad13c48d519d6453.png"
            alt="modern vape wholesale business illustration with professional design elements"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
        <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 700, lineHeight: '1.33' }}
          >
            Welcome to StrictlyEcig
          </h3>
          <p
            className="text-white/90"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5' }}
          >
            Your trusted B2B wholesale partner for premium vaping products
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterIllustration;


