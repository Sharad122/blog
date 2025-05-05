"use client";

const MessageStrap = ({message, variant } : {message:string|undefined, variant:string|undefined}) => {
  const background = Object.freeze({success:"bg-green-700", info:"bg-blue-600", warning:"bg-yellow-700", error:"bg-red-700"});
  return (
    <div className={`${background[variant as keyof typeof background]} p-4 onest text-white tracking-wide text-center rounded-sm`}>{message}</div>
  )
}

export default MessageStrap;
