import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Trouble = () => {
    useEffect(() => {
        document.title = "Trouble | Gadget Heaven";
    }, []);

    const [tab, setTab] = useState("mobile");
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        password: ""
    });

    const handleSubmit = () => {
        // check valid input here
        if (tab === "mobile") {
            if (!formData.phone) {
                toast.error("Please enter your phone number.", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }

            const phonePattern = /^[0-9]{11}$/; 
            if (!phonePattern.test(formData.phone)) {
                toast.error("Please enter valid phone number", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }
        } else if (tab === "email") {
            if (!formData.email) {
                toast.error("Please enter email address", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }
            
            // check valid email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                toast.error("Please enter a valid email address.", {
                    position: "top-center",
                    autoClose: 3000,
                });
                return;
            }
        }

        if (!formData.password) {
            toast.error("Please enter your password.", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }
        toast.success("Thank you, We will contact you soon.", {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const handleReset = () => {
        setFormData({
            phone: "",
            email: "",
            password: ""
        });
    };

    return (
        <div>
            <div className='bg-[#9538E2] flex flex-col items-center py-5 relative'>
            <h2 className="text-base md:text-2xl font-semibold text-center mb-1 text-white">Are you facing any problem with products purchased from Gadget Heaven?</h2>

            <p className="text-xs md:text-base text-center text-gray-200 w-4/6 md:w-1/4 mb-6">Please select your item and submit. Our expert will contact as early as possible.</p>
            </div>

            <div className="max-w-md md:mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-[#D1B3FF] border-[#9538E2] mx-3">
            <ToastContainer></ToastContainer>

            <div className="flex justify-center border-b mb-4">
                <button className={`px-4 py-2 ${tab === "mobile" ? "bg-[#9538E2] text-white" : "bg-white text-black"} text-xs md:text-base  font-semibold`} onClick={() => setTab("mobile")}>Login with mobile
                </button>

                <button className={`px-4 py-2 ${tab === "email" ? "bg-[#9538E2]  text-white" : "bg-white text-black"} text-xs md:text-base font-semibold`} onClick={() => setTab("email")} > Login with email</button>
            </div>

            <div>
                <div className="mb-4">
                    <select className="w-full p-2 border rounded text-xs md:text-base">
                        <option>Bangladesh</option>
                    </select>
                </div>

                {/*  phone input */}
                {tab === "mobile" && (
                    <div className="flex items-center mb-4 text-xs md:text-base">
                        <span className="border p-2 rounded-l bg-gray-100">88</span>
                        <input type="tel" placeholder="Enter Your Phone Number" className="w-full p-2 border rounded-r" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
                    </div>
                )}

                {/* email input */}
                {tab === "email" && (
                    <div className="mb-4 ">
                        <input type="email" placeholder="Enter Your Email Address" className="w-full p-2 border rounded " value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                )}

                {/* pass Input */}
                <div className="mb-4">
                    <input type="password" placeholder="Enter Your Password" className="w-full p-2 border rounded text-xs md:text-base" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>

                <div className="flex space-x-2 mb-4 text-xs md:text-base">
                    <button onClick={handleSubmit} className="w-full bg-[#9538E2] text-white py-2 rounded">Submit</button>
                    <button onClick={() => {}} className="w-full bg-gray-300 py-2 rounded">Cancel</button>
                    <button onClick={handleReset} className="w-full bg-gray-300 py-2 rounded">Reset</button>
                </div>

                <div className="flex justify-between text-sm text-gray-500 text-xs md:text-base">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                    <a href="#" className="hover:underline">New Customer? Sign Up Here</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Trouble;
