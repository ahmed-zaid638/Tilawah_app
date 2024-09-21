interface SignupFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}
const LoginForm: React.FC<SignupFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5 ">
      <div className="max-w-[800px] w-full flex justify-center  ">
        <div className="w-full sm:max-w-[50%] bg-white p-8 ">
          <h2 className="text-2xl font-bold mb-6 text-black ">تسجيل الدخول </h2>
          <div className="flex items-center gap-1 mb-3">
            <div className="text-[24px]">لدى حساب بالفعل</div>
            <a href="/signup" className="text-primary font-bold text-[24px]">
              انشاء حساب{" "}
            </a>
          </div>
          <button className="flex gap-2 items-center justify-center border rounded-md w-full px-2 py-2">
            <img src="./google.png" alt="" className="w-7" />
            <span className="text-lg">تسجيل الدخول عبر جوجل</span>
          </button>
          <form className="text-right">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary text-white text-[20px] font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                انشاء حساب
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block max-w-[50%] w-full  h-full bg-red-300">
          <img src="./login.png" alt="" className="min-h-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;