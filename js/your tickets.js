
$("document").ready(function () {
    $("#event-ticket").click(function () {

        $('#events').html("<div class='events'><div class='name'><p>الأسم</p><p class='name2'>عمر الجندي</p></div>"
            +
            "<div class='tickets-num'><p>رقم تذكرتك</p><p class='name2'>1029686168797569 </p></div>"
            +
            "<div class='id-num'><p>رقم حساب +90</p><p class='name2'>10201012160043</p></div>"
            +
            "<div class='status'><p>الحالة</p><p class='name2'> ✔️ تم التوصيل</p></div><br>"
            +
            "<button id='x1'>x</button>"
            +
            "<div class='party'><img src='img/ashour.jpg'><p class='party2'> حفل تامر عاشور بالعين السخنه</p> </div></div><br>"
            +
            "<div class='events'><div class='name'><p>الأسم</p><p class='name2'>عمر الجندي</p></div>"
            +
            "<div class='tickets-num'><p>رقم تذكرتك</p><p class='name2'>1038008106562812</p></div>"
            +
            "<div class='id-num'><p>رقم حساب +90</p><p class='name2'>10201012160043</p></div>"
            +
            "<div class='status'><p>الحالة</p><p class='name2'> ✔️ تم التوصيل</p></div><br>"
            +
            "<div class='party'><img src='img/0LERb.jpg'><p class='party2'> حفل النجوم محمد فؤاد و أحمد سعد</p> </div></div><br>"

        );

    });
    $("#event-ticket").click(function () {
        $("#events").show();
    });
    $("#events").click(function () {
        $("#events").hide();
    });
    $("#match-ticket").click(function () {

        $('#match').html("<div class='events'><div class='name'><p>الأسم</p><p class='name2'>عمر الجندي</p></div>"
            +
            "<div class='tickets-num'><p>رقم تذكرتك</p><p class='name2'>1029686168797569 </p></div>"
            +
            "<div class='id-num'><p>رقم حساب +90</p><p class='name2'>10201012160043</p></div>"
            +
            "<div class='status'><p>الحالة</p><p class='name2'> ✔️ تم التوصيل</p></div><br>"
            +
            "<button id='x2'>x</button>"
            +

            "<div class='matc'><img src='img/ahly.png'><img src='img/zamalek.png'><p class='matc2'> نادى الأهلي - النادي الزمالك</p><o class='matc3'>ستاد القاهره</o></div></div><br>"
            +
            "<div class='events'><div class='name'><p>الأسم</p><p class='name2'>عمر الجندي</p></div><div class='tickets-num'><p>رقم تذكرتك</p><p class='name2'>1018506155818001</p></div><div class='id-num'><p>رقم حساب +90</p><p class='name2'>10201012160043</p></div><div class='status'><p>الحالة</p><p class='name2'> ✔️ تم التوصيل</p></div><br><div class='matc'><img src='img/FC_Barcelona_Logo.png'><img src='img/Real_Madrid_CF_Logo.png'><p class='matc2'> نادي برشلونة - نادي ريال مدريد</p><o class='matc3'>ستاد كامب نو</o></div></div><br></div>"
            +
            "<div class='events'><div class='name'><p>الأسم</p><p class='name2'>عمر الجندي</p></div><div class='tickets-num'><p>رقم تذكرتك</p><p class='name2'>1118706145819201</p></div><div class='id-num'><p>رقم حساب +90</p><p class='name2'>10201012160043</p></div><div class='status'><p>الحالة</p><p class='name2'> ✔️ تم التوصيل</p></div><br><div class='matc'><img src='img/FC_Bayern_Munich_Logo.png'><img src='img/brousia.png'><p class='matc2'> نادي بايرن ميونخ - نادي بروسيا دورتموند</p><o class='matc3'>ستاد الاليانز ارينا</o></div></div><br></div>"

        );
    });

    $("#match-ticket").click(function () {
        $("#match").show();

    });
    $("#match").click(function () {
        $("#match").hide();
    });
});

