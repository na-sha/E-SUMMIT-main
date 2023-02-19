const Button = ({styles, ...props}:any) => {
    return (
      <button type='button' className={`py-4 px-6 bg-transparent font-poppins font-medium text-[18px] text-white border-4 border-yellow-300 cursor-pointer rounded-3xl hover:bg-yellow-300 hover:text-primary ${styles}`}>
        {props.cta}
      </button>
    )
  }
  
  export default Button