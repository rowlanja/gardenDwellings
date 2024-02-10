import customStyle from './ContentTable.css'
import { useState, useHook, useEffect } from 'react';
import styled from "styled-components";

const NavbarLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 10px;
    /* Changing the color */
    &:hover {
        color: red;
    }
    `;

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);
  
    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("h2, h3")
      );
  
      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);
  
    return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];
  
    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;
  
      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });
  
    return nestedHeadings;
  };

  const Headings = ({ headings }) => (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`}>{heading.title}</a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <NavbarLink key={child.id}>
                  <a href={`#${child.id}`}>{child.title}</a>
                </NavbarLink>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

function TableOfContent() {
    const { nestedHeadings } = useHeadingsData();

    return (
      <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} />
      </nav>
    );
}
export default TableOfContent