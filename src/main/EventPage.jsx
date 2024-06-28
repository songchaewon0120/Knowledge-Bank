import React from 'react';
import Top from '../Top';
import Bottom from '../Bottom';
import EventPages from './EventPages';

function EventPage() {
    return (
        <>
            <Top />
            <div className='box_line warp'>
                <img className='m-t-50 img-main' src="https://i.ibb.co/Npt8yXt/pouck.png" alt="게시판 아이콘" />
                <span className='top-haed'>이벤트</span>
            </div>
            <div className='m-50'>
                <div className='box_border warp'>
                    <div className='box_sub'>
                        <div className='top_text'>
                            <EventPages />
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    );
}

export default EventPage;
