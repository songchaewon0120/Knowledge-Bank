import Top from '../Top';
import Bottom from '../Bottom';


function SugangPage() {
    return (
        <>
            <Top />
            <div className='gang_box box_border warp'>
                <div>
                    <img src="https://i.ibb.co/GTX165g/Rectangle-18.png" alt="강의 썸네일" />
                    <div className='gang_text'>
                        <p>강의 이름</p>
                        <p>강의 선생님 이름</p>
                    </div>
                    <div className='gang_btn'>
                        <div>
                            강의 보러가기
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    );
}

export default SugangPage;
