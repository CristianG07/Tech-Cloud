import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { InputForm } from '../ui/InputForm'
import { Label } from '../ui/label'
import { IoIosClose } from 'react-icons/io'
import { faceboo_icon, google } from '@/assets/images'
import { Checkbox } from '../ui/checkbox'

export const PopUpSignUpMobile = ({props}) => {
  const { openSignUpMobile, setOpenSignUpMobile } = props

  return (
    <section
      className={`absolute left-0 right-0 calc_header sm:top-52 w-full sm:w-[390px] mx-auto bg-card_gray shadow-xl text-sm rounded-b-xl sm:rounded-xl px-14 py-14 z-30 transition-all duration-300 ${
        openSignUpMobile ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className='space-y-5'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl'>Sign up</span>

          <button
            onClick={() => {
              setOpenSignUpMobile(false)
            }}
            className='text-text_secondary'
          >
            <IoIosClose size={25} />
          </button>
        </div>
        <div className='space-y-4'>
          <form className='space-y-3' action='#' method='POST'>
            <div>
              <Label htmlFor='email'>Email or phone number</Label>
              <div>
                <InputForm
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor='password'>Create a password</Label>
              <div>
                <InputForm
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor='repeatpassword'>Repeat a password</Label>
              <div>
                <InputForm
                  name='repeatpassword'
                  type='password'
                  required
                />
              </div>
            </div>
            <div className='flex gap-3 mt-1'>
              <Checkbox />
              <Label>
                <span className='text-sm text-text_secondary'>I accept</span>{' '}
                <Link className='underline underline-offset-1 text-light_secondary'>
                  terms and conditions
                </Link>
              </Label>
            </div>
            <div className='pt-3'>
              <button
                type='submit'
                className='flex w-full justify-center rounded-xl bg-light_secondary px-3 py-3.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 duration-500'
              >
                Sign up
              </button>
            </div>
          </form>
          <div>
            <p className='text-accent_primary text-center'>Or log in with</p>
          </div>
          <div className='flex justify-center gap-7 text-lg'>
            <Button className='flex items-center gap-2 bg-light_primary text-black'>
              <div className='w-5 h-5'>
                <img src={google} alt='google_icon' />
              </div>
              Google
            </Button>
            <Button className='flex items-center gap-2 bg-light_primary text-black py-5'>
              <div className='w-6 h-6'>
                <img src={faceboo_icon} alt='faceboo_icon' />
              </div>
              Facebook
            </Button>
          </div>
          <div className='flex justify-center pt-4'>
            <span className='text-accent_primary mr-1'>
              You already have an account?
            </span>
            <button
              onClick={() => {
                setOpenSignUpMobile(false)
              }}
              className='text-dark_primary underline underline-offset-1'
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}