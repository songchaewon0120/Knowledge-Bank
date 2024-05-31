import "./chaeCss.css";

export default function Top() {
    return (
        <>
            <div id="top">
                <div class="warp top_warp">
                    <a class="logo" href="##">
                        <img src="https://i.ibb.co/ysD3P8H/Group-1.png" alt="KNOWLEDGEBANK LOGO" />
                    </a>
                    <div class="login">
                        <p>로그인</p>
                        <p>|</p>
                        <p>회원가입</p>
                    </div>
                </div>
            </div>

            <div id="top_nav">
                <div class="warp">
                    <div class="top_nav_menu">
                        <p>공지사항</p>
                        <p>MY페이지</p>
                        <p>게시판</p>
                        <p>이벤트</p>
                        <p>로그인</p>
                    </div>
                </div>
            </div>
        </>
    )
}