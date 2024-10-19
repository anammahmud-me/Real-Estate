/* eslint-disable react/prop-types */
export default function Button({text, href}) {
  return (
    <>
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
      >
        {text}
      </a>
    </>
  );
}
