<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="padding: 0px; margin: 0px;">

<head>
	<title>한국데이타시스템</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="./cssfile.css">
    <link rel="stylesheet" href="./grid.css">
    <link rel="stylesheet" href="./main.js">
    <link rel="stylesheet" href="./mainTabs.js">
    <script src="https://kit.fontawesome.com/16c1215ef1.js" crossorigin="anonymous"></script>
    <style>
        div {
            height: 100%;
            float: left;
        }

        /* 모든기기공통 CSS */
        body {
            background-color: orange;
        }


        /* desktop 규격 */
        @media screen and (min-width: 1024px) {
            body {
                background-color: white;
            }
        }

        /* tablet 규격 */
        @media screen and (max-width: 1023px) {
            body {
                background-color: pink;
            }
        }

        /* mobile 규격 */
        @media screen and (max-width: 767px) {
            body {
                background-color: navy;
            }
        }
    </style>
</head>


<body>

    <div class="grid-container">
    	<!-- 로고 include 시작 -->
        <jsp:include page="/logo.jsp"/>
        <!-- 로고 include 종료 -->
        
        <div class="item-header">
		    <div class="flexHeader">
		        <div class="flexHeaderChild mgL10">입출금관리 > 출금관리</div>
		    </div>
		</div>
		
		<!-- 탭 include 시작 -->
        <jsp:include page="/Tabs.jsp"/>
        <!-- 탭 include 종료 -->

        <div class="item-main bg-f6f6f6ff text-333333">
            <div class="flex-main">
                <div class="flexMainItem">
                    <button class="btnCard" id="flexBtnPj">
                        <div class="flexBtnParent">
                            <div class="flexBtn">프로젝트투입</div>
                            <div class="flexBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i></div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnContract">
                        <div class="flexBtnParent">
                            <div class="flexBtn">계약서</div>
                            <div class="flexBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i></div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnWhtaxVat">
                        <div class="flexBtnParent">
                            <div class="flexBtn">근로/사업 소득</div>
                            <div class="flexBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i></div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnYear">
                        <div class="flexBtnParent">
                            <div class="flexBtn">년차</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnGrade">
                        <div class="flexBtnParent">
                            <div class="flexBtn">등급</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnPosition">
                        <div class="flexBtnParent">
                            <div class="flexBtn">직책</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnRank">
                        <div class="flexBtnParent">
                            <div class="flexBtn">직급</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnJobtitle">
                        <div class="flexBtnParent">
                            <div class="flexBtn">직무</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnSkill">
                        <div class="flexBtnParent">
                            <div class="flexBtn">스킬</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnLanguage">
                        <div class="flexBtnParent">
                            <div class="flexBtn">언어</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard" id="flexBtnContactRoot">
                        <div class="flexBtnParent">
                            <div class="flexBtn">컨텍루트</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                        </div>
                    </button>
                    <button class="btnCard">
                        <div class="flexBtnParent">
                            <div class="flexBtn">초기화</div>
                        </div>
                    </button>
                </div>

                <div class="flexMainItemChild">
                    <button class="btnCardHidden" id="flexBtnChild"
                        style="visibility: hidden; top:115px; left:251px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxCenter">
                                    <div class="flexBtnHiddenBtnFix">O</div>
                                    <div class="flexBtnHiddenBtnFix">X</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild2"
                        style="visibility: hidden; top:115px; left:409px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">개발자</div>
                                    <div class="flexBtnHiddenBtn">고객사</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild3"
                        style="visibility: hidden; top:115px; left:528px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">3.3%</div>
                                    <div class="flexBtnHiddenBtn">사업자</div>
                                    <div class="flexBtnHiddenBtn">직원</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    
                    <!-- 모달 시작 -->
                    <div style="display: none;" class="modalBox" id="modalBox">
                    </div>
                    <div style="display: none;" class="modalBox2" id="modalBox2">
                    <div class="modal fontOpensansSm" id="modal" style="display: none;">
                        <form action="" method="post">
                                <!-- <legend>개인정보입력</legend> -->
                                <label class="font-opensans" style="margin-left: 10px;">개발자 추가</label><br><br><br>
                                <label style="margin-left: 10px;">이름</label>
                                <label style="margin-left: 166px;">휴대폰번호</label>
                                <label style="margin-left: 244px;">이메일주소</label>
                                <label style="margin-left: 266px;">카카오톡 닉네임</label>
                                <label style="margin-left: 100px;">컨텍루트</label>
                                <br>

                                <div style="margin-top: 10px;">
                                    <input type="text" name="name" class="inputModalPhone" style="margin-left: 10px;">
                                    <input type="text" name="phone" class="inputModalPhoneR modalMgR5" style="margin-left: 80px;">
                                    -
                                    <input type="text" name="phone1" class="inputModalPhoneR modalMgLR5">
                                    -
                                    <input type="text" name="phone2" class="inputModalPhoneR modalMgL5">
                                    <input type="text" name="email" class="inputModalPhone modalMgR5" style="margin-left: 80px;">
                                    @
                                    <input type="text" name="email1" class="inputModalPhone modalMgL5">
                                    <input type="text" value="" class="inputModalPhone" style="margin-left: 80px;">
                                    <button class="fontOpensansSm modalBtnAuto" style="margin-left: 80px;">잡코리아</button><button class="fontOpensansSm modalBtnAuto">소개</button><button class="fontOpensansSm modalBtnAuto">OKKY</button>
                                    <br><br><br><br>
                                </div>
                                
                                <label style="margin-left: 10px;">원천세/부가세</label>
                                <label style="margin-left: 110px;">주민등록번호</label>
                                <label style="margin-left: 246px;">사업자등록번호</label>
                                <label style="margin-left: 234px;">상호</label>
                                <br>

                                <div style="margin-top: 10px;">
                                    <button class="fontOpensansSm modalBtnAuto" style="margin-left: 10px;">3.3%</button><button class="fontOpensansSm modalBtnAuto">사업자</button>
                                    <input type="text" value="" class="inputModalPhone modalMgR5" style="margin-left: 80px;">
                                    -
                                    <input type="text" value="" class="inputModalPhone modalMgL5">
                                    <input type="text" value="" class="inputModalPhone modalMgR5" style="margin-left: 80px;">
                                    -
                                    <input type="text" value="" class="inputModalPhone modalMgL5">
                                    <input type="text" value="" class="inputModalPhone" style="margin-left: 80px;">
                                    <br><br><br><br>
                                </div>

                                <label style="margin-left: 10px;">프로젝트 투입</label>
                                <label style="margin-left: 60px;">고객사별 계약서</label>
                                <label style="margin-left: 46px;">개발자별 계약서</label>
                                <label style="margin-left: 46px;">은행</label>
                                <label style="margin-left: 166px;">예금주</label>
                                <label style="margin-left: 152px;">계좌번호</label>
                                <label style="margin-left: 140px;">직원</label>
                                <label style="margin-left: 116px;">직원금액</label>
                                <br>
                                
                                <div style="margin-top: 10px;">
                                    <button class="fontOpensansSm modalBtnOX" style="margin-left: 10px;">O</button><button class="fontOpensansSm modalBtnOX">X</button>
                                    <button class="fontOpensansSm modalBtnOX" style="margin-left: 80px;">O</button><button class="fontOpensansSm modalBtnOX">X</button>
                                    <button class="fontOpensansSm modalBtnOX" style="margin-left: 80px;">O</button><button class="fontOpensansSm modalBtnOX">X</button>
                                    <input type="text" value="" class="inputModalPhone" style="margin-left: 80px;">
                                    <input type="text" value="" class="inputModalPhone" style="margin-left: 80px;">
                                    <input type="text" value="" class="inputModalPhone" style="margin-left: 80px;">
                                    <button class="fontOpensansSm modalBtnOX" style="margin-left: 80px;">O</button><button class="fontOpensansSm modalBtnOX">X</button>
                                    <input type="text" value="" class="inputModalPhone modalMgR10" style="margin-left: 80px;">만원
                                    <br><br><br><br>
                                </div>
                                
                                <label style="margin-left: 10px;">년차</label>
                                <label style="margin-left: 210px;">등급</label>
                                <label style="margin-left: 136px;">직책</label>
                                <label style="margin-left: 208px;">직급</label>
                                <label style="margin-left: 390px;">직무</label>
                                <br>

                                <div style="margin-top: 10px;">
                                    <select name="year" class="modalDropdown">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>

                                    </select>년
                                    <select name="month" class="modalDropdown">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    개월
                                    
                                    <select name="grade" class="modalDropdownGrade" style="margin-left: 80px;">
                                        <option value="초급">초급</option>
                                        <option value="초상급">초상급</option>
                                        <option value="중급">중급</option>
                                        <option value="중상급">중상급</option>
                                        <option value="고급">고급</option>
                                        <option value="특급">특급</option>
                                    </select>

                                    <button class="fontOpensansSm modalBtnAuto" style="margin-left: 80px;">PM</button><button class="fontOpensansSm modalBtnAuto">PL</button><button class="fontOpensansSm modalBtnAuto">AA</button><button class="fontOpensansSm modalBtnAuto">TA</button>
                                    <button class="fontOpensansSm modalBtnAuto" style="margin-left: 80px;">사원</button><button class="fontOpensansSm modalBtnAuto">주임</button><button class="fontOpensansSm modalBtnAuto">대리</button><button class="fontOpensansSm modalBtnAuto">과장</button><button class="fontOpensansSm modalBtnAuto">차장</button><button class="fontOpensansSm modalBtnAuto">부장</button><button class="fontOpensansSm modalBtnAuto">이사</button>
                                    <button class="fontOpensansSm modalBtnAuto" style="margin-left: 80px;">운영</button><button class="fontOpensansSm modalBtnAuto">설계</button><button class="fontOpensansSm modalBtnAuto">개발</button>
                                    <br><br><br><br>
                                </div>

                                <label style="margin-left: 10px;">언어</label>
                                <br>

                                <div style="margin-top: 10px;">
                                    <button class="fontOpensansSm modalBtnAutoLanguage">C</button><button class="fontOpensansSm modalBtnAutoLanguage">C++</button><button class="fontOpensansSm modalBtnAutoLanguage">C#</button><button class="fontOpensansSm modalBtnAutoLanguage">Objective-C</button>
                                    <button class="fontOpensansSm modalBtnAutoLanguage">Java</button><button class="fontOpensansSm modalBtnAutoLanguage">Python</button><button class="fontOpensansSm modalBtnAutoLanguage">Html</button><button class="fontOpensansSm modalBtnAutoLanguage">CSS</button>
                                    <button class="fontOpensansSm modalBtnAutoLanguage">JavaScript</button><button class="fontOpensansSm modalBtnAutoLanguage">Jsp</button><button class="fontOpensansSm modalBtnAutoLanguage">R</button><button class="fontOpensansSm modalBtnAutoLanguage">Ruby</button>
                                    <button class="fontOpensansSm modalBtnAutoLanguage">PHP</button><button class="fontOpensansSm modalBtnAutoLanguage">ADA</button><button class="fontOpensansSm modalBtnAutoLanguage">Basic</button><button class="fontOpensansSm modalBtnAutoLanguage">Kotlin</button>
                                    <button class="fontOpensansSm modalBtnAutoLanguage">Lisp</button><button class="fontOpensansSm modalBtnAutoLanguage">Pascal</button><button class="fontOpensansSm modalBtnAutoLanguage">Prolog</button><button class="fontOpensansSm modalBtnAutoLanguage">Scala</button>
                                    <button class="fontOpensansSm modalBtnAutoLanguage">Swift</button><button class="fontOpensansSm modalBtnAutoLanguage">VisualBasic</button>
                                    <br><br><br><br><br><br>
                                </div>

                                <div style="display: flex; justify-content: center;"><input type="submit" value="추가" class="modalMgLR20 modalBtnAuto">
                                    <input type="reset" value="초기화" class="modalMgLR20 modalBtnAuto">
                                </div>
                        </form>
                    </div>
                </div>
                    <!-- modal 종료 -->

                    <button class="btnCardHidden" id="flexBtnChild4"
                        style="visibility: hidden; top:115px; left:695px;">
                        <div class="flexBtnParent">
                            <div class="flexBtn">년차</div>
                            <div class="flexBtn">
                                <i class="fa-solid fa-chevron-right fa-rotate-90 fa-xs"></i>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild20"
                        style="visibility: hidden; top:115px; left:800px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxCenter">
                                    <div class="flexBtnHiddenBtnFix">초급</div>
                                    <div class="flexBtnHiddenBtnFix">초상급</div>
                                </div>
                                <div class="flexBtnBoxCenter">
                                    <div class="flexBtnHiddenBtnFix">중급</div>
                                    <div class="flexBtnHiddenBtnFix">중상급</div>
                                </div>
                                <div class="flexBtnBoxCenter">
                                    <div class="flexBtnHiddenBtnFix">고급</div>
                                    <div class="flexBtnHiddenBtnFix">특급</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild5"
                        style="visibility: hidden; top:115px; left:905px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxCenter">
                                    <div class="flexBtnHiddenBtnFix">PM</div>
                                    <div class="flexBtnHiddenBtnFix">PL</div>
                                </div>
                                <div class="flexBtnBoxCenter">
                                    <div class="flexBtnHiddenBtnFix">AA</div>
                                    <div class="flexBtnHiddenBtnFix">TA</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild6"
                        style="visibility: hidden; top:115px; left:1009px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">사원</div>
                                    <div class="flexBtnHiddenBtn">주임</div>
                                    <div class="flexBtnHiddenBtn">대리</div>
                                </div>
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">과장</div>
                                    <div class="flexBtnHiddenBtn">차장</div>
                                    <div class="flexBtnHiddenBtn">부장</div>
                                </div>
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">이사</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild7"
                        style="visibility: hidden; top:115px; left:1114px;">
                        <div class="flexBtnBox">
                            <div class="flexBtnBoxs">
                                <div class="flexBtnHiddenBtn">운영</div>
                                <div class="flexBtnHiddenBtn">설계</div>
                                <div class="flexBtnHiddenBtn">개발</div>
                            </div>
                            <div class="flexBtnBoxs2">
                                <div class="flexBtnHiddenBtnReset">초기화</div>
                                <div class="flexBtnHiddenBtnApply">적용</div>
                            </div>
                        </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild8"
                        style="visibility: hidden; top:115px; left:1219px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnHiddenTitle">
                                    기종
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">C</div>
                                    <div class="flexBtnHiddenBtn">C++</div>
                                    <div class="flexBtnHiddenBtn">C#</div>
                                    <div class="flexBtnHiddenBtn">Objective-C</div>
                                    <div class="flexBtnHiddenBtn">Java</div>
                                </div>
                                <div class="flexBtnHiddenTitle">
                                    OS
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">Python</div>
                                    <div class="flexBtnHiddenBtn">Html</div>
                                    <div class="flexBtnHiddenBtn">CSS</div>
                                    <div class="flexBtnHiddenBtn">JavaScript</div>
                                    <div class="flexBtnHiddenBtn">Jsp</div>
                                </div>
                                <div class="flexBtnHiddenTitle">
                                    DBMS
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">R</div>
                                    <div class="flexBtnHiddenBtn">Ruby</div>
                                    <div class="flexBtnHiddenBtn">PHP</div>
                                    <div class="flexBtnHiddenBtn">ADA</div>
                                    <div class="flexBtnHiddenBtn">Basic</div>
                                </div>
                                <div class="flexBtnHiddenTitle">
                                    툴
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">Kotlin</div>
                                    <div class="flexBtnHiddenBtn">Lisp</div>
                                    <div class="flexBtnHiddenBtn">Pascal</div>
                                    <div class="flexBtnHiddenBtn">Prolog</div>
                                </div>
                                <div class="flexBtnHiddenTitle">
                                    프레임워크
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">Scala</div>
                                    <div class="flexBtnHiddenBtn">Swift</div>
                                    <div class="flexBtnHiddenBtn">VisualBasic</div>
                                </div>
                                <div class="flexBtnHiddenTitle">
                                    통신
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">Scala</div>
                                    <div class="flexBtnHiddenBtn">Swift</div>
                                    <div class="flexBtnHiddenBtn">VisualBasic</div>
                                </div>
                                <div class="flexBtnHiddenTitle">
                                    기타
                                </div>
                                <div class="flexBtnBoxs1">
                                    <div class="flexBtnHiddenBtn">Scala</div>
                                    <div class="flexBtnHiddenBtn">Swift</div>
                                    <div class="flexBtnHiddenBtn">VisualBasic</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild9"
                        style="visibility: hidden; top:115px; left:1324px;">
                        <div class="flexBtnParent">
                            <div class="flexBtnBox">
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">C</div>
                                    <div class="flexBtnHiddenBtn">C++</div>
                                    <div class="flexBtnHiddenBtn">C#</div>
                                    <div class="flexBtnHiddenBtn">Objective-C</div>
                                    <div class="flexBtnHiddenBtn">Java</div>
                                </div>
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">Python</div>
                                    <div class="flexBtnHiddenBtn">Html</div>
                                    <div class="flexBtnHiddenBtn">CSS</div>
                                    <div class="flexBtnHiddenBtn">JavaScript</div>
                                    <div class="flexBtnHiddenBtn">Jsp</div>
                                </div>
                                <div class="flexBtnBoxs">
                                </div>
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">R</div>
                                    <div class="flexBtnHiddenBtn">Ruby</div>
                                    <div class="flexBtnHiddenBtn">PHP</div>
                                    <div class="flexBtnHiddenBtn">ADA</div>
                                    <div class="flexBtnHiddenBtn">Basic</div>
                                </div>
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">Kotlin</div>
                                    <div class="flexBtnHiddenBtn">Lisp</div>
                                    <div class="flexBtnHiddenBtn">Pascal</div>
                                    <div class="flexBtnHiddenBtn">Prolog</div>
                                </div>
                                <div class="flexBtnBoxs">
                                    <div class="flexBtnHiddenBtn">Scala</div>
                                    <div class="flexBtnHiddenBtn">Swift</div>
                                    <div class="flexBtnHiddenBtn">VisualBasic</div>
                                </div>
                                <div class="flexBtnBoxs2">
                                    <div class="flexBtnHiddenBtnReset">초기화</div>
                                    <div class="flexBtnHiddenBtnApply">적용</div>
                                </div>
                            </div>
                    </button>
                    <button class="btnCardHidden" id="flexBtnChild10"
                        style="visibility: hidden;top:115px; left:1428px;">
                        
                        <div class="flexBtnParent">
                        <div class="flexBtnBox">
                            <div class="flexBtnBoxs">
                                <div class="flexBtnHiddenBtn">잡코리아</div>
                                <div class="flexBtnHiddenBtn">소개</div>
                                <div class="flexBtnHiddenBtn">OKKY</div>
                            </div>
                            <div class="flexBtnBoxs2">
                                <div class="flexBtnHiddenBtnReset">초기화</div>
                                <div class="flexBtnHiddenBtnApply">적용</div>
                            </div>
                        </div>
                        </div>
                    </button>
                </div>

                <div class="flexMainItemSearch">
                    <div class="flexMainItemSearchChild">
                        <input type="text" placeholder="" class="inputSearch mgL10" id="searchBar" style="z-index: 1;">
                        <button class="flexBtnSearch mgL10" id="searchBtn" style="z-index: 1;">검색</button>
                        <button class="flexBtnSearch mgL10" id="devAddBtn" type="button"
                            style="z-index: 1;">개발자추가</button>
                    </div>
                    <!-- <div class="flexMainItemSearchChildRight">
                        <div class="flexMainItemSearchChildRightChild">
                            <button class="flexBtnSearch">10개씩</button>
                        </div>
                    </div> -->
                </div>

                <div class="flexMainItemSearchHidden">
                    <div class="flexMainItemSearchChild">
                        <input type="text" placeholder="" class="inputSearch mgL10" style="visibility: hidden;">
                        <button class="flexBtnSearch mgL10" style="visibility: hidden;">검색</button>
                        <button class="flexBtnSearch mgL10" style="visibility: hidden;">개발자추가</button>
                    </div>
                    <!-- <div class="flexMainItemSearchChildRight">
                        <div class="flexMainItemSearchChildRightChild">
                            <button class="flexBtnSearch">10개씩</button>
                            <button class="flexBtnSearch" style="visibility: hidden;">10개씩</button>
                            <button class="flexBtnSearch" style="visibility: hidden;">25개씩</button>
                            <button class="flexBtnSearch" style="visibility: hidden;">50개씩</button>
                            <button class="flexBtnSearch" style="visibility: hidden;">75개씩</button>
                        </div>
                    </div> -->
                </div>

                <div class="flexMainList">
                    <div style="width: 1650px; height: 590px; overflow: scroll;">
                        <table class="fontOpensansSm" style="margin-left: 10px;">
                            <thead>
                                <tr>
                                <th>이름</th>
                                <th>프로젝트 투입</th>
                                <th>개발자별계약서</th>
                                <th>고객사별계약서</th>
                                <th>3.3%/사업자</th>
                                <th>주민등록번호</th>
                                <th>사업자등록번호</th>
                                <th>상호</th>
                                <th>직원</th>
                                <th>직원금액</th>
                                <th>년차</th>
                                <th>등급</th>
                                <th>직책</th>
                                <th>직급</th>
                                <th>직무</th>
                                <th>스킬</th>
                                <th>언어</th>
                                <th>소개자</th>
                                <th>컨텍루트</th>
                                <th>카카오톡닉네임</th>
                                <th>휴대폰번호</th>
                                <th>이메일주소</th>
                                <th>은행</th>
                                <th>예금주</th>
                                <th>계좌번호</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                            <tr>
                                <td>홍길동</td>
                                <td>O</td>
                                <td>X</td>
                                <td>X</td>
                                <td>3.3</td>
                                <td>123456-1234567</td>
                                <td>12345-12345</td>
                                <td>N/A</td>
                                <td>O</td>
                                <td>100만원</td>
                                <td>9년</td>
                                <td>중급</td>
                                <td>PM</td>
                                <td>사원</td>
                                <td>개발</td>
                                <td>spring</td>
                                <td>JAVA</td>
                                <td>고길동</td>
                                <td>소개</td>
                                <td>홍길동</td>
                                <td>010-0000-0000</td>
                                <td>홍길동@naver.com</td>
                                <td>국민</td>
                                <td>홍길동</td>
                                <td>0000-000-000000</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <div class="flexMainPagenation">
                    <div class="pagination fontOpensansSm">
                        <a class="fontOpensansSm" href="#">&laquo;</a>
                        <a class="fontOpensansSm" href="#">1</a>
                        <a class="fontOpensansSm" href="#">2</a>
                        <a class="fontOpensansSm" href="#">3</a>
                        <a class="fontOpensansSm" href="#">4</a>
                        <a class="fontOpensansSm" href="#">5</a>
                        <a class="fontOpensansSm" href="#">6</a>
                        <a class="fontOpensansSm" href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="main.js">
    </script>

</body>

</html>