import "./chaeCss.css";

export default function Bottom() {
    return (
        <>
            <div id="bottom">
                <div className="warp bottom_warp">
                    <div className="bottom_1_line">
                        <img src="https://i.ibb.co/qCSMkFR/Group-1.png"
                            alt="knowledge-bank-logo-2-2" />
                        <div className="bottom_text_group">
                            <div className="bottom_text_1 bottom_text_font">
                                <p>| 인천광역시 부평구 무네미로 448번길 56, 0층, 00실</p>
                                <p>| 점심시간 12시~13시, 공휴일 휴무</p>
                                <p>| 고객지원센터 : 01-123-1234</p>
                            </div>
                            <div className="bottom_text_2 bottom_text_font" style={{ marginLeft: '40px' }}>
                                <p>| 이용약관</p>
                                <p>| 개인정보처리방침</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_2_line">
                        <div>
                            <p>© KNOWLEDGEBANK. All rights reserved.</p>
                        </div>
                        <div className="bottom_logo">
                            <img src="https://i.ibb.co/8PTpb5N/KAICON-removebg-preview.png"
                                alt="KAICON-removebg-preview" />
                            <img src="https://i.ibb.co/Ph2g4bG/INSTAICON-removebg-preview.png"
                                alt="INSTAICON-removebg-preview" />
                            <img src="https://i.ibb.co/YQtDvs4/FACEBOOKICON-removebg-preview.png"
                                alt="FACEBOOKICON-removebg-preview" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
