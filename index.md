<!DOCTYPE html>
<html lang="en">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>Nicolas' Portfolio</title>
    <link rel="shortcut icon" href="/Addatives/Nicolas-N.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">

</html>

<body id="body">
    <div class="container">
        <div class="header">
            <img src="Addatives/Nicolas-Title.png" alt="N2-Letter" class="N2-Letter" onclick="location.href='/Pages/secret.html';">
            <p>
                ㅤ
            </p>
        </div>

        <img src="Addatives/N-Letter.png" alt="N-Letter" class="N-Letter" id="N-Letter">
        <img src="Addatives/Nicolas-N.png" alt="N-Nicolas" class="N-Nicolas">

        <h1 id="heyNicolas" class="nicText">Hey, I'm ㅤicolas..</h1>
        <h1 id="heyNicolas2" class="nicText2">I'm a Full Stack Developer,</h1>
        <h1 id="heyNicolas3" class="nicText3">Software Developer and YouTuber</h1>


        <img src="Addatives/navbar.png" alt="navbar" class="navbar">
        <img src="Addatives/homepage.png" alt="home" class="home" id="home" onclick="location.href='index.html';">
        <img src="Addatives/exppage.png" alt="exp" class="exp" id="exp" onclick="location.href='/Pages/exp.html';">
        <img src="Addatives/connec.png" alt="connect" class="connect" id="connect" onclick="location.href='/Pages/connect.html';">

        <img src="Addatives/trophy-for-survey.png" alt="trophy" class="surveytrophy" id="surveytrophy" onclick="trophyClick()">
        <img src="Addatives/trophy-for-survey.png" alt="N-Trophy" id="N-Trophy" class="N-Trophy">

        <textarea id="js" class="js" placeholder="Make sure to open your console! (JavaScript)" spellcheck="false"></textarea>
        <iframe id="code" class="codeFrame"></iframe>

        <button id="suvery" class="survey" onclick="survey()">Survey</button>

        <button type="submit" class="compileButton" id="compileButton" onclick="compileCode()">compile</button>

        <script src="/JavaScript/interpreter.js"></script>
        <script src="/JavaScript/console.js"></script>
        <script src="/JavaScript/mode.js"></script>
        <script src="/JavaScript/debugging.js"></script>
        <script src="/JavaScript/survey.js"></script>
        <script src="/JavaScript/hovers.js"></script>

        <button class="light" onclick="toggleTheme()">Toggle Light Mode</button>
        <button class="dark" onclick="toggleBack()">Toggle Dark Mode</button>

</body>
