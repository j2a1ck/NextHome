import Layout from "../../../components/PageLayout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            ورود به حساب کاربری
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                ایمیل
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04A2B9] focus:outline-none focus:ring-[#04A2B9]"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04A2B9] focus:outline-none focus:ring-[#04A2B9]"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#04A2B9] focus:ring-[#04A2B9]"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  مرا به خاطر بسپار
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#04A2B9] hover:text-[#028a9b]"
                >
                  رمز عبور را فراموش کرده اید؟
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-[#04A2B9] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#028a9b] focus:outline-none focus:ring-2 focus:ring-[#04A2B9] focus:ring-offset-2"
              >
                ورود
              </button>
            </div>
            <div className="text-right">
              <a
                href="/register"
                className="font-medium text-[#04A2B9] hover:text-[#028a9b]"
              >
                حساب کاربری ندارم
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
