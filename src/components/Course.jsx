import { useState } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { Draggable } from 'react-beautiful-dnd';

export default function Course({subject, number, name, hours, identifier, description, index}) {
  let borderColor = "border-sky-500"
  let boxColor = "bg-sky-500"
  const title = subject + " " + number
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
    strategy: 'absolute',
    modifiers: [
      {
        name: 'arrow',
      },
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 20]
        }
      },
      
    ]
  })

  return (
    <Draggable draggableId={identifier} index={index}>
      {(provided) => (
    // <Popover 
    //   className="relative"
    //   ref={provided.innerRef}
    //   {...provided.draggableProps}
    //   {...provided.dragHandleProps}
    //   >
    // <Popover.Button ref={setReferenceElement} className="relative">
    <div className={"group relative border-2 rounded-2xl w-64 my-2 drop-shadow cursor-pointer " + borderColor}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}>
      <div className={"absolute -inset-0 rounded-2xl opacity-25 blur group-hover:opacity-75 transition duration-200 " + boxColor}></div>
      <div className={`relative bg ${boxColor} rounded-t-xl py-1`}>
        <h2 className='text-xl w-50 text-center font-bold'>{title}</h2>
      </div>
      <div className='relative py-2 bg-white rounded-b-2xl'>
        <h3 className='text-center text-lg'>{name}</h3>
        <div className='flex flex-row justify-end mr-2'>
          {/* <ul>
            {reqs.map((req) => <li className='ml-2 font-thin text-sm'>{req}</li>)}
          </ul> */}
          <p className='italic text-sm'>{hours} Hour{hours>1 ? "s" : ""}</p>
        </div>
      </div>
    </div>
    // </Popover.Button>
    // <Transition
    //     enter="transition duration-200 ease-out"
    //     enterFrom="transform scale-95 opacity-0"
    //     enterTo="transform scale-100 opacity-100"
    //     leave="transition duration-75 ease-out"
    //     leaveFrom="transform scale-100 opacity-100"
    //     leaveTo="transform scale-95 opacity-0"
    //     className="relative z-30"
    //   >
    //   <Popover.Panel 
    //     className={"bg-white rounded-lg border-2 p-4 " + borderColor}
    //     ref={setPopperElement}
    //     style={styles.popper}
    //     placement="right"
    //     {...attributes.popper}>
    //       <h2 className='text-lg font-bold'>Description:</h2>
    //       <p className="">
    //         {description}
    //       </p>
    //   </Popover.Panel>
    // </Transition>
    // </Popover>
    )}
    </Draggable>
  )
}