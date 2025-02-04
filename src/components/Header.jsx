import React, { useState } from 'react'

const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
]
const Header = () => {
    const [show, setShow] =useState(false);  // 리액트는 버추얼 돔 형태로 파일을 개별적으로 불어와서 사용.

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="/">portfolio<em>react.js</em></a>
                    </h1>
                </div>
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인 메뉴">
                    {/* {}괄호 안 코드는 자바스크립트 코드, header__nav가 있고 show가 ture면 show를 붙이고, false인 경우 "" 빈값으로 처리 */}
                    <ul>
                        {headerNav.map((nav, key) => (       // 위의 headerNav를 불러와서 map 매서드를 이용하면 배열을 통해 불러올 수 있음. 그 안에 있는 것을 nav라는 이름을 줌.
                        // => ()괄호에 오는 것은 리턴값 또는 생략 가능
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>   
                                {/* 즉 nav라는 map에 정보가 있음. 가져오기 위해서는 nav.url로 작성 */}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabindex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header
