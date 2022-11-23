import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import placeholder from '../assets/placeholder.png';

const OtherReviewCArd = () => {
    return (
  <>
    {/* containt */}
            <div className="flex flex-col md:flex-row gap-1 w-full items-center justify-between mt-12">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-2 w-full justify-between items-center ">
                  <div className="flex gap-2">
                    <div>
                      <div className="w-10 h-10 bg-slate-100 rounded-full -mr-5">
                        <img
                          className="w-10 h-10 bg-slate-100 rounded-full object-contain"
                          src={placeholder}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <h4 className=" font-semibold text-xl">James Kowalski</h4>
                      <div className="flex gap-2 items-center ml-5">
                        <p className="text-xs text-lightGray">Head Marketing</p>
                        <div className="w-2 h-2 rounded-full bg-lightGray"></div>
                        <p className="text-xs text-lightGray">24 June 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button className="bg-lightBlue text-mainBlue rounded-full py-1 px-2 cursor-pointer">
                      Good Services
                    </button>
                    <button className="bg-lightGreen text-mainGreen rounded-full py-1 px-2 cursor-pointer">
                      Good Services
                    </button>
                    <button className="bg-lightRed text-mainRed rounded-full py-1 px-2 cursor-pointer">
                      Good Services
                    </button>
                  </div>{' '}
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    We recently had dinner with friends at David CC and we all
                    walked away with a great experience. Good food, pleasant
                    environment, personal attention through all the evening.
                    Thanks to the team and we will be back! I will give a good
                    recommendation to my friend, family and people what i look.
                  </p>
                </div>
              </div>
              {/* review */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className=" font-extrabold text-3xl">3.5</p>
                <div className="flex gap-1 items-center">
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainGray" />
                </div>
              </div>
              {/*end review */}
            </div>
            {/*end containt */}
    < div className = "mt-12  h-[.5px] w-full bg-gray-300" ></ div>
                </>
  )
}

export default OtherReviewCArd