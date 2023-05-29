import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function SignUpHandler() {
    if (email === '' || password === '') {
      setError('Please Input Email and Password to Proceed')
    } else {
      try {
        var headers = {
          Accept: "application/json",
          "Content-Type": "application.json"
        };
        const url = "http://localhost/apibackend/log/contactsignup.php";
        var data = {
          username: email,
          password: password,
        }
        console.log(data)
        const res = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data)
        }).then(response => response.json())
          .then(response => {
            console.log(response);
            if (response[0].Message === "Successfully Registered!")
             {
              alert("Successfully Registered! You'll be redirected to Login Page");
              navigate('/');
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


return (
    // BACKGROUND 
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" 
    style={{ 
      backgroundImage: `url('https://wallpaper-house.com/data/out/12/wallpaper2you_519782.jpg')`, 
      backgroundSize: 'cover' }}>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="relative z-10">

        {/* SIGN UP FORM */}
        <div className="min-h-full md:min-h-full bg-gray-100 flex items-center justify-center py-12 px-1 sm:px-6 lg:px-" style={{ marginTop: '-20', paddingBottom: '80px' }}>
          <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-3xl font-extrabold text-gray-900">Register for Contact Sys</h2>
            </div>
            <div class="text-center text-sm">
              <p>Enter Name, Email address, and Password to Register</p>
            </div>
            <form className="px-6 py-4 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">   
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                    autoComplete="new-password"
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
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={SignUpHandler}>
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  SIGN UP
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