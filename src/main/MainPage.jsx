import React from 'react';
import Top from "../Top";
import Bottom from "../Bottom";
import EventPages from "./EventPages";
import { Link } from 'react-router-dom';

function Mid() {
    return (
        <>
            <Top />
            <div id="mid" className="warp">
                <div className="search">
                    <input type="text" placeholder="강의이름을 검색하세요." className="search_input" />
                    <input type="button" className="search_btn" />
                </div>

                <div className="event">
                    <EventPages />
                </div>

                <div className="main_icon_btn">
                    <div>
                        <img src="https://i.ibb.co/QMtgGbj/4-1.png" alt="강의 보러가기" />
                        <p>강의 보러가기</p>
                    </div>
                    <Link to="/Post">
                        <div>
                            <img src="https://i.ibb.co/GcTNyZ7/book-1.png" alt="게시판" />
                            <p>게시판</p>
                        </div>
                    </Link>
                    <Link to="/MyPage">
                        <div>
                            <img src="https://i.ibb.co/0rSTdNF/3.png" alt="MY페이지" />
                            <p>MY페이지</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Bottom />
        </>
    );
}

export default Mid;
