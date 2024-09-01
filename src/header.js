import './App.css';


function header() {
    return (
        <header>
            <ul class="top">
                <li>
                    <a href="/">일단 고민좀 해보자</a>
                </li>
                <li>
                <a href="/">(로고 가제:오늘 이거 보자!)</a>
                </li>
                <li>
                    <ul>
                        <li>
                          <a href="/">최근 본 영화</a>
                          </li>
                        <li>
                          <a href="/">찜하기</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <nav>
                <ul class="naviba">
                    <li>
                        <a href="/">메인화면</a>
                    </li>
                    <li>
                        <a href="/">사이트 정보</a>
                    </li>
                    <li>
                        <a href="/">추천 영화</a>
                    </li>
                    <li>
                        <a href="/">잡지</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default header;