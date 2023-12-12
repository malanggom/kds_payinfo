<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="padding: 0px; margin: 0px;">

<head>

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


<body style="margin: 0px;">
<div class="item-tabs">
            <div class="flexTabsText" id="menuToggleDev">개발자관리</div>
            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <!-- display: none id, class 둘다 적용안되서 직접 스타일로 적용 -->
            <div style="display: none;" id="menuToggleDevChild" class="flexTabsTextParent">
                <div class="flexTabsChild"><a href="개발자조회.jsp" style="align-self: center;">개발자조회</a></div>
                <div class="flexTabsChild"><a href="개발자별 계약서 조회.jsp">개발자별 계약서 조회</a></div>
            </div>

            <div class="flexTabsText" id="menuToggleCustomer">고객사관리</div>
            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild2" class="flexTabsTextParent2">
                <div class="flexTabsChild"><a href="고객사조회.jsp">고객사조회</a></div>
                <div class="flexTabsChild"><a href="고객사별 계약서 조회.jsp">고객사별 계약서 조회</a></div>
                <div class="flexTabsChild"><a href="고객사별 담당자 조회.jsp">고객사별 담당자 조회</a></div>
            </div>

            <div class="flexTabsText" id="menuToggleProject">프로젝트관리</div>
            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild3" class="flexTabsTextParent3">
                <div class="flexTabsChild"><a href="프로젝트 조회.jsp">프로젝트 조회</a></div>
                <div class="flexTabsChild"><a href="프로젝트별 개발자 조회.jsp">프로젝트별 개발자 조회</a></div>
            </div>

            <div class="flexTabsText" id="menuToggleBank">입출금관리</div>
            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild4" class="flexTabsTextParent4">
                <div class="flexTabsChild"><a href="입금관리.jsp">입금관리</a></div>
                <div class="flexTabsChild"><a href="출금관리.jsp">출금관리</a></div>
            </div>

            <div class="flexTabsText" id="menuToggleTaxBs">세금계산서관리</div>

            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild5" class="flexTabsTextParent5">
                <div class="flexTabsChild"><a href="매입세금계산서 조회.jsp">매입세금계산서 조회</a></div>
                <div class="flexTabsChild"><a href="매출세금계산서 조회.jsp">매출세금계산서 조회</a></div>
            </div>

            <div class="flexTabsText" id="menuToggleTax">원천세관리</div>
            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild6" class="flexTabsTextParent6">
                <div class="flexTabsChild"><a href="원천세조회.jsp">원천세조회</a></div>
            </div>

            <div class="flexTabsText" id="menuToggleMachine">기기관리</div>
            <div class="flexTabsImage"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild7" class="flexTabsTextParent7">
                <div class="flexTabsChild"><a href="기기조회.jsp">기기조회</a></div>
            </div>

            <div class="flexTabsText">로그아웃</div>

        </div>
</body>
</html>