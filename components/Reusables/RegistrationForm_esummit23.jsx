import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const RegistrationForm_esummit23 = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [year, setYear] = useState('')
    const [branch, setBranch] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'fname') {
            setFname(e.target.value)
        }
        else if (e.target.name === 'lname') {
            setLname(e.target.value)
        }
        else if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'rollNo') {
            setRollNo(e.target.value)
        }
        else if (e.target.name === 'year') {
            setYear(e.target.value)
        }
        else if (e.target.name === 'branch') {
            setBranch(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { fname, lname, email, rollNo, year, branch }
        // console.log(data);
        let res = await fetch("/api/registration", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        let response = await res.json()
        console.log(response);

        setFname('')
        setLname('')
        setEmail('')
        setRollNo('')
        setYear('')
        setBranch('')
        toast.success('🦄 You are registered!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form onSubmit={handleSubmit} method="POST" className="w-full max-w-lg" id="register" >
                <div className="flex flex-wrap -mx-3 mb-6">
                    {/* First Name */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fname">
                            First Name
                        </label>
                        <input onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="fname" type="text" placeholder="First name" value={fname} name="fname" required />
                        <p className="text-red-500 text-xs italic">Please fill out every field.</p>
                    </div>
                    {/* Last name */}
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lname">
                            Last Name
                        </label>
                        <input value={lname} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lname" type="text" placeholder="Last name" name="lname" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    {/* Email */}
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            E-Mail
                        </label>
                        <input value={email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="abc@xyz.lmn" name="email" required />
                        <p className="text-gray-600 text-xs italic">College mail is preffered</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    {/* Roll Number */}
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rollNo">
                            RollNo.
                        </label>
                        <input value={rollNo} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="rollNo" type="text" placeholder="1021XXXXX" name="rollNo" required />
                    </div>
                    {/* Year */}
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="year">
                            Year
                        </label>
                        <div className="relative">
                            <select value={year} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="year" name="year">
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                                <option>others</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    {/* Branch */}
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="branch">
                            Branch
                        </label>
                        <input value={branch} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="branch" type="text" placeholder="eg. COE, ENC" name="branch" />
                    </div>
                </div>
                {/* Submit Button */}
                <div className="md:flex md:items-center">
                    <div className="">
                        <button className="shadow border-4 border-white bg-black hover:bg-white hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" form="register" value="submit">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegistrationForm_esummit23