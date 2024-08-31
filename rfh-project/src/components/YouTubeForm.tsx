import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
const YouTubeForm = () => {
  let renderCount = 0;

  type formValues = {
    username: String,
    email: String,
    channel: string
  }

  const form = useForm<formValues>()
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: formValues) => {
    console.log('form submitted', data)
  }
  renderCount++
  return (
    <div>
      <h1>YouTube Form {(renderCount/2)}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-control'>
        <label htmlFor="username">username</label>
        <input type="text" id="username"
       {...register ("username", 
        {required:
        { value: true,
          message:"username is required",}
        })} />
        <p className='error'>{errors.username?.message}</p>
        </div>

       <div className='form-control'>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email", {
          pattern: {
            value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format",
          },
})} />
<p>{errors.email?.message}</p>
</div>
       
       <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", { required: 
           "channel is required",
        })} />
        <p>{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default YouTubeForm
