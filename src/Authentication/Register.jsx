import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        email: '',
        password: '',
        role: "user"
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        const { firstname, lastname, gender, email, password } = formData;

        if (!firstname) tempErrors.firstname = 'Firstname is required';
        if (!lastname) tempErrors.lastname = 'Lastname is required';
        if (!email) tempErrors.email = 'Email is required';
        if (!password) tempErrors.password = 'Password is required';
        if (!gender) tempErrors.gender = 'Gender is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const response = await fetch('https://ecommerce-api-8ga2.onrender.com/api/user/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
    
                const result = await response.json();
                if (response.ok) {
                    alert('Registration successful!');
                    navigate('/login'); 
                } else {
                    alert('Error during registration');
                }
            } catch (error) {
                alert('Network error occurred');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstname" className="block text-gray-700">Firstname:</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.firstname && <p className="text-red-600 text-sm">{errors.firstname}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastname" className="block text-gray-700">Lastname:</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.lastname && <p className="text-red-600 text-sm">{errors.lastname}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Gender:</label>
                        <div className="flex items-center space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === 'Other'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                        {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                    </div>

                    <button 
                        type="submit" 
                        className={`w-full py-2 px-4 text-white rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
