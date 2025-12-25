import { Link, useLocation, useNavigate } from 'react-router';
import authImage from '../../../assets/authImage.png'
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import useAuth from '../../../hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signInUser, setUser} = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const handleSignIn = (data) => {
        signInUser(data.email, data.password)
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log In Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                 navigate(location?.state || '/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='w-10/12 mx-auto lg:flex md:flex md:justify-between md:items-center  lg:justify-between lg:items-center'>
                <div className='w-100 flex flex-col justify-center bg-base-100 shadow-sm  p-4 my-10'>
                    <h1 className="text-5xl font-bold">Wellcome Back</h1>
                    <p>Login with ZapShift</p>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                {...register('email', { required: true })}
                                placeholder="Email" />
                            {errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>}
                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input"
                                {...register('password', { required: true })}
                                placeholder="Password" />
                            {errors.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-lime-300 mt-4">Login</button>
                            <div><SocialLogIn /></div>
                        </fieldset>
                    </form>
                    <Link  state={location.state} to='/auth/signup' className='link link-hover text-center text-blue-400'>Have no account ,go to signup</Link>
                </div>
                <div>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </>
    );
};

export default Login;