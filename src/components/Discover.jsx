
import Icons from './common/Icons'

const Discover = () => {
  return (
    <div className='bg-[linear-gradient(to_bottom,#fefefe_0%,#fefefe_71%,#f5f5f5_72%,#f5f5f5_100%)] '>
      <div className='px-4 md:mt-42.5  mx-auto  w-full max-w-285 mt-22.5 '>
        <div className="md:h-[328.1px] h-auto flex flex-col items-center max-w-285 mx-auto rounded-3xl pt-15 pb-15.5 bg-[url('/assets/images/Bg-img2.webp')] bg-cover bg-center ">
          <h2 className='text-white font-bold text-3xl flex-col leading-[120%] max-w-[766.1px] px-2 flex text-center'><span>Love what Rabbit Did for You! </span>
            Share your story and help others discover human-first funding.</h2>
          <button aria-label="Open menujhk" className='text-white group w-full gap-1.5 max-w-[240.1px] sm:max-w-[296.1px] h-[60.1px] text-sm font-semibold leading-[125%] rounded-[200px] flex flex-row sm:text-base hover:text-ternary bg-dark justify-center items-center mt-8 hover:bg-white ' >Submit Your Testimonial <Icons icon={"upArrow"} /> </button>
        </div>
      </div>
    </div>
  )
}

export default Discover