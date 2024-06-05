import Top from '../Top';
import Bottom from '../Bottom';

function MyPage() {
    return (
        <>
        <Top />
        <div className='box_line warp'>
            <img className='m-t-50 img-main' src="https://i.ibb.co/0rSTdNF/3.png" alt="마이페이지 아이콘" />
            <span className='top-haed'>마이페이지</span>
        </div>
        <div className='m-50'>
            <div className='box_border warp'>
                <div className='box_sub'>
                    <div className='top_text'>
                        <img src="https://i.ibb.co/RYt1y3P/sad.png" alt="슬픈얼굴 아이콘" />
                        <span>공지사항이 없습니다. 공지사항이 추가되면 리액트로 뜨게끔 하기</span>
                    </div>
                </div>
            </div>
        </div>
        <Bottom />
    </>
    );
}

export default MyPage;
