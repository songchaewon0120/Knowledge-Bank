import { Link } from 'react-router-dom';

export default function Top() {
    return (
        <>
            <div id="top">
                <div className="warp top_warp">
                    <Link to="/">
                        <img src="https://i.ibb.co/qCSMkFR/Group-1.png" alt="KNOWLEDGEBANK LOGO" />
                        <p className="Knowledge_Bank_font">Knowledge Bank</p>
                    </Link>
                    <div className="login">
                        {/* SignInPage로 이동하는 Link를 추가합니다. */}
                        <Link to="/signin"><p>로그인</p></Link>
                        <p>|</p>
                        <p>회원가입</p>
                    </div>
                </div>
            </div>

            <div id="top_nav">
                <div className="warp">
                    <div className="top_nav_menu">
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
