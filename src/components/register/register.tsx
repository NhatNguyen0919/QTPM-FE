import { useState,useEffect } from "react";

const RegisterPage = () => {
    const [email,setEmail] = useState('')

    const [password,setPassword] =useState('') 

    const [name,setName] = useState('')

    const [phone,setPhone] = useState('')

    useEffect(() => {
        const storedEmail = localStorage.getItem('email')
        const storedPassword = localStorage.getItem('password')
        const storedPhone = localStorage.getItem('phone')
        const storedName = localStorage.getItem('name')

        if (storedEmail){
            setEmail(storedEmail)
        }
        if (storedPassword){
            setPassword(storedPassword)
        }
        if (storedPhone){
            setPhone(storedPhone)
        }
        if (storedName){
            setName(storedName)
        }
        console.log('Email:',storedEmail)
  console.log('Password:',storedPassword)
  console.log('Name:',storedName)
  console.log('Password:',storedPhone)
    },[]);

    const handleRegister = () =>{

    }

    return (
<section className="min-h-screen bg-cover object-cover bg-[url('https://images.unsplash.com/photo-1654840265439-bd2e5fad7379?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-4 text-6xl font-serif text-gray-900 dark:text-white">
          REGISTER   
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  
                  <div>
                      <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Email" />
                  </div>
                  <div>
                      <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                      type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" />
                  </div>
                  <div>
                      <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
                      <input 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                  </div>
                  <div>
                      <label form="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <button 
                    onClick={handleRegister}
                  type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );
  };
  
  export default RegisterPage;
  