<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>한국데이타시스템</title>
</head>
<body>
<div class="item-tabs">
            <div class="flexTabsText" id="menuToggleDev">개발자관리</div>
            <div class="flexTabsImage" id="menuToggleDevBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <!-- display: none id, class 둘다 적용안되서 직접 스타일로 적용 -->
            <div style="display: none;" id="menuToggleDevChild" class="flexTabsTextParent">
                <!--세로 가운데 정렬을 잘하기 위해서는 display flex 와 align items center 속성을 해당 글자의 태그에 직접 걸어야 함.-->
                <a href="개발자조회.jsp" class="flexTabsChild">개발자조회</a>
                <a href="개발자별 계약서 조회.jsp" class="flexTabsChild">개발자별 계약서 조회</a>
            </div>

            <div class="flexTabsText" id="menuToggleCustomer">고객사관리</div>
            <div class="flexTabsImage" id="menuToggleCustomerBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild2" class="flexTabsTextParent2">
                <a href="고객사조회.jsp" class="flexTabsChild">고객사조회</a>
                <a href="고객사별 계약서 조회.jsp" class="flexTabsChild">고객사별 계약서 조회</a>
                <a href="고객사별 담당자 조회.jsp" class="flexTabsChild">고객사별 담당자 조회</a>
            </div>

            <div class="flexTabsText" id="menuToggleProject">프로젝트관리</div>
            <div class="flexTabsImage" id="menuToggleProjectBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild3" class="flexTabsTextParent3">
                <a href="프로젝트 조회.jsp" class="flexTabsChild">프로젝트 조회</a>
                <a href="프로젝트별 개발자 조회.jsp" class="flexTabsChild">프로젝트별 개발자 조회</a>
            </div>

            <div class="flexTabsText" id="menuToggleBank">입출금관리</div>
            <div class="flexTabsImage" id="menuToggleBankBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild4" class="flexTabsTextParent4">
                <a href="입금관리.jsp" class="flexTabsChild">입금관리</a>
                <a href="출금관리.jsp" class="flexTabsChild">출금관리</a>
            </div>

            <div class="flexTabsText" id="menuToggleTaxBs">세금계산서관리</div>
            <div class="flexTabsImage" id="menuToggleTaxBsBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild5" class="flexTabsTextParent5">
                <a href="매입세금계산서 조회.jsp" class="flexTabsChild">매입세금계산서 조회</a>
                <a href="매출세금계산서 조회.jsp" class="flexTabsChild">매출세금계산서 조회</a>
            </div>

            <div class="flexTabsText" id="menuToggleTax">원천세관리</div>
            <div class="flexTabsImage" id="menuToggleTaxBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild6" class="flexTabsTextParent6">
                <a href="원천세조회.jsp" class="flexTabsChild">원천세조회</a>
            </div>

            <div class="flexTabsText" id="menuToggleMachine">기기관리</div>
            <div class="flexTabsImage" id="menuToggleMachineBtn"><i class="fa-solid fa-chevron-right fa-rotate-90 fa-sm"
                    style="color: #ffffff;"></i></div>
            <div style="display: none;" id="menuToggleDevChild7" class="flexTabsTextParent7">
                <a href="기기조회.jsp" class="flexTabsChild">기기조회</a>
            </div>


        </div>
</body>
</html>