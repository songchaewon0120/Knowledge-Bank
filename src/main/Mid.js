function Mid() {
    return (
        <>
            <div id="mid">
                <div class="warp">
                    <div class="search">
                        <input type="text" placeholder="강의이름을 검색하세요." class="search_input" />
                        <input type="button" class="search_btn" />
                    </div>

                    <div class="event">
                        <img class="flipped_image arrow arrow_2" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                            alt="화살표 모양" />
                        <p>공지사항 및 이벤트</p>
                        <img class="arrow arrow_1" src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="화살표 모양" />
                    </div>

                    <div class="main_icon_btn">
                        <div>
                            <img src="https://i.ibb.co/QMtgGbj/4-1.png" />
                            <p>강의 보러가기</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/GcTNyZ7/book-1.png" />
                            <p>게시판</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/0rSTdNF/3.png" />
                            <p>MY페이지</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mid;