import React from 'react'

function Input(props)
{

    return (

        <div>
            {props.datas.name &&
                <div className='flex flex-col gap-3'>
                    <div className="box w-full flex flex-col gap-2">
                        {/* CardHolder name */}
                        <label htmlFor={props.datas.name}>{props.datas.label}</label>
                        <input type={props.datas.type} name={props.datas.name} id={props.datas.name} className="p-3 border-[1px] border-Light-grayish-violet rounded-lg placeholder:text-Light-grayish-violet peer focus:invalid:border-Red" placeholder={props.datas.placeholder} required={props.datas.required} pattern={props.datas.pattern} onChange={props.handleChange} />
                        <p className='hidden peer-invalid:peer-focus:block text-Red capitalize text-[12px]'>{props.datas.errorMessage}</p>
                    </div>

                </div>}

            {!props.datas.name && <div className='w-full flex items-start gap-3'>
                <div className="date  flex flex-col gap-3">
                    <label htmlFor={props.datas.date.varient.Month.name}>{props.datas.date.label}</label>
                    <div className='flex w-full gap-3'>
                        <div className='w-1/2 flex flex-col gap-3  '>
                            {/* Month */}
                            <input type={props.datas.date.varient.Month.type} name={props.datas.date.varient.Month.name} placeholder={props.datas.date.varient.Month.placeholder} id={props.datas.date.varient.Month.placeholder} className="p-3 border-[1px] border-Light-grayish-violet rounded-lg placeholder:text-Light-grayish-violet w-full peer focus:invalid:border-Red" required={props.datas.date.varient.Month.required} pattern={props.datas.date.varient.Month.pattern} onChange={props.handleChange} />
                            <p className='text-Red text-[12px] capitalize hidden peer-invalid:peer-focus:block'>{props.datas.date.varient.Month.errorMessage}</p>
                        </div>

                        {/* Year */}
                        <div className='flex flex-col gap-3 w-1/2'>
                            <input type={props.datas.date.varient.Year.type} name={props.datas.date.varient.Year.name} placeholder={props.datas.date.varient.Year.placeholder} className="p-3 border-[1px] border-Light-grayish-violet rounded-lg placeholder:text-Light-grayish-violet w-full peer focus:invalid:border-Red" required={props.datas.date.varient.Year.required} pattern={props.datas.date.varient.Year.pattern} onChange={props.handleChange} />
                            <p className='text-Red text-[12px] capitalize hidden peer-invalid:peer-focus:block'>{props.datas.date.varient.Year.errorMessage}</p>
                        </div>

                    </div>
                </div>


                {/* cvc */}
                <div className="cvc flex flex-col gap-3">
                    <label htmlFor={props.datas.cvc.name}>{props.datas.cvc.label}</label>
                    <input type={props.datas.cvc.type} name={props.datas.cvc.name} id={props.datas.cvc.name} className="p-3 border-[1px] border-Light-grayish-violet rounded-lg placeholder:text-Light-grayish-violet peer focus:invalid:border-Red" placeholder={props.datas.cvc.placeholder} required={props.datas.cvc.required} pattern={props.datas.cvc.pattern} onChange={props.handleChange} />
                    <p className='text-Red text-[12px] capitalize hidden peer-invalid:peer-focus:block transition-all' >{props.datas.cvc.errorMessage} </p>

                </div>
            </div>}
        </div >
    )
}

export default Input
