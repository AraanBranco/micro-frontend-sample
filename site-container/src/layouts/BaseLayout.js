
export default function BaseLayout () {
  return (
    <div className="container mx-auto">
      <div className="block">
        <form className="grid grid-cols-1 gap-2 w-2/3 justify-center mx-auto my-auto">
          <h1 class="text-center w-full">SIGN IN</h1>

          <div class="container mx-auto center">
            <button class="py-3 px-6 text-white rounded-lg bg-blue-500 shadow-lg block mx-auto">
              Sign In with Google
            </button>
          </div>

          <div class="grid grid-cols-3 divide-x-0 divide-green-500">
            <div><hr class="my-2 float-left w-full h-2" /></div>
            <div class="text-center">Or sign in with you email</div>
            <div><hr class="my-2 float-left w-full h-2" /></div>
          </div>
          <label class="block">
            <span class="text-gray-700">Email</span>
            <input
              type="email"
              class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>

          <label class="block">
            <span class="text-gray-700">Password</span>
            <input
              type="password"
              class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
        </form>
      </div>
    </div>
  )
}
