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
        <div class="item-logo bg-2c3e50ff text-white font-opensans-logo">
            <div class="flexLogoText">
                한국데이타시스템
            </div>
        </div>

</body>
</html>