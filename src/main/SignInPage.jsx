import Top from '../Top';
import Bottom from '../Bottom';

function SignInPage() {
    return (
        <>
            <Top />
            <div className='sign_best'>
                <div className='sign_wrap'>
                    <p>| 로그인</p>
                    <div className='sign_box'>
                        <input type="email" placeholder="e-mail을 입력하세요." />
                        <input type="password" placeholder="password를 입력하세요." />
                    </div>
                    <div className='sign_text'>
                        <p>아직도 회원이 아니신가요?</p>
                        <p>회원가입</p>
                    </div>
                    <input type="button" value="로그인" className='sign_btn' />
                </div>
            </div>
            <Bottom />
        </>
    );
}

export default SignInPage;
