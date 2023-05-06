import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function LoginHandler() {
        if (email === '' || password === '') {
          setError('Please Input Email and Password to Proceed')
        } else {
          try {
            var headers = {
              Accept: "application/json",
              "Content-Type": "application.json"
            };
            const url = "http://localhost/apibackend/log/contactlogin.php";
            var data = {
              Username: email,
              Password: password,
            }
            console.log(data)
            const res = await fetch(url, {
              method: "POST",
              headers: headers,
              body: JSON.stringify(data)
            }).then(response => response.json())
              .then(response => {
                console.log(response);
                if (response[0].Message === "Welcome!")
                 {
                  alert("You have been Logged In!");
                  navigate('/Home');
                } else {
                  setError(response[0].Message);
                }
              }).catch(error => {
                console.log(error)
              })
          } catch (err) { 
            console.log(err) 
          }
        }
      }

      function DirectRegister() {
        navigate('/Signup');
      }

    return (

        // BACKGROUND 
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url('https://wallpaper-house.com/data/out/12/wallpaper2you_519782.jpg')`,
                backgroundSize: 'cover'
            }}>
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
            <div className="relative z-10">

                {/* LOGIN FORM */}
                <div className="min-h-full md:min-h-full bg-gray-100 flex items-center justify-center py-12 px-1 sm:px-6 lg:px-" style={{ marginTop: '-20', paddingBottom: '80px' }}>
                    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
                        <div className="pt-10 px-6 pb-22 py-2">
                            <div className="relative mt-8">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img className="h-20 w-20 rounded-full" src="https://cdn1.iconfinder.com/data/icons/professionals-flat-colorful-round-corner/614/1573_-_Call_Center_Agent-512.png" alt="" />
                                </div>
                            </div>
                            <h2 className="pt-12 text-3xl font-extrabold text-gray-900 text-center">Contact Management System</h2>
                        </div>
                        <div class="text-center text-sm">
                            <p>Please Login to Access the Page</p>
                        </div>
                        <form className="px-6 py-4 space-y-6">
                            <div className="center rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => LoginHandler(email, password)}
                                >
                                    LOG IN
                                </button>
                            </div>
                            <div class="flex flex-col justify-center items-center text-center text-sm pb-2">
                                <p class="pb-2">If you don't have an Account, Click the Button Register Bellow</p>
                                <button
                                    type="button"
                                    className="p-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                    onClick={DirectRegister}
                                >
                                    REGISTER
                                </button>
                            </div>
                        </form>
                        {error && <p className="mt-2 px-6 py-2 text-sm text-red-600">{error}</p>}

                    </div>
                </div>
            </div>
        </div>
    );
}