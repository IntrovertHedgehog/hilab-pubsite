import Link from "next/link";
import React from "react";

// name_data
const people = [
  {
    name: "Low Liang Leng",
  },
  {
    name: "Ong Zhi Quan",
  },
  {
    name: "Ong Zhi Peng",
  },
  {
    name: "Ma Pengfei",
  },
  {
    name: "Poh Yi Long",
  },
  {
    name: "Fu Yisi",
  },
  {
    name: "Xu Ping",
  },
  {
    name: "Le Van Minh",
  }
];

const Category = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">Peole</h3>
        <div className="sidebar__widget-content">
          <ul>
            {people.map((item, i) => (
              <li key={i}>
                <Link href="/blog-details">
                  {item.name}
                  <i className="fa-regular fa-user"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
