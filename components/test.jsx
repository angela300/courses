import React, { useState, useEffect } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";

const isMobile = window.innerWidth <= 768;

function Dropdown({ name }) {
    console.log("Dropdown name:", name);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3000/api/${name}`);
                const { [name]: fetchedData } = await res.json();
                setData(fetchedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [name]);

    let displayName = '';
    let imgsrc = '/images/1.PNG';
    switch (name) {
        case 'paces':
            displayName = 'PACE (SOE Punjab)';
            imgsrc = '/images/2.jpg';
            break;
        case 'sciencerts':
            displayName = 'Science (NCERT)';
            imgsrc = '/images/3.jpg';
            break;
        case 'allstates':
            displayName = 'All State boards';
            imgsrc = '/images/4.jpg';
            break;
        case 'mathfoundations':
            displayName = 'Math foundations';
            imgsrc = '/images/5.jpg';
            break;
        case 'mathmahashtras':
            displayName = 'Math (Maharashtra)';
            imgsrc = '/images/6.jpg';
            break;
        case 'mathncerts':
            displayName = 'Math (NCERT)';
            imgsrc = '/images/1.PNG';
            break;
        default:
            displayName = name;
            break;
    }

    const categories = [
        'With certificate',
        'Free courses',
        "With free certificate"
    ];

    const allsubjectcourses = data;

    let [categoryFilters, setcategoryFilters] = useState(new Set());

    function updateFilters(checked, categoryFilter) {
        if (checked)
            setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
            setcategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
            });
    }

    const filteredProducts =
        categoryFilters.size === 0
            ? allsubjectcourses
            : allsubjectcourses.filter((p) => categoryFilters.has(p.type));

    return (
        <div>
            <div className="p-2" style={{ backgroundColor: '#d3d3d3', fontSize: isMobile ? "27px" : "initial" }}>
                <button onClick={() => setIsOpen(prev => !prev)}
                    className={`p-4 ${isMobile ? "pt-4 pb-4" : "pt-1 pb-1"} w-full flex items-center justify-between border-b-2`} style={{ borderColor: "gray" }}>

                    <div className="flex items-center">
                        <Image
                            src={imgsrc}
                            width={30}
                            height={30}
                            alt="Picture of the author"
                            className="rounded-full"
                        />
                        <span className="ml-2">{displayName}</span>
                    </div>
                    {isOpen ? (
                        <AiOutlineCaretUp className="h-8" />
                    ) : (
                        <AiOutlineCaretDown className="h-8" />
                    )}
                </button>

                {isOpen &&
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "10px" }}>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                                <IoFilter />
                                <span>Filter by</span>
                            </div>
                            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "3px" }}>
                                <div className="d-flex justify-content-evenly">
                                    {categories.map((elm, index) => {
                                        return (
                                            <div className="form-check ms-2" key={index}>
                                                <label className="form-check-label">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        onChange={(e) => updateFilters(e.target.checked, elm)}
                                                        style={{ marginRight: "5px" }}
                                                    />
                                                    {elm}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Showing courses</span>
                            </div>
                            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "3px" }}>
                                <div className="d-flex flex-wrap">
                                    {filteredProducts.map((prod) => {
                                        return (
                                            <div className="card m-3" style={{ width: isMobile ? '100%' : '400px' }} key={prod.id}>
                                                <div className="card-body">
                                                    <h3 className="font-bold">{prod.title}</h3>
                                                    <p>{prod.description}</p>
                                                    <p className="font-bold" style={{ fontSize: isMobile ? "15px" : "10px" }}>Category: {prod.type}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Dropdown;
