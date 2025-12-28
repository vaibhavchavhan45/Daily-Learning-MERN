function App() {
  return (
    <>
      {/*Flexbox*/}
      <div className="flex justify-between">
        <div className="text-red-500">Box-1</div>
        <div className="text-green-500">Box-2</div>
        <div className="text-yellow-500">Box-3</div>
        <div className="text-gray-500">Box-4</div>
        <div className="text-blue-500">Box-5</div>
      </div>


      {/*Grids*/}
      <div className="grid grid-cols-10">
        <div style={{backgroundColor : "red"}} className="col-span-4">This is first children</div>
        <div style={{backgroundColor : "green"}} className="col-span-4">This is second children</div>
        <div style={{backgroundColor : "yellow"}} className="col-span-2">This is third children</div>
      </div>

      {/*Using flexbox for the same functionality as like grid(dividing the things in columns)*/}
      <div className="flex">
        <div className="bg-yellow-400 w-[40%]">This is first children</div>
        <div className="bg-red-400 w-[40%]">This is second children</div>
        <div className="bg-green-400 w-[20%]">This is third children</div>
      </div>

      {/*Responsiveness and its breakpoints*/}
      <div className="text-green-500 md:text-red-500">
        hi there
      </div>


      {/*3 divs using responsiveness breakpoints*/}
      <div className="md:flex justify-between">
        <div>First child</div>
        <div>Second child</div>
        <div>Third child</div>
      </div>

      {/*Hitting the breakpoint
        meaning of below code : Tailwind works on a mobile first approach means bydefault styling is applied to on a mobile not on larger devices 
        But, here we define that if u go above large breakpoint means above 1024px then these 3 divs should be placed in a 3 columns means single row but, 3 cols
        And, if the screen size is not reaching the lg breakpoint then default styling(grid grid-cols-1) should be kick in */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-red-700">Hi there 1</div>
        <div className="bg-yellow-700">Hi there 2</div>
        <div className="bg-green-400">Hi there 3</div>
      </div>

      {/*Using manually define class in tailwind.config.js*/}
        <div className="bg-[var(--brand)]">
          Vaibhav Chavhan
        </div>

    </>
  )
}

export default App
