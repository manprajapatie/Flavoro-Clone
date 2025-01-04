import React from "react"

const CategoryMenu = () => {
    return(
        <div className="mx-6">
            <h3>Find the best food</h3>
            <div className="my-5 flex gap-3 overflow-x-scroll scroll-smoth">
                <button className="px-3 py-2 bg-lime-600 rounded-lg text-white hover:bg-lime-900 font-bold">
                    All
                </button>

                <button className="px-3 py-2 bg-lime-600 rounded-lg text-white hover:bg-lime-900 font-bold">
                    Lunch
                </button>

                <button className="px-3 py-2 bg-lime-600 rounded-lg text-white hover:bg-lime-900 font-bold">
                    BreakFast
                </button>

                <button className="px-3 py-2 bg-lime-600 rounded-lg text-white hover:bg-lime-900 font-bold">
                    Dinner
                </button>

                <button className="px-3 py-2 bg-lime-600 rounded-lg text-white hover:bg-lime-900 font-bold">
                    Snacks
                </button>
            </div>
        </div>
    )
}


export default CategoryMenu