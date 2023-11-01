


$(document).ready(function () {
    $("#herta").click(function () {
        $('html').fadeOut(200, function () {
            $("html").css("background-image", "url(./img/station-herta/background-herta.png)", function () { });
            $('html').fadeIn(1000, function () {
                $('#marker').animate({
                    margin: '55px 964px 171px 148px'
                }
                );
            });
            $('#introduce-content').slideUp(1000, function () {
                $("#station-name").html("太空站「黑塔」");
                $("#content-describe1").html(`<p>
                    歡迎來到「黑塔」太空站!<br>
                    寰宇的奧秘是諸多學者窮其一生探索的議題，它或許複雜到無法用任何一種語言表達，也可能普通到藏匿於隨處可見的縫隙角落。然而，星系之中錯落的生靈，卻共同繪製出了名為「文明」的瑰麗造物。
                    ...<br>
                    <span class="more" id="more">more</span>
                    </p>`);
                $("#content-describe2").html(`<p>
                    希望你可以在「黑塔」太空站感受到未知的魅力與求知的趣味!<br>
                    開放參觀區域:「黑塔」太空站太空電梯、「黑塔」太空站接待大廳。<br>
                    特別備註:每人參觀時間為30分鐘，涉及試驗之工作區域不開放參觀。</p>`)
                $('#station-img').attr('src', './img/station-herta/introduce-herta.png');
                $('#introduce-content').slideDown(1000);
            });
        });
    });
    $("#jarilo").click(function () {
        $('html').fadeOut(200, function () {
            $("html").css("background-image", "url(./img/station-jarilo-VI/belobogbackground.png)");
            $('html').fadeIn(1000, function () {
                $('#marker').animate({
                    margin: '59px 585px 167px 527px'
                });
            });
            $('#introduce-content').slideUp(1000, function () {
                $("#station-name").html("雅利落-VI");
                $("#content-describe1").html(`<p>
                穿過雪原，便能一睹貝洛伯格的全貌----它是「雅利洛-VI」這顆冰冷行星上唯一算得上是溫暖的地方。<br>
                在琥珀王克里珀的佑護下，貝洛伯格撐過了席捲整顆星球的寒潮，維持了數百年的生計...<br><br>
                <span class="more" id="more">more</span>
                </p>`);
                $("#content-describe2").html(`<p>
                【旭日節慶典】<br>
                為期七天的慶典活動!在活動期間，將會在慶典區域展開各種遊藝活動，並於周日舉辦最盛大的慶典活動。<br>
                慶典中將不限量提供食物飲品，各位參與者可以盡情享用!</p>`);
                $('#station-img').attr('src', './img/station-jarilo-VI/introduce-belobog.png');
                $('#introduce-content').slideDown(1000)
            });
        });
    });
    $("#luofu").click(function () {
        $('html').fadeOut(200, function () {
            $("html").css("background-image", "url(./img/station-Xianzhou-Luofu/background-luofu.png)");
            $('html').fadeIn(1000, function () {
                $('#marker').animate({
                    margin: '59px 176px 167px 936px'
                });
            });
            $('#introduce-content').slideUp(1000, function () {
                $("#station-name").html("仙舟「羅浮」");
                $("#content-describe1").html(`<p>
                仙舟「羅浮」是仙舟聯盟的六大座艦之一，它漂航於無盡的星海中，如無回的神矢射向「巡獵」之主的宿敵。<br>
                「羅浮」徐徐洄航在眾多文明昌盛的星域，與各個世界進行貿易與文化交流。他們與星際和平公司簽署互市協議，並幫助許多曾被摧毀的世界修復生態...<br>
                <span class="more" id="more">more</span></p>`);
                $("#content-describe2").html(`<p>
                各位旅客可以在星槎海觀賞來來往往的星槎穿梭於壯麗的玉界門，前往長樂天打打麻將、或是尋找占卜師觀測自己的星運，說不定會有意外之喜喔!<br>
                旅客們也可以參觀金人巷，品嘗仙舟當地美食，賞玩機巧 ， ， 買個紀念品回去給鄉親父老開開眼界!</p>`);
                $('#station-img').attr('src', './img/station-Xianzhou-Luofu/introduce-luofu.png');
                $('#introduce-content').slideDown(1000)
            });
        });
    });
});




