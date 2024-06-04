import Top from "../Top";
import Bottom from "../Bottom";

function Mid() {
    return (
        <>
            <Top/>
            <div id="mid">
                <div className="warp">
                    <div className="search">
                        <input type="text" placeholder="강의이름을 검색하세요." className="search_input" />
                        <input type="button" className="search_btn" />
                    </div>

                    <div className="event">
                        <img className="arrow arrow_2" src="https://i.ibb.co/Kw1zbbc/271228.png"
                            alt="화살표 모양" />
                        <p>공지사항 및 이벤트</p>
                        <img className="arrow arrow_1" src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="화살표 모양" />
                    </div>

                    <div className="main_icon_btn">
                        <div>
                            <img src="https://i.ibb.co/QMtgGbj/4-1.png" alt="강의 보러가기" />
                            <p>강의 보러가기</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/GcTNyZ7/book-1.png" alt="게시판" />
                            <p>게시판</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/0rSTdNF/3.png" alt="MY페이지" />
                            <p>MY페이지</p>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom/>
        </>
    );
}

export default Mid;
