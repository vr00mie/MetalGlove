 $(document).ready(function(){

        $("#nav-mobile").html($("#nav-main").html());

        $("#nav-trigger span").click(function(){
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $(this).removeClass("open");
            } else {
                $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
                $(this).addClass("open");
            }
        });  
        
// TEST CODE

       /* $("#nav-main a").click(funciton(e){
            e.preventDefault();
            $('a').addClass('active');
            $(this).parent().siblings().find('a').removeClass('active');
        });  */

       /* var thisUrl = location.href.split("/");
        var currentPage = thisUrl[thisUrl.length-1]
            .replace('.html','');

        $("#nav-main a").each(function(){
            if(String($(this).text()).toLowerCase()
                === currentPage.toLowerCase())
                $(this).addClass('active');
        });

        if(currentPage === "index")
            $("#nav-main a").eq(0).addClass("active");*/
              
});

