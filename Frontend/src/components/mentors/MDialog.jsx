import { MultiSelect } from '@mantine/core';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

function MDialog({button}) {
  return (
    <div>
            <Dialog>
              <DialogTrigger className='w-135 py-2 rounded-sm bg-[#5BE38D] text-2xl text-black flex justify-center items-center cursor-pointer'>{button}</DialogTrigger>
              <DialogContent className="bg-[#E9E9E9] text-black border-none !max-w-none w-[90vw] !max-h-none h-[90vh] p-0">
                <DialogHeader>
                  <DialogTitle className='font-bold text-[32px] px-10 pt-5'>Get a Personalized Mentor!</DialogTitle>
                  <hr className="border-2 border-[#C0C0C0] w-full"/>
                  <DialogDescription>
                    <div className="px-10 py-5 text-black">
                      <div>
                        <label htmlFor="" className="font-semibold text-xl">Search Mentor</label>
                        <div className="bg-white px-3 py-1 flex mt-1 rounded-sm">
                          <i class="ri-search-line text-lg text-[#6C6C6C]"></i>
                          <input type="text" placeholder="Mentor Name / College Name" className="border-none outline-0 w-full mx-2 placeholder:font-semibold placeholder:text-[#6C6C6C]" />
                        </div>
                      </div>

                      <div className="mt-3">
                        <label htmlFor="" className="font-semibold text-xl">Location</label>
                        <div className="bg-white px-3 py-1 flex mt-1 rounded-sm">
                          <i class="ri-search-line text-lg text-[#6C6C6C]"></i>
                          <input type="text" placeholder="College Location" className="border-none outline-0 w-full mx-2 placeholder:font-semibold placeholder:text-[#6C6C6C]" />
                        </div>
                      </div>

                      <div className="mt-3">
                          <MultiSelect
                          data={['Choose Filter 1','Choose Filter 2']}
                          defaultValue={['Choose Filter 1','Choose Filter 2']}
                          styles={{
                            input: {
                              backgroundColor: 'transparent',
                              border: 'none',
                              display: 'flex',
                              justifyContent: 'start',
                              alignItems: 'center',
                            }
                          }}
                          />
                      </div>

                      <div className="mt-3 w-full h-fit p-5 bg-[#5BE38D] rounded-2xl">
                          <h1 className="font-bold text-xl">COURSES</h1>
                      </div>

                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
    </div>
  )
}

export default MDialog