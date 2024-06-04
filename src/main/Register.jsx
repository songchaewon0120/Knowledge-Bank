import Top from '../Top';
import Bottom from '../Bottom';

function MainPage() {
    return (
        <>
            <Top />
            <div className='wndrks'>
                <div className='box_wrap'>
                    <p className='font1'>| 회원가입</p>
                    <div className='box1_w'><input className='box1' type="password" placeholder="PASSWORD" /></div>
                    <div className='box1_w'><input className='box1' type="text" placeholder="ID" /></div>
                    <div className='box1_w'><input className='box1' type="text" placeholder="이름(수정이 불가합니다.)" /></div>
                    <div className='box1_w'><input className='box1' type="tel" placeholder="전화번호" /></div>
                    <input type="button" value="로그인" className='box_btn' />
                </div>
            </div>
            <Bottom />
        </>
    );
}

export default MainPage;
